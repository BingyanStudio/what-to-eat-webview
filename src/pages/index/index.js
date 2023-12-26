import { useState } from 'react';
import './index.scss'



function Index() {
    const [outterFlag, setOutterFlag] = useState(false);
    const [innerFlag, setInnerFlag] = useState(false);
    const [dropDown, setDropDown] = useState(false);
    const [result, setResult] = useState(false);
    // 下拉菜单
    const listDown = () => {
        setDropDown(!dropDown)
    }

    // 老虎机动画
    const animation = (e) => {
        console.log(e.pageX, e.pageY);
        if (e.pageX >= 360 && e.pageX <= 420 && e.pageY >= 300 && e.pageY <= 500) {
            setOutterFlag(true);
            setInnerFlag(true);
            setTimeout(() => {
                setOutterFlag(false);
            }, 2080)
            setTimeout(() => {
                setResult(true)
            }, 3000);
        }
    }

    // 弹窗退出
    const resultDisappear = (e) => {
        console.log(e.pageX, e.pageY);
        if ((e.pageY < 200 || e.pageY > 650) && result) {
            setResult(false);
            window.location.reload();
        }
    }


    const allNotSelect = () => {
        const allnot = document.querySelector('#allnot');
        // console.log(allnot.checked);
        const tag = document.querySelectorAll('.tag');
        // console.log(select);
        if (allnot.checked) {
            tag.forEach((item) => {
                item.checked = false;
            })
        }
    }


    return (
        // <div>这是首页</div>

        <div className="Index" onClick={(e) => resultDisappear(e)}>
            {/* 标签筛选 */}
            <div className='select' onClick={listDown} >标签筛选</div>
            {dropDown &&
                <div className='downList'>
                    <div className="position">
                        <div className="title">位置</div>
                        <div className="checkList">
                            <label htmlFor='west'></label>
                            <input type="checkbox" name="west" id="west" className='tag' />
                            <span>西边</span>
                            <label htmlFor='middle'></label>
                            <input type="checkbox" name="middle" id="middle" className='tag' />
                            <span>中间</span>
                            <label htmlFor='east'></label>
                            <input type="checkbox" name="east" id="east" className='tag' />
                            <span>东边</span>
                        </div>
                    </div>
                    <div className="seller">
                        <div className="title">商家</div>
                        <div className="checkList">
                            <label htmlFor='inner'></label>
                            <input type="checkbox" name="inner" id="inner" className='tag' />
                            <span>校内</span>
                            <label htmlFor='outer'></label>
                            <input type="checkbox" name="outer" id="outer" className='tag' />
                            <span>校外</span>
                        </div>
                    </div>
                    <div className="other">
                        <div className="title">其他</div>
                        <div className="checkList">
                            <label htmlFor='sanck'></label>
                            <input type="checkbox" name="snack" id="snack" className='tag' />
                            <span>小吃快餐</span>
                            <label htmlFor='forign'></label>
                            <input type="checkbox" name="forign" id="forign" className='tag' />
                            <span>异域料理</span>
                            <br></br>
                            <label htmlFor='many'></label>
                            <input type="checkbox" name="many" id="many" className='tag' />
                            <span>多人聚餐</span>
                            <label htmlFor='section'></label>
                            <input type="checkbox" name="section" id="section" className='tag' />
                            <span>地域特色</span>
                        </div>
                    </div>
                    <div className="allNot">
                        <input type="checkbox" name="allnot" id="allnot" onClick={(e) => allNotSelect(e)} />
                        <span>全不选</span>
                        <label htmlFor='allnot'></label>
                    </div>
                </div>}
            {/* 老虎机主体 */}
            <div className={`machine ${outterFlag ? 'gif' : 'img'}`} gif onClick={animation}>
                <div className={`center ${innerFlag ? 'centerGif' : 'centerStart'}`}></div>
            </div>
            {/* 弹窗 */}
            {result && <div className='resultContainer' >
                <div className='result'></div>
            </div>}
            {/* 右下角的猫猫 */}
            <div className='cat'></div>
        </div>
    );
}

export default Index;
