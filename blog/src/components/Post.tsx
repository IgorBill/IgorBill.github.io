// TASK 36 

import { useState, useEffect } from "react";

function Post() {
    // Використовуючи хук useState, виконати ініціалізацію значень стану та метода зміни стану post, setPost, передавши в useState порожній масив.
    const [post, setPost] = useState([]);
    const [likes, setLikes] = useState(0);
  
    // Використовуючи хук useEffect, викличте функцію fetchData(), передавши її як перший аргумент хука useEffect. Передайте порожній масив як другий аргумент хука useEffect.
    useEffect(() => {
        // Напишіть функцію fetchData(), що отримує дані з 'https://my-json-server.typicode.com/<ваш власний акаунт на github>/db/posts/1', використовуючи метод fetch. Зробіть функцію асинхронною.
        async function fetchData() {
            const data = await (await fetch('https://my-json-server.typicode.com/igorbill/db/posts/1')).json();
            setPost(data);
        }
        fetchData();
    }, []);
    
    // Напишіть функцію likeThis(), що змінює стан змінної likes, збільшуючи її на 1. Використовуючи хук useEffect, напишіть обробку події натискання на кнопку з ідентифікатором like, що викликає функцію likeThis.
    function likeThis() {
        setLikes(like => like + 1);
    }
  
    return (
        <article className='post'>
            <div className='cover-container'>
            <img src={post.cover} alt={post.title} />
            </div>
            <div className='post-footer'>
            <h3>{post.title} {post.id}</h3>
            <p>{post.content}</p>
            <button id='like' onClick={likeThis}>
                Like this post <strong>{likes}</strong>
            </button>
            </div>
        </article>
    );
  }
  
  export default Post;