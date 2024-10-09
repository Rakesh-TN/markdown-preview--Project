import React, { useState } from 'react';
import { marked } from 'marked'
import './App.css';

function App() {
  const [text, setText] = useState('')
  return (
    <main className="App">
      <section className='pt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 m-1'>
              <textarea id='editor' className='form-control input-field'
                onChange={(event) => {
                  setText(event.target.value)
                }} value={text} placeholder='Enter the HTML Code'></textarea>
            </div>
            <div className='col-lg-6 m-1'>
              <div id='preview' className='bg-light rounded p-4 output-field'
                dangerouslySetInnerHTML={{
                  __html: marked(text),
                }}></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
