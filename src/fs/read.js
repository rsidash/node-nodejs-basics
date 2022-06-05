import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFile } from 'fs';

export const read = async () => {
    const dir = 'files';
    const fileName = 'fileToRead.txt';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const filePath = path.resolve(__dirname, dir, fileName);

    readFile(filePath, 'utf8', (err, data) => {
        if (err) throw new Error('FS operation failed');

        console.log(data);
      });
};

read();