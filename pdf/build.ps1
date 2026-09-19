# build.ps1 — rend pdf/dossier.html en PDF A4 via Chrome/Edge headless
# Produit DEUX fichiers depuis la MÊME source :
#   dossier.pdf      (français — source de vérité, mise en page)
#   dossier-en.pdf   (anglais — via ?lang=en, calque i18n/en.js)
# Usage : depuis la racine du projet ->  powershell -File pdf\build.ps1
#         (option) -Lang fr  ou  -Lang en  pour n'en produire qu'un seul.

param([ValidateSet('both', 'fr', 'en')][string]$Lang = 'both')

$ErrorActionPreference = 'Stop'
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$html = Join-Path $here 'dossier.html'
$uri  = ([System.Uri]$html).AbsoluteUri   # file:///C:/...

$candidates = @(
  "C:\Program Files\Google\Chrome\Application\chrome.exe",
  "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
  "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
  "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
)
$engine = $candidates | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $engine) { throw "Aucun Chrome/Edge trouvé." }
Write-Host "Moteur : $engine"

function Build-Pdf($sourceUri, $outPdf, $etiquette) {
  $tmp = Join-Path ([System.IO.Path]::GetTempPath()) ("chrome-pdf-" + [guid]::NewGuid().ToString('N'))
  Write-Host ""
  Write-Host "[$etiquette] $sourceUri"

  # --user-data-dir temporaire : force une instance neuve (sinon Chrome déjà
  # ouvert happe l'invocation headless et ne génère rien).
  & $engine `
    --headless=new `
    --disable-gpu `
    --no-pdf-header-footer `
    --user-data-dir="$tmp" `
    --print-to-pdf="$outPdf" `
    $sourceUri

  Remove-Item -Recurse -Force $tmp -ErrorAction SilentlyContinue

  # Attendre que Chrome ait fini d'écrire (taille stable) avant de mesurer.
  $last = -1
  for ($i = 0; $i -lt 40; $i++) {
    if (Test-Path $outPdf) {
      $sz = (Get-Item $outPdf).Length
      if ($sz -gt 0 -and $sz -eq $last) { break }
      $last = $sz
    }
    Start-Sleep -Milliseconds 250
  }

  if ((Test-Path $outPdf) -and (Get-Item $outPdf).Length -gt 0) {
    $kb = [math]::Round((Get-Item $outPdf).Length / 1KB)
    Write-Host "[$etiquette] OK -> $outPdf ($kb KB)"
  } else {
    throw "[$etiquette] Le PDF n'a pas été généré."
  }
}

if ($Lang -eq 'both' -or $Lang -eq 'fr') {
  Build-Pdf $uri (Join-Path $here 'dossier.pdf') 'FR'
}
if ($Lang -eq 'both' -or $Lang -eq 'en') {
  Build-Pdf "$uri`?lang=en" (Join-Path $here 'dossier-en.pdf') 'EN'
}
