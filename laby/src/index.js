import Fastify from "fastify";
const fastify = Fastify({
  logger: true,
});

const PORT = process.env.LABY_PORT;

fastify.get("/", (_req, res) => {
  res.send({ hello: "world" });
});

fastify.listen({ port: PORT, host: "::" }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`${address} Server listening...`);
});
