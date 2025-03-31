import fs from 'node:fs';

function script2() {
    try {
        console.log('asynchrone')
        console.time();
        fs.readFileSync('cheatsheet.md', 'utf8');
        console.timeEnd();
    } catch (err) {
        console.error(err);
    }
}

export default script2;
