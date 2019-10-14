const jwt = require("jsonwebtoken");

const opts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          hello: { type: "string" }
        }
      }
    }
  }
};

const routes = async (fastify, options) => {
  fastify.get("/profile", opts, async (request, response) => {
    const token = request.headers.authorization.split(" ")[1];
    const decoded = jwt.decode(token, { complete: true });
    // check which dude this is
    const fred = "auth0|5d79140b0fe7cb0dcc3bcd46";
    if (decoded.payload.sub === fred) {
      return { hello: "Fred" };
    }
    return { hello: "Dude" };
  });
};

module.exports = routes;
