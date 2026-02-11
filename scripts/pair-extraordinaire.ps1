# Pair Extraordinaire — Create a branch with N coauthored commits, ready to open a PR and merge.
# Run from repo root: .\scripts\pair-extraordinaire.ps1
# Use this in https://github.com/hussainu6/radix-to-material-66 to achieve the badge.

param(
    [Parameter(Mandatory = $true)]
    [string]$CoAuthor,   # e.g. "Partner Name <partner@users.noreply.github.com>"
    [Parameter(Mandatory = $false)]
    [int]$Count = 10,    # 10=BRONZE, 24=SILVER, 48=GOLD
    [Parameter(Mandatory = $false)]
    [string]$Branch = "pair-extraordinaire"
)

$branchName = "$Branch-$Count"
$logFile = "pair-log.txt"

Write-Host "Pair Extraordinaire script (radix-to-material-66)" -ForegroundColor Cyan
Write-Host "  Co-author: $CoAuthor"
Write-Host "  Commits:   $Count"
Write-Host "  Branch:    $branchName"
Write-Host ""

# Ensure we're on main and up to date
git checkout main 2>$null
if ($LASTEXITCODE -ne 0) { Write-Host "Run this from the repo root." -ForegroundColor Red; exit 1 }
git pull origin main 2>$null

# Create branch
git checkout -b $branchName
if ($LASTEXITCODE -ne 0) {
    Write-Host "Branch $branchName may already exist. Delete it or use a different -Branch name." -ForegroundColor Yellow
    exit 1
}

# Create or touch log file
if (-not (Test-Path $logFile)) { Set-Content -Path $logFile -Value "" }

# N commits with Co-authored-by
for ($i = 1; $i -le $Count; $i++) {
    Add-Content -Path $logFile -Value "Coauthored commit $i - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
    git add $logFile
    $msg = "Pair commit $i`n`nCo-authored-by: $CoAuthor"
    git commit -m $msg
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Commit $i failed." -ForegroundColor Red
        exit 1
    }
    Write-Host "  Commit $i / $Count" -ForegroundColor Green
}

Write-Host ""
Write-Host "Done. Push and open a PR:" -ForegroundColor Cyan
Write-Host "  git push origin $branchName"
Write-Host "  Then: https://github.com/hussainu6/radix-to-material-66/compare -> New Pull Request -> Merge."
Write-Host ""
