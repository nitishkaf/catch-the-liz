import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import ContextProvider from "@/context/ContextProvider";
import { AuthContext } from "@/lib/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContext.Provider value={{ user: {}, username: "Player" }}>
      <ContextProvider>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ContextProvider>
    </AuthContext.Provider>
  );
}
