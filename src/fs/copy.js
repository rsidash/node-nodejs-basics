import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { access, mkdir, readdir, copyFile, constants } from 'fs';

export const copy = async () => {
    const srcDir = 'files';
    const destDir = 'files_copy';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const srcDirPath = path.resolve(__dirname, srcDir);
    const destDirPath = path.resolve(__dirname, destDir);

    readdir(srcDirPath, (err, files) => {
        if (err) throw new Error('Error occured during reading files from directory');

        if (!access(destDirPath, () => {})) {
            mkdir(destDirPath, () => {});
        }

        files.forEach(file => {
            let srcPath = path.resolve(__dirname, srcDir, file);
            let destPath = path.resolve(__dirname, destDir, file);

            copyFile(srcPath, destPath, constants.COPYFILE_EXCL, (err) => {
                if (err) throw new Error('FS operation failed');
            });
        });

      });
};

copy();