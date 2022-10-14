import { TestRouter } from "../components";
import { routerSong } from "../components";
import { routerPlaylist } from "../components"
import { routeruser } from "../components"
// cada vez que quiera agregar unaruta nueva,
// creo el path e importo el componente
const listRoutes = [["/test", TestRouter], ["/api/v1/songs", routerSong ], ["/api/v1/playlist", routerPlaylist], ["/api/v1/users/", routeruser]];

export const routes = (app) => {
  listRoutes.forEach(([path, controller]) => {
    app.use(path, controller);
  });
};
