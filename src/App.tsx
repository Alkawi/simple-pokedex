import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PokemonList from "./Pokedex/PokemonList";
import { Route, Routes } from "react-router";
import PokemonDetails from "./Pokedex/PokemonDetails";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <QueryClientProvider client={queryClient}>
          <Route element={<PokemonList />} path="/" />
          <Route element={<PokemonDetails />} path="/details/:name" />
        </QueryClientProvider>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
