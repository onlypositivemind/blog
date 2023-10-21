const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.rewriter({ '/api/*': '/$1' }));
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

server.post('/auth/login', (req, res) => {
    try {
        const { username, password } = req.body;
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { users = [] } = db;

        const userFromBd = users.find(
            (user) => user.username === username && user.password === password,
        );

        if (userFromBd) {
            return res.json({ user: userFromBd, accessToken: 'accessToken' });
        }

        return res.status(403).json({ message: 'The username and/or password you specified are not correct' });
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' });
    }

    next();
});

server.use(router);

const PORT = 5000;
server.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on port: ${PORT}`);
});