import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { createReadStream } from 'fs';
import { EOL } from 'os';

export const read = async () => {
    const dir = 'files';
    const fileName = 'fileToRead.txt';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const filePath = path.resolve(__dirname, dir, fileName);

    const stream = createReadStream(filePath, 'utf8');

    stream.on('data', (chunk) => {
        process.stdout.write(chunk + EOL);
    })
};

read();