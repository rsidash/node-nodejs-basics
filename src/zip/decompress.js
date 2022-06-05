import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';

export const decompress = async () => {
    const dir = 'files'
    const fileName = 'fileToCompress1.txt';
    const archiveName = 'archive.gz';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const filePath = path.resolve(__dirname, dir, fileName);
    const archivePath = path.resolve(__dirname, dir, archiveName);

    const readStream = createReadStream(archivePath);
    const writeStream = createWriteStream(filePath);
    readStream.pipe(createGunzip()).pipe(writeStream);
};

decompress();