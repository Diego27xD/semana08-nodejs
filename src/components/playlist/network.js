import { Router } from "express";
import * as Controller from "./controller"

const routerPlaylist = Router()

routerPlaylist.route("/").get(Controller.findAll)
routerPlaylist.route("/").post(Controller.create)
routerPlaylist.route("/:id").get(Controller.findOneSong)
routerPlaylist.route("/:id").put(Controller.update)
routerPlaylist.route("/:id").delete(Controller.destroy)

export default routerPlaylist