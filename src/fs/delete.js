import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { unlink } from 'fs';

export const remove = async () => {
    const dir = 'files';
    const fileName = 'fileToRemove.txt';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const filePath = path.resolve(__dirname, dir, fileName);

    unlink(filePath, (err) => {
        if (err) throw new Error('FS operation failed');
    });
};

remove();