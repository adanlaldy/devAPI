import fs from 'node:fs';

function script1() {
    console.log('asynchrone')
    console.time();
    fs.readFile('cheatsheet.md', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
    console.timeEnd();
}

export default script1;
