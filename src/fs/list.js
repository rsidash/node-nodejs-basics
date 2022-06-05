import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readdir } from 'fs';

export const list = async () => {
    const dir = 'files';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    
    const dirPath = path.resolve(__dirname, dir);

    readdir(dirPath, (err, files) => {
        if (err) throw new Error('FS operation failed');

        files.forEach(file => {
            console.log(file);
        });
    })
};

list();