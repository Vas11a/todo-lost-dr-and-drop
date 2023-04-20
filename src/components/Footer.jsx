import React from 'react';
import { useDispatch } from 'react-redux';
import { removeToDo } from '../redux/mainSlice';

export default function Footer() {
    const dispatch = useDispatch();

    const overOutHandler = (e) => {
        e.preventDefault()
    }


    const dropOutHangler = (e) => {
        e.preventDefault()
        dispatch(removeToDo())
    }
    return (
        <div className="footer">
            <div 
            onDragOver={(e) => overOutHandler(e)}
            onDrop={(e) => dropOutHangler(e)}
            className="footer-pannel">
                <div className="empty">
                    Trash can
                </div>
            </div>
        </div>
    )
}
