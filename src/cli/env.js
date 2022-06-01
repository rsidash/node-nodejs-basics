export const parseEnv = () => {
    const prefix = 'RSS_';

    const envVars = process.env;

    Object.keys(envVars).forEach((key, value) => {
        if (key.startsWith(prefix)) process.stdout.write(`${key}=${value}; `);
    });
};
