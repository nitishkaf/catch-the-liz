import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import ContextProvider from "@/context/ContextProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </ChakraProvider>
  );
}
