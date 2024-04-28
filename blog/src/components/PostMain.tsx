// ================ TASK 37 ======================
//  Потрібно створити компонент PostMain

import { useContext } from "react";
import { PostContext } from "./Post";

function PostMain () {
    const post = useContext(PostContext);
    return (
        <main>
            {post.content}
        </main>
    );
}

export default PostMain;