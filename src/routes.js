import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import NotFoundView from "./views/error/NotFoundView";

const LazyPokemonListView = lazy(() => import("./views/pokemonLists"));
const LazyPokemonView = lazy(() => import("./views/pokemonView"));
const LazyMyPokemonView = lazy(() => import("./views/myPokemonView"));
const LazyMyPokemonListsView = lazy(() => import("./views/myPokemonLists"));

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
