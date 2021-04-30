import {HomePage, AboutPage, ResourcesPage} from "../pages";

import {
  AiFillHome,
  AiFillInfoCircle,
  AiFillSafetyCertificate
} from "react-icons/ai";

import { GrResources } from "react-icons/gr";

const routesData = [
  {
    pageName: "Home",
    pageURL: "/",
    showOnHeader: true,
    component: <HomePage />,
    icon: <AiFillHome />,
  },
  {
    pageName: "Resources",
    pageURL: "/resources",
    showOnHeader: true,
    component: <ResourcesPage />,
    icon: <AiFillSafetyCertificate />
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
