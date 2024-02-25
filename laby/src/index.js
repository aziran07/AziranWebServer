import Fastify from 'fastify'
const app = Fastify({
    logger: true
  });

const PORT = process.env.LABY_PORT;

app.get('/',  (_req, res) => {
    res.send({ hello: 'world' });
});

app.listen({ port: PORT, host: "::" }, (err,  address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    console.log(`${address} Server listening...`);
})