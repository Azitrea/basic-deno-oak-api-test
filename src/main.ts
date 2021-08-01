import { Application } from "https://deno.land/x/oak/mod.ts";
import router from './router/router.ts';

const app = new Application();
const port: number = 8000;

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ secure, hostname, port }) => {
  const protocol = secure ? "https://" : "http://";
  const url = `${protocol}${hostname ?? "localhost"}:${port}`;
  console.log(`Listening on: ${url}`);
});

await app.listen({ port });
