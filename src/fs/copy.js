import path from 'path';
import { exists, mkdir, readdir, copyFile, constants } from 'fs';

export const copy = async () => {
    const srcDir = 'files';
    const destDir = 'files_copy';

    readdir(srcDir, (err, files) => {
        if (err) throw new Error('Error occured during reading files from directory');

        if (!exists(destDir, () => {})) {
            mkdir(destDir, () => {});
        }

        files.forEach(file => {
            let srcPath = path.join(srcDir, file);
            let destPath = path.join(destDir, file);

            copyFile(srcPath, destPath, constants.COPYFILE_EXCL, (err) => {
                if (err) throw new Error('FS operation failed');
            });
        });

      });
};
