import Koa from "koa";
import next from "next";
import Router from "koa-router";
import session from "koa-session";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || '3000'
const dev = process.env.NODE_ENV !== "production";

const app = next({
  dev
});

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();
  const { SHOPIFY_API_SECRET } = process.env
  server.keys = [SHOPIFY_API_SECRET as string]
  server.use(session({ secure: true, sameSite: 'none' }, server))

  router.get("(.*)", async (ctx: any) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
  });

  server.use(router.allowedMethods());
  server.use(router.routes());

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
})
