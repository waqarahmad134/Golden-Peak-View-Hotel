import React from "react";
import {
  Link,
  useLocation,
  useNavigationType,
  useParams,
} from "react-router-dom";

export default function About() {
  const action = useNavigationType();
  console.log("🚀 ~ App ~ action:", action);
  const location = useLocation();
  const pathname = location.pathname;
  console.log("🚀 ~ App ~ pathname:", pathname);
  const { slug } = useParams();

  return (
    <>
      <div>Action {action}</div>
      <div>Path Name {pathname}</div>
      <div>Slug {slug}</div>

      <div className="flex flex-col gap-5">
        <Link to={`/blog/Genre`}>Genre</Link>
        <Link to={`/blog/Country`}>Country</Link>
        <Link to={`/blog/waqar`}>waqar</Link>
        <Link to={`/`}>home</Link>
      </div>
    </>
  );
}
