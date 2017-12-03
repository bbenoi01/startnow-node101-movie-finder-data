const server = require('./app');

const port = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));