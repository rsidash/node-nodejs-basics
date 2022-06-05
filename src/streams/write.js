import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { createWriteStream } from 'fs';

export const write = async () => {
    const dir = 'files';
    const fileName = 'fileToWrite.txt';
    
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const filePath = path.resolve(__dirname, dir, fileName);

    const writeStream = createWriteStream(filePath);
   
    process.stdin.on('data', data => {
        writeStream.write(data);
        process.exit();
      });
};

write();