import {HomePage} from "../pages";

import {
  AiFillHome,
} from "react-icons/ai";

const routesData = [
  {
    pageName: "Home",
    pageURL: "/",
    showOnHeader: true,
    component: <HomePage />,
    icon: <AiFillHome />,
  },
];

export default routesData;
