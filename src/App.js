import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Pelicula from './views/pelicula';
import PeliculasJson from './peliculas.json';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';
import ListadoPeliculas from './views/ListadoPeliculas';
import { BrowserRouter, HashRouter, Link, MemoryRouter, NavLink, Navigate, NavigationType, Outlet, Route, Router, Routes, UNSAFE_LocationContext, UNSAFE_NavigationContext, UNSAFE_RouteContext, createPath, createRoutesFromChildren, createSearchParams, generatePath, matchPath, matchRoutes, parsePath, renderMatches, resolvePath, unstable_HistoryRouter, useHref, useInRouterContext, useLinkClickHandler, useLocation, useMatch, useNavigate, useNavigationType, useOutlet, useOutletContext, useParams, useResolvedPath, useRoutes, useSearchParams } from 'react-router-dom';


function App() {

  return (
    <ListadoPeliculas/>
  );
}

export default App;
