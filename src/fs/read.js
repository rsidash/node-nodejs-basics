import path from 'path';
import { readFile } from 'fs';

export const read = async () => {
    const dir = 'files';
    const fileName = 'fileToRead.txt';

    const filePath = path.join(dir, fileName);

    readFile(filePath, 'utf8', (err, data) => {
        if (err) throw new Error('FS operation failed');

        console.log(data);
      });
};

read();