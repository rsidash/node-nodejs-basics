import path from 'path';
import { createWriteStream } from 'fs';

export const write = async () => {
    const dir = 'files';
    const fileName = 'fileToWrite.txt';

    const filePath = path.join(dir, fileName);

    const writeStream = createWriteStream(filePath);
   
    process.stdin.on('data', data => {
        writeStream.write(data);
        process.exit();
      });
};

write();