import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

export const compress = async () => {
    const dir = 'files'
    const fileName = 'fileToCompress.txt';
    const archiveName = 'archive.gz';

    const filePath = path.join(dir, fileName);
    const archivePath = path.join(dir, archiveName);

    const readStream = createReadStream(filePath);
    const writeStream = createWriteStream(archivePath);
    readStream.pipe(createGzip()).pipe(writeStream);
};

compress();