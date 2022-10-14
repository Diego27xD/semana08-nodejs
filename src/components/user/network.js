import { Router } from "express";
import * as Controller from "./controller"

const routeruser = Router()

routeruser.route("/").get(Controller.findAll)
routeruser.route("/").post(Controller.create)
routeruser.route("/:id").get(Controller.findOneUser)
routeruser.route("/:id").put(Controller.update)
routeruser.route("/:id").delete(Controller.destroy)
routeruser.route("/login").post(Controller.login)
export default routeruser