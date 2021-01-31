import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import NotFoundView from "./views/error/NotFoundView";
import PokemonListView from "./views/pokemonLists";

const LazyPokemonView = lazy(() => import("./views/pokemonView"));
const LazyMyPokemonListsView = lazy(() => import("./views/myPokemonLists"));

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <PokemonListView /> },
      { path: "/pokemon-details", element: <LazyPokemonView /> },
      { path: "/my-pokemon-list", element: <LazyMyPokemonListsView /> },
      { path: "404", element: <NotFoundView /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
