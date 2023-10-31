import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ListaRadnika from "./pages/ListaRadnika";
import NovRadnik from "./pages/NovRadnik";
import { Toaster } from "react-hot-toast";
import AppLayout from "./ui/AppLayout";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 } },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="lista-radnika" />} />
           
            <Route path="lista-radnika" element={<ListaRadnika />} />
            <Route path="nov-radnik" element={<NovRadnik />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
