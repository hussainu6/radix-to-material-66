# Sirf 2 steps — badges ke liye

## Step 1: GitHub login (sirf ek baar)

PowerShell ya Terminal kholo aur yeh command chalao:

```powershell
gh auth login --web --git-protocol https
```

- Browser khulega
- **"Authorize"** ya **"Login"** par click karo
- Wapis terminal mein aake **Enter** dabao

Iske baad dubara login nahi karna padega.

---

## Step 2: Badge steps chalao

Usi folder mein (radix-to-material-66) yeh chalao:

```powershell
cd "c:\Users\hussa\OneDrive\Desktop\New folder\radix-to-material-66"
.\scripts\run-badge-steps.ps1
```

Yeh script automatically karega:

- **Quickdraw** — issue banayega, 10 sec wait, close
- **YOLO** — agar koi PR open hai to bina review merge

---

Agar Step 1 nahi kiya to script bol degi: pehle `gh auth login` karo.
