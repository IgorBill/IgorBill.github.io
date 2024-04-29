// ================ TASK 38 ======================
// Створити сторінку src/pages/blog.jsx
// Використовуючи хуки useContext, createContext, потрібно створити:
// контекст BlogContext
// компонент Layout
// компонент Header
// компонент BlogInfo
// Підключити до сторінки компонент Posts from '../components/Posts' Стилізуйте сторінку, використовуючи Tailwind CSS
// Сторінка повинна повертати наступне:
//   function Blog() {
//   const blogName = "Назва вашого блогу";
//   return (
//     <BlogContext.Provider value={blogName}>
//       <Layout>
//         <Posts />
//       </Layout>
//     </BlogContext.Provider>
//   );
// }

import { createContext } from "react";
import Layout from "../components/Layout";
import Posts from "../components/Posts";

const BlogContext = createContext("");

export const blogName = "My Blog";

function Blog38 () {
    return (
        <BlogContext.Provider value={blogName}>
            <Layout>
                <Posts />
            </Layout>
        </BlogContext.Provider>
    );
}

export default Blog38;