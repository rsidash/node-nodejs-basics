import { Transform, pipeline } from 'stream';
import { EOL } from 'os';

export const transform = async () => {
    const read = process.stdin;
    const write = process.stdout;

    const transform = new Transform({
        transform(chunk) {
          const reverseChunk = chunk.reverse();

          this.push(reverseChunk + EOL);

          process.exit();
        }
    });

    pipeline(read, transform, write, err => {
        if (err) throw new Error('Some error occured');
    });
};

transform();