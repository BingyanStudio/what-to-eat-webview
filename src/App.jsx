import { useState } from 'react';
import './App.scss'

function App() {
  const [outterFlag, setOutterFlag] = useState(0);
  const [innerFlag, setInnerFlag] = useState(0);
  function handleClick(e) {
    console.log(e.pageX, e.pageY);
    if (e.pageX >= 360 && e.pageX <= 420 && e.pageY >= 300 && e.pageY <= 500) {
      setOutterFlag(1);
      setInnerFlag(1);
      setTimeout(() => {
        setOutterFlag(0);
        // setInnerFlag(0)
      }, 3000)
    }


  }


  return (
    <div className="App">
      <div className={`main ${outterFlag ? 'gif' : 'img'}`} gif onClick={(e) => handleClick(e)}>
        <div className={`center ${innerFlag ? 'centerGif' : ''}`}></div>
      </div>

    </div>
  );
}

export default App;
