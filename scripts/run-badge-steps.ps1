# Run GitHub badge steps (Quickdraw, YOLO) - requires: gh auth login (once)
# Usage: .\scripts\run-badge-steps.ps1

$ErrorActionPreference = "Stop"
$repo = "hussainu6/radix-to-material-66"

Write-Host "Checking gh auth..." -ForegroundColor Cyan
$null = gh auth status 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "`nNot logged in. Run this first (browser will open, click Authorize):" -ForegroundColor Yellow
    Write-Host "  gh auth login --web --git-protocol https" -ForegroundColor White
    Write-Host "`nThen run this script again." -ForegroundColor Yellow
    exit 1
}

Write-Host "`n--- Quickdraw: create issue, wait 10s, close ---" -ForegroundColor Cyan
$issueUrl = gh issue create --repo $repo --title "Quickdraw badge test" --body "Closing in 10 seconds for Quickdraw achievement."
if ($issueUrl -match "/(\d+)\s*$") { $issueNum = $Matches[1] } else { $issueNum = ($issueUrl -split "/")[-1].Trim() }
Write-Host "Created issue: $issueUrl"
Start-Sleep -Seconds 10
gh issue close $issueNum --repo $repo
Write-Host "Closed. Quickdraw done." -ForegroundColor Green

Write-Host "`n--- YOLO: merge an open PR without review ---" -ForegroundColor Cyan
$openPRs = gh pr list --repo $repo --state open --json number,headRefName -q ".[].number"
if ($openPRs) {
    $firstPR = ($openPRs -split "`n")[0]
    gh pr merge $firstPR --repo $repo --merge --admin
    Write-Host "Merged PR #$firstPR. YOLO done." -ForegroundColor Green
} else {
    Write-Host "No open PRs. Open a PR first, then run this again for YOLO." -ForegroundColor Yellow
}

Write-Host "`nDone." -ForegroundColor Green
