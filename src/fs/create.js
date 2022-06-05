import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { writeFile } from 'fs';

export const create = async () => {
    const dir = 'files';
    const fileName = 'fresh.txt';
    const content = 'I am fresh and young';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const filePath = path.resolve(__dirname, dir, fileName);

    writeFile(filePath, content, { flag: 'wx' }, (err) => {
        if (err) throw new Error('FS operation failed');
    });
};

create();