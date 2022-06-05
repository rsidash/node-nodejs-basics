import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { createHash } from 'crypto';
import { createReadStream } from 'fs';

export const calculateHash = async () => {
    const dir = 'files';
    const fileName = 'fileToCalculateHashFor.txt';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const filePath = path.resolve(__dirname, dir, fileName);

    const hash = createHash('sha256');

    const input = createReadStream(filePath);

    input.on('readable', () => {
    const data = input.read();
    if (data)
        hash.update(data);
    else {
            console.log(hash.digest('hex'));
        }
    });
};

calculateHash();