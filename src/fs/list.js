import { readdir } from 'fs';

export const list = async () => {
    const dir = 'files';

    readdir(dir, (err, files) => {
        if (err) throw new Error('FS operation failed');

        files.forEach(file => {
            console.log(file);
        });
    })
};

list();