import { ErrorBoundary } from "./ErrorBoundary";
import { ErrorPage } from "./ErrorPage";

export const ErrorBoundaryPage = (props: any) => {
  return (
    <ErrorBoundary fallback={<ErrorPage title="Error" />}>
      {props.children}
    </ErrorBoundary>
  );
};
