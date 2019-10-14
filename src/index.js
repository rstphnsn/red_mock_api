const fastify = require("fastify")();
const PORT = process.env.PORT || 8082;

// Middleware
fastify.register(require("fastify-cors"), {
  origin: "*",
  credentials: true
});

// Register route plugins
fastify.register(require("./routes/profile"));
fastify.register(require("./routes/test"));

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
