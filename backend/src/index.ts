import { createHttpServer } from "./server.js";
import { env } from "./config/env.js";

const { server } = createHttpServer();

server.listen(env.PORT, () => {
  console.log(`nova-recs api listening on http://localhost:${env.PORT}`);
});