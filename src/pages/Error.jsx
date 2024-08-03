import Wrapper from "../assets/wrappers/ErrorPage";
import notFound from "../assets/images/not-found.svg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <div>
        <img src={notFound} alt="Not found" />
        <h3>Ohh! page not found</h3>
        <p>We can't seem to find the page you are looking for</p>
        <Link to="/dashboard">Back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
