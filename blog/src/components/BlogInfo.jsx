// ================ TASK 38 ======================
// компонент BlogInfo
import { useContext } from "react";
import { blogName } from "../pages/Blog38";

function BlogInfo () {
  useContext(blogName);
  return <h1 className="text-3xl font-bold text-center">{blogName}</h1>;
}

export default BlogInfo;