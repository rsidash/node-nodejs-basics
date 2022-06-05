import path from 'path';
import { createHash } from 'crypto';
import { createReadStream } from 'fs';

export const calculateHash = async () => {
    const dir = 'files';
    const fileName = 'fileToCalculateHashFor.txt';

    const filePath = path.join(dir, fileName);

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