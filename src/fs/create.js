import path from 'path';
import { writeFile } from 'fs';

export const create = async () => {
    const dir = 'files';
    const fileName = 'fresh.txt';
    const content = 'I am fresh and young';

    const filePath = path.join(dir, fileName);

    writeFile(filePath, content, { flag: 'wx' }, (err) => {
        if (err) throw new Error('FS operation failed');
    });
};
