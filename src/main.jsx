import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import Routers from "./Routes/index.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  < >
    <React.StrictMode>
      {/* <ProductProvider> */}
   <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Routers} />
        <Toaster
          position="bottom-right"
          gutter={8}
          toastOptions={{
            duration: 5000,
            loading: {
              duration: 3000,
            },
          }}
        />
      </QueryClientProvider>
      {/* </ProductProvider> */}
      </Provider>
    </React.StrictMode>
  </>
);
