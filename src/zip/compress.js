import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

export const compress = async () => {
    const dir = 'files'
    const fileName = 'fileToCompress.txt';
    const archiveName = 'archive.gz';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const filePath = path.resolve(__dirname, dir, fileName);
    const archivePath = path.join(__dirname, dir, archiveName);

    const readStream = createReadStream(filePath);
    const writeStream = createWriteStream(archivePath);
    readStream.pipe(createGzip()).pipe(writeStream);
};

compress();