import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.tsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { FilterProvider } from "./components/context/FilterContext.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FilterProvider>
      <Provider store={store}>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </Provider>
    </FilterProvider>
  </StrictMode>
);
