/**
 * Create N coauthored commits on current branch. Run from repo root.
 * node scripts/pair-commits.cjs [count] [coAuthor]
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const count = parseInt(process.argv[2] || '48', 10);
const coAuthor = process.argv[3] || 'Pair Extraordinaire <pair@users.noreply.github.com>';
const root = path.resolve(path.join(__dirname, '..'));
const logFile = path.join(root, 'pair-log.txt');

if (!fs.existsSync(path.join(root, '.git'))) {
  console.error('Run from repo root.');
  process.exit(1);
}

if (!fs.existsSync(logFile)) fs.writeFileSync(logFile, '');

for (let i = 1; i <= count; i++) {
  const line = `Coauthored commit ${i} - ${new Date().toISOString().slice(0, 16).replace('T', ' ')}\n`;
  fs.appendFileSync(logFile, line);
  const msg = `Pair commit ${i}\n\nCo-authored-by: ${coAuthor}`;
  const msgFile = path.join(root, '.commit-msg');
  fs.writeFileSync(msgFile, msg);
  try {
    execSync('git add pair-log.txt', { cwd: root, stdio: 'inherit' });
    execSync('git commit -F .commit-msg', { cwd: root, stdio: 'inherit' });
  } finally {
    if (fs.existsSync(msgFile)) fs.unlinkSync(msgFile);
  }
  console.log(`  Commit ${i} / ${count}`);
}
console.log('\nDone. Push: git push origin pair-extraordinaire-48');
