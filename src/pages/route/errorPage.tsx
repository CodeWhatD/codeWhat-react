import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>路由出错啦~~~</h1>
      <div>{error.statusText}</div>
    </div>
  );
};

export default ErrorPage;
