# Pair Extraordinaire — Use this repo to achieve the badge

**Repo:** [hussainu6/radix-to-material-66](https://github.com/hussainu6/radix-to-material-66)

**Badge:** Coauthored commits on **merged** pull requests.

| Tier    | Coauthored commits needed |
|---------|---------------------------|
| DEFAULT | 1                         |
| BRONZE  | 10                        |
| SILVER  | 24                        |
| GOLD    | 48                        |

---

## Quick start (reach GOLD in one PR)

1. **Clone this repo** (if you don’t have it yet):

```bash
git clone https://github.com/hussainu6/radix-to-material-66.git
cd radix-to-material-66
```

2. **Run the script** in PowerShell (replace partner name and email):

```powershell
.\scripts\pair-extraordinaire.ps1 -CoAuthor "Partner Name <partner@users.noreply.github.com>" -Count 48
```

3. **Push and open a PR:**

```powershell
git push origin pair-extraordinaire-48
```

4. On GitHub: go to [radix-to-material-66](https://github.com/hussainu6/radix-to-material-66) → **Pull requests** → **New pull request** → choose `pair-extraordinaire-48` → **Create** → **Merge**.

You get **48 coauthored commits** on one merged PR = **GOLD**.

---

## Other tiers

- **BRONZE (10):** `-Count 10` → branch `pair-extraordinaire-10`
- **SILVER (24):** `-Count 24` → branch `pair-extraordinaire-24`
- **DEFAULT (1):** one small PR with a single commit that has `Co-authored-by` in the message (see Strategy B below)

---

## What counts

- A **commit** whose message includes `Co-authored-by: Name <email>`.
- That commit must be part of a **merged** pull request (into `main`).

One merged PR with 10 such commits = 10 toward the badge.

---

## Strategy B: Many small PRs (1 coauthored commit per PR)

Repeat for each PR:

```powershell
git checkout main
git pull origin main
git checkout -b pair-pr-1   # then pair-pr-2, pair-pr-3, ...

# One small change (e.g. add a line to pair-log.txt)
Add-Content -Path "pair-log.txt" -Value "PR 1 - $(Get-Date -Format 'yyyy-MM-dd')"
git add pair-log.txt
git commit -m "Add pair log entry 1`n`nCo-authored-by: Partner Name <partner@users.noreply.github.com>"
git push origin pair-pr-1
```

Then open and merge the PR on GitHub. Repeat until you reach 10 / 24 / 48.

---

## Notes

- Use your partner’s **GitHub noreply email** (e.g. `username@users.noreply.github.com`) so the co-author links to their profile.
- As repo owner, you can create the branch, push, open the PR, and merge it yourself; the badge still counts.
