// ================ TASK 37 ======================
//  Потрібно створити компонент PostTitle

import { useContext } from "react";
import { PostContext } from "./Post";

function PostTitle () {
    const post = useContext(PostContext);
    return (
        <h1>
            {post.title}
        </h1>
    );
}

export default PostTitle;