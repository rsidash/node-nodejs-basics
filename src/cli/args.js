export const parseArgs = () => {
    const args = process.argv.slice(2);
    let str = '';

    for (let i = 0; i < args.length; i++) {
      if (args[i].startsWith('--')) {
        str += args[i].slice(2) + ' is ' + args[i+1] + ', ';
      }
    }

    if (str.endsWith(', ')) {
      console.log(str.slice(0, -2));
    }
    
};
