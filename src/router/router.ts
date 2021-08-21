import { Router, RouterContext } from "https://deno.land/x/oak/mod.ts";
import userController from "../controller/user.controller.ts";

const router = new Router();

router.get('/hello', ({ request, response }: RouterContext) => {
  // console.log(request);
  response.body = {
    message: 'Hello World'
  };
});

router
  .get('/users', userController.getAllUsers)
  .post("/user", userController.createUser)
  .get("/user/:id", userController.getOneUser)
  .put("/user", userController.updateUser)
  .delete("/user/:id", userController.deleteUser);

export default router;