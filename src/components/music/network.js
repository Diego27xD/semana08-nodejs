import { Router } from "express";
import * as Controller from "./controller"

const routerSong = Router()

routerSong.route("/").get(Controller.findAll)
routerSong.route("/").post(Controller.create)
routerSong.route("/:id").get(Controller.findOneSong)
routerSong.route("/:id").put(Controller.update)
routerSong.route("/:id").delete(Controller.destroy)

export default routerSong