import React, { useState } from 'react'
import * as math from 'mathjs';
import Input from './Input';
import Button from './Button'

function App() {
  const [result, setResult] = useState('')
  const [text, setText] = useState('')

  const addText = (val) => {
    setText((text) => [...text, val + ""])

  }
  const calculateResult = () => {
    const input = text.join(""); // Remove commas

    setResult(math.evaluate(input));
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };
  const backspace = () => {
    setText(text.slice(0, -1))
  }
  return (
    <main>
      <div className='wrapper'>
        <Input text={text} result={result} />
        <div className='row'>
          <Button symbol='Clear' handleClick={resetInput} />
          <Button symbol='C' handleClick={backspace} />
          <Button symbol='/' handleClick={addText} />
        </div>
        <div className="row">
          <Button symbol='7' handleClick={addText} />
          <Button symbol='8' handleClick={addText} />
          <Button symbol='9' handleClick={addText} />
          <Button symbol='*' handleClick={addText} />
        </div>
        <div className="row">
          <Button symbol='4' handleClick={addText} />
          <Button symbol='5' handleClick={addText} />
          <Button symbol='6' handleClick={addText} />
          <Button symbol='-' handleClick={addText} />
        </div>
        <div className="row">
          <Button symbol='1' handleClick={addText} />
          <Button symbol='2' handleClick={addText} />
          <Button symbol='3' handleClick={addText} />
          <Button symbol='+' handleClick={addText} />
        </div>
        <div className="row">
          <Button symbol='0' handleClick={addText} />
          <Button symbol='.' handleClick={addText} />
          <Button symbol='=' handleClick={calculateResult} />
        </div>
      </div>
    </main>
  );
}

export default App;
