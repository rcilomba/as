import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="mt-40 mb-40">
        <h1 className="text-5xl pb-4">OUPS</h1>
        <p>What you are looking for can't be found!</p>
        <p>
          Click{" "}
          <span className="text-pink-700 ">
            <Link to={"/"}>here</Link>{" "}
          </span>
          to get back to the homepage.
        </p>
      </div>
    </>
  );
};

export default NotFound;
