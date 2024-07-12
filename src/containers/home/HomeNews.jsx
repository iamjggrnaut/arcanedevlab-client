import React from 'react'

const HomeNews = () => {

    return (
        <div className='news-block'>
            <div className="container news-container">
                <div className='d-flex align-items-center gap-3'>
                    <p className="title mb-0">Последние&nbsp;новости</p>
                    <hr style={{ border: '1px solid #00B2D9', opacity: 1, width: '100%' }} />
                </div>
                <div className="mt-5">
                    <p>
                        ARCANE DEVLAB анонсирует выпуск нового мобильного приложения ADL Assistant! Теперь пользователи смогут управлять задачами, контролировать расписание и бюджет, все в одном мощном инструменте, доступном на iOS и Android. ADL Assistant — ваш персональный помощник для эффективного планирования и управления делами, где бы вы ни находились.
                    </p>
                </div>
                <div className="mt-3">
                    <p style={{ fontStyle: 'italic' }}>Опубликовано: 12.07.2024, 10:55</p>
                </div>
            </div>
        </div>
    )
}

export default HomeNews