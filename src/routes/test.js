const routes = async (fastify, options) => {
  fastify.get("/test", async (request, reply) => {
    return { test: "world" };
  });
};

module.exports = routes;
