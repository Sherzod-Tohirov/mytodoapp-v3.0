import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.tsx";
import "./index.css";
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from "@chakra-ui/react";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { FilterProvider } from "./components/context/FilterContext.tsx";
const { Button, Text } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
    Text
  },
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FilterProvider>
      <ChakraBaseProvider theme={theme}>
        <Provider store={store}>
          <NextUIProvider>
            <App />
          </NextUIProvider>
        </Provider>
      </ChakraBaseProvider>
    </FilterProvider>
  </StrictMode>
);
