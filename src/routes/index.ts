import config from "../config";
import Home from "../pages/Home";
import Following from "../pages/Following";
import Upload from "../pages/Upload";
import Profile from "../pages/Profile";
import HeaderOnly from "../components/Layouts/HeaderOnly";
import Search from "../components/Layouts/DefaultLayout/Header/Search";
import Live from "../pages/Live";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.profile, component: Profile   },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: null },
  { path: config.routes.live , component: Live }
];
const privateRoutes = [];
export { privateRoutes, publicRoutes };
