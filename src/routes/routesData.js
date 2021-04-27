import {HomePage, AboutPage} from "../pages";

import {
  AiFillHome,
  AiFillInfoCircle
} from "react-icons/ai";

const routesData = [
  {
    pageName: "Home",
    pageURL: "/",
    showOnHeader: true,
    component: <HomePage />,
    icon: <AiFillHome />,
  },
  {
    pageName: "About",
    pageURL: "/about",
    showOnHeader: true,
    component: <AboutPage />,
    icon: <AiFillInfoCircle />,
  },
];

export default routesData;
