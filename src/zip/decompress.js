import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';

export const decompress = async () => {
    const dir = 'files'
    const fileName = 'fileToCompress1.txt';
    const archiveName = 'archive.gz';

    const filePath = path.join(dir, fileName);
    const archivePath = path.join(dir, archiveName);

    const readStream = createReadStream(archivePath);
    const writeStream = createWriteStream(filePath);
    readStream.pipe(createGunzip()).pipe(writeStream);
};
