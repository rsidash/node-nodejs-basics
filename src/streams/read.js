import path from 'path';
import { createReadStream } from 'fs';
import { EOL } from 'os';

export const read = async () => {
    const dir = 'files';
    const fileName = 'fileToRead.txt';

    const filePath = path.join(dir, fileName);

    const stream = createReadStream(filePath, 'utf8');

    stream.on('data', (chunk) => {
        process.stdout.write(chunk + EOL);
    })
};