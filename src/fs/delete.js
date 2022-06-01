import path from 'path';
import { unlink } from 'fs';

export const remove = async () => {
    const dir = 'files';
    const fileName = 'fileToRemove.txt';

    const filePath = path.join(dir, fileName);

    unlink(filePath, (err) => {
        if (err) throw new Error('FS operation failed');
    });
};
