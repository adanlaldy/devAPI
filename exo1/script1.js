import fs from 'node:fs';

try {
    console.time();
    fs.readFileSync('cheatsheet.md', 'utf8');
    console.timeEnd();
} catch (err) {
    console.error(err);
}
