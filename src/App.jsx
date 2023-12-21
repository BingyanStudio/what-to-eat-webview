import { useState } from 'react';
import './App.scss'



function App() {
  const [outterFlag, setOutterFlag] = useState(0);
  const [innerFlag, setInnerFlag] = useState(0);
  const [dropDown, setDropDown] = useState(false)

  const listDown = () => {
    setDropDown(!dropDown)
  }



  function animation(e) {
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
      <div className='select' onClick={listDown} >标签筛选</div>
      {dropDown &&
        <div className='downList'>
          <div className="position">
            <div className="title">位置</div>
            <div className="checkList">
              <input type="checkbox" name="west" id="west" />
              <label htmlFor="">西边</label>
              <input type="checkbox" name="middle" id="middle" />
              <label htmlFor="">中间</label>
              <input type="checkbox" name="east" id="east" />
              <label htmlFor="">东边</label>
            </div>
          </div>
          <div className="seller">
            <div className="title">商家</div>
            <div className="checkList">
              <input type="checkbox" name="inner" id="inner" />
              <label htmlFor="">校内</label>
              <input type="checkbox" name="outer" id="outer" />
              <label htmlFor="">校外</label>
            </div>
          </div>
          <div className="other">
            <div className="title">其他</div>
            <div className="checkList">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">小吃快餐</label>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">异域料理</label>
              <br></br>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">多人聚餐</label>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">地域特色</label>
            </div>
          </div>
          <div className="allNot">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">全不选</label>
          </div>
        </div>}
      <div className={`machine ${outterFlag ? 'gif' : 'img'}`} gif onClick={(e) => animation(e)}>
        <div className={`center ${innerFlag ? 'centerGif' : ''}`}></div>
      </div>

    </div>
  );
}

export default App;
