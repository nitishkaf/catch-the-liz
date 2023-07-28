import Head from "next/head";
import { ErrorPage } from "@/components/ErrorBoundary/ErrorPage";

export default function ErrorPageHandler() {
  return (
    <>
      <Head>
        <title>Error - Catch The Liz</title>
      </Head>
      <ErrorPage title="An Error Occurred" />
    </>
  );
}
