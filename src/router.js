import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Home from "./Views/Home";
import TheTeam from "./Views/TheTeam";
import Contact from "./Views/Contact";
import Classes from "./Views/Classes";
import Memberships from "./Views/Memberships";
import Kids from "./Views/Kids";
import ThePros from "./Views/ThePros";
import NotFound from "./Views/NotFound";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/the-team" element={<TheTeam />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/memberships" element={<Memberships />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/the-pros" element={<ThePros />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
