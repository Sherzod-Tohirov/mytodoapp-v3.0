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
const { Button, Text, useToast, Stack, Skeleton, Toast } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
    Text,
    useToast,
    Stack, 
    Skeleton,
    Toast
  },
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraBaseProvider theme={theme}>
      <Provider store={store}>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </Provider>
    </ChakraBaseProvider>
  </StrictMode>
);
