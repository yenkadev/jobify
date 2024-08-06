import Wrapper from "../assets/wrappers/ErrorPage";
import notFound from "../assets/images/not-found.svg";
import { Link, useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={notFound} alt="Not found" />
          <h3>Ohh! page not found</h3>
          <p>We {`can't`} seem to find the page you are looking for</p>
          <Link to="/dashboard">Back home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <h3>Something went wrong!</h3>
        <Link to="/dashboard">Back home</Link>
      </div>
    </Wrapper>
  );
};

export default ErrorElement;
