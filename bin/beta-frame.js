#!/usr/bin/env node
const path = require('path');
const projectName = process.argv[2];
let src = path.resolve(__dirname, projectName, 'src');
const cp = require('child_process');
const cmd = `create-react-app ${projectName}`;
let pro = cp.execSync(cmd, function (err, stdout, stderr) {
    if(!err) {
        console.log(stdout);
    } else {
        console.log(err);
    }
});