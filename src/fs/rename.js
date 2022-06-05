import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { exists, rename as renameFile } from 'fs';

export const rename = async () => {
    const dir = 'files';
    const oldFile = 'wrongFilename.txt';
    const newFile = 'properFilename.md';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const oldPath = path.resolve(__dirname, dir, oldFile);
    const newPath = path.resolve(__dirname, dir, newFile);

    exists(newPath, (err) => { 
        if (err) throw new Error('FS operation failed');

        renameFile(oldPath, newPath, (err) => {
            if (err) throw new Error('FS operation failed');
        });
    }) 
};

rename();