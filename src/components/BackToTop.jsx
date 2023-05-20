import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

export default function BackToTop() {
    return (
        <div className='backtotop'>
            <button onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}><AiOutlineArrowUp /></button>
        </div>
    )
}
