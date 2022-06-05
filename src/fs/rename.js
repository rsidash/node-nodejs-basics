import path from 'path';
import { exists, rename as renameFile } from 'fs';

export const rename = async () => {
    const dir = 'files';
    const oldFile = 'wrongFilename.txt';
    const newFile = 'properFilename.md';

    const oldPath = path.join(dir, oldFile);
    const newPath = path.join(dir, newFile);

    exists(newPath, (err) => { 
        if (err) throw new Error('FS operation failed');

        renameFile(oldPath, newPath, (err) => {
            if (err) throw new Error('FS operation failed');
        });
    }) 
};

rename();