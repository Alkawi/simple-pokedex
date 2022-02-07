import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PokemonList from "./Pokedex/PokemonList";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonList />
    </QueryClientProvider>
  );
};

export default App;
