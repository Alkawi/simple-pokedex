import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

const PokemonList = lazy(() => import("./Pokedex/PokemonList"));
const PokemonDetails = lazy(() => import("./Pokedex/PokemonDetails"));

const queryClient = new QueryClient();

const App = () => {
  return (
    <Suspense fallback={<>loading...</>}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route element={<PokemonList />} path="/" />
            <Route element={<PokemonDetails />} path="/details/:name" />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
