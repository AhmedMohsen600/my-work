import { Route } from "react-router-dom";
export function Routes({ children, ...restProps }) {
  return <Route {...restProps}>{children}</Route>;
}
