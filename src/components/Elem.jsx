import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrent, moveOtherList } from '../redux/mainSlice';


export default function Elem({ text, list ,idx }) {

    const dispatch = useDispatch();
    const [elemColor, setElemColor] = React.useState(null);


    const dragStartHangler = (e) => {
        dispatch(setCurrent({list, idx, text}))
    }
    const leaveHandler = (e) => {
        e.target.style.marginTop = '0'
    }
    const overHandler = (e) => {
        e.preventDefault()
        e.target.style.marginTop = '10px'
    }
    const dropHangler = (e) => {
        e.preventDefault()
        dispatch(moveOtherList({list, idx}))
        e.target.style.marginTop = '0'
    }


    return (
        <div
            onDragStart={(e) => dragStartHangler(e)} // срабативает в момент взятия карти
            onDragLeave={(e) => leaveHandler(e)} // если вишли за предели другой карти
            onDragOver={(e) => overHandler(e)}// если над другим обэетом
            onDrop={(e) => dropHangler(e)}// если отпустили карту и шот хотим
            draggable={true}
            className={`todo ${list === 1 ? ' border-orange-600 bg-orange-400': list === 2 ? ' border-yellow-600 bg-yellow-400' : ' border-green-600 bg-green-400'}`}>
            {text}
        </div>
    )
}
