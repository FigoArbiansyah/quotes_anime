import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./index.css";

function App() {

  const [words, setWords] = useState([]);

  const getWords = async () => {
    const response = await axios.get("https://katanime.vercel.app/api/getrandom");
    setWords(response.data.result);
  }

  useEffect(() => {
    getWords()
  }, []);

  return (
    <section id="main">
      {words.map(word => {
        return (
          <div className='container d-flex min-vh-100 justify-content-center align-items-center'>
            <div className="row justify-content-center">
                <div className="col-md-12 mb-3">
                    <div className="p-4 rounded shadow" style={{width: "18rem"}}>
                      <p>{word.indo}</p>
                      <div className="text-end">
                        <span className="char">
                          {word.character}
                        </span>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default App
