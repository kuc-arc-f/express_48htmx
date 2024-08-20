
import { exec } from'child_process';
//
let cmd = `npx esbuild ./src/entry-client.ts --outfile=./public/static/entry-client.js`;
console.log("cmd=", cmd);
exec(cmd, (err, stdout, stderr) => {
  if (err) {
    console.error(`stderr: ${stderr}`);
    throw new Error('Error , build');
  }
});


