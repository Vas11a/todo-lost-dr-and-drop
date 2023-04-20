import React from 'react';
import Empty from './Empty';
import Elem from './Elem';
import { useSelector, useDispatch } from 'react-redux';
import { moveOtherCol } from '../redux/mainSlice';

export default function Main() {
    const { lists } = useSelector((state) => state.main);
    const dispatch = useDispatch();

    const overColHandler = (e) => {
        e.preventDefault()
    }

    const dropColHangler = (e, list) => {
        e.preventDefault()
        dispatch(moveOtherCol(list))
    }
    return (
        <div className="main">
            <div className="main-cols">
                <div className="col-cont">
                    <div className="name">ToDo</div>
                    <div 
                    onDragOver={(e) => overColHandler(e)}
                    onDrop={(e) => dropColHangler(e,1)}
                    className="main-col scrollbar-class">
                        {
                            lists[0].map((elem, idx) => <Elem 
                            key={elem+idx}
                            text={elem} 
                            idx={idx}
                            list={1} />)
                        }
                    </div>
                </div>
                <div className="col-cont">
                    <div className="name">In Progress</div>
                    <div 
                    onDragOver={(e) => overColHandler(e)}
                    onDrop={(e) => dropColHangler(e,2)}
                    className="main-col scrollbar-class">
                        {
                            lists[1].map((elem, idx) => <Elem 
                            key={elem+idx}
                            text={elem} 
                            idx={idx}
                            list={2} />)
                        }
                    </div>
                </div>
                <div className="col-cont">
                    <div className="name">Done</div>
                    <div 
                    onDragOver={(e) => overColHandler(e)}
                    onDrop={(e) => dropColHangler(e,3)}
                    className="main-col scrollbar-class">
                        {
                            lists[2].map((elem, idx) => <Elem 
                            key={elem+idx}
                            text={elem} 
                            idx={idx}
                            list={3} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
