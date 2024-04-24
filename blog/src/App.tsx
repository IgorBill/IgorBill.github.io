import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Task 34
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

// Task 35
import Blog from './components/Blog';

function App() {
  const [count, setCount] = useState(0)  

// 33.3. створити новий JSX-елемент з назвою jsxElement
//   const jsxElement = <h1>I am a JSX element</h1>;

//33.4. створити новий JSX-елемент header
// const header = (
//     <header>
//         <h1>Welcome to React</h1>
//         <h2>Getting Started React</h2>
//         <h3>JavaScript Library</h3>
//     </header>
// )

//33.5. створити новий JSX-фрагмент з таким вмістом
// const newJsxElement = (
//     <>
//         <h1>Welcome to React</h1>
//         <h2>Getting Started React</h2>
//         <h3>JavaScript Library</h3>
//     </>
// )

//33.6. створити новий JSX-елемент footer з таким вмістом
// const footer = <p>Copyright &copy; 2024</p>

// Task 35
const post = {
    id: 1,
    title: "Programming Algorithm",
    content: `The word Algorithm means “a process or set of rules to be followed in calculations or other problem-solving operations”. Therefore Algorithm refers to a set of rules/instructions that step-by-step define how a work is to be executed upon in order to get the expected results.`,
    cover: "/vite.svg",
    likes: 5
  };
 

  return (
    <>
    {/* Task 34 */}
    <Navbar />
    <Gallery />

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    {/* Task 35 */}
    <Blog post={post} key={post.id} />

    {/* Task 34 */}
    <Footer />

      {/* відобразити елемент jsxElement */}
      {/* {jsxElement} */}

      {/* відобразити елемент header */}
      {/* {header} */}

      {/* відобразити JSX-фрагмент */}
      {/* {newJsxElement} */}

      {/* відобразити елемент footer */}
      {/* {footer} */}
    </>
  )
}

export default App;
