import React from "react";
import { Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import NotFoundView from "./views/error/NotFoundView";
import loadable from "@loadable/component";

const LazyPokemonListView = loadable(() => import("./views/pokemonLists"));
const LazyPokemonView = loadable(() => import("./views/pokemonView"));
const LazyMyPokemonView = loadable(() => import("./views/myPokemonView"));
const LazyMyPokemonListsView = loadable(() => import("./views/myPokemonLists"));

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <LazyPokemonListView /> },
      { path: "/pokemon-details", element: <LazyPokemonView /> },
      { path: "/my-pokemon-list", element: <LazyMyPokemonListsView /> },
      { path: "/pokemon-details/m/:id", element: <LazyMyPokemonView /> },
      { path: "404", element: <NotFoundView /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
