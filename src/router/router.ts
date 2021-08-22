import { Router, RouterContext } from "https://deno.land/x/oak/mod.ts";
import userRouter from "../controller/user.controller.ts";

const router = new Router();

router.get('/hello', ({ request, response }: RouterContext) => {
  // console.log(request);
  response.body = {
    message: 'Hello World'
  };
});

router.use('/user', userRouter.routes());

export default router;