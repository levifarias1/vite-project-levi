//

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";


import "./CSS/general.css";
import HeaderNav from "./componentes/headernap";
import contenidoDinamico from "./componentes/contenidoDinamico";
import Snipers from "./componentes/snipers";


const rutasObjetos = createBrowserRouter([
    { path: "/", element: <h1>Hola mundo</h1> },

    { path: "/contenidoDinamico", Component: contenidoDinamico },

    { path: "/snipers", Component: Snipers },
]);


createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={rutasObjetos} />
        <HeaderNav></HeaderNav>
    </StrictMode>
);


