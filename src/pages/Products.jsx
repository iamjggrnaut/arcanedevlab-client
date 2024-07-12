import React, { useContext } from 'react'
import { useEffect, useState } from 'react';

const ProductsPage = () => {

    useEffect(() => {
        document.title = 'Arcane DevLab - Products'
    }, [])

    const now = new Date()
    const deadline = new Date('07-30-2024')

    const diffTime = Math.abs(deadline - now);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60)) % 24;
    const diffMinutes = Math.ceil(diffTime / (1000 * 60)) % 60;
    const diffSeconds = Math.ceil(diffTime / 1000) % 60;

    const [countdown, setCountdown] = useState({})

    useEffect(() => {
        setTimeout(() => {
            setCountdown({ ...countdown, diffDays, diffHours, diffMinutes, diffSeconds });
        }, 1000);
    });


    return (
        <div id='product-page' >
            <div className="dark-overlay"></div>
            <div className="container products-content">
                <h1 className="greetings">Добро пожаловать на страницу наших продуктов!</h1>
                <p>Мы готовимся к запуску. Следите за нашими обновлениями!</p>
                <h3>До релиза</h3>
                <h2 className='timer'>
                    {countdown && countdown?.diffSeconds >= 0 ? `
                    ${countdown.diffDays} : 
                    ${String(countdown.diffHours).length < 2 ? '0' + countdown.diffHours : countdown.diffHours} : 
                    ${String(countdown.diffMinutes).length < 2 ? '0' + countdown.diffMinutes : countdown.diffMinutes} : 
                    ${String(countdown.diffSeconds).length < 2 ? '0' + countdown.diffSeconds : countdown.diffSeconds}`
                        : null
                    }
                </h2>
            </div>
        </div>
    )
}

export default ProductsPage