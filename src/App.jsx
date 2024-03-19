import { useState } from 'react'
import './App.css'
import data from './data';
import {nanoid} from 'nanoid'

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(count)
    let amount = parseInt(count);
    setText(data.slice(0,amount));
  }

  return (
    <section className='section-center'>Lorem Ipsum Starter
      <h4>tired or boring lorem ipsum</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input type="number" name="amount" id="amount" min="1" step='1' max='8' value={count} onChange={(e) => setCount(e.target.value)} />
        <button className='btn' type='submit'>Generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item)=>{
          return <p key={nanoid}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App
