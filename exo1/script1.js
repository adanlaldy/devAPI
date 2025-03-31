import fs from 'node:fs';

function script1() {
    try {
        console.log('synchrone')
        console.time();
        fs.readFileSync('cheatsheet.md', 'utf8');
        console.timeEnd();
    } catch (err) {
        console.error(err);
    }
}

export default script1;
