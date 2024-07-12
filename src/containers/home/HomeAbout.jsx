import React from 'react'

const HomeAbout = () => {

    return (
        <div className='about-block' id='about'>
            <div className="ab-container container">
                <div className="ab-title gap-2">
                    <p className='title'>Кто&nbsp;мы</p>
                    <hr style={{ border: '1px solid #00B2D9', opacity: 1, width: '100%' }} />
                    <div className="d-flex">
                    </div>
                </div>
                <div className="ab-content">
                    <p>
                        Добро пожаловать в <span className='comname'>ARCANE DEVLAB</span>. Мы предлагаем инновационные решения для разных отраслей и стремимся улучшить жизнь людей и бизнесов с помощью передовых технологий, ориентированных на качество и долгосрочное сотрудничество.
                    </p>
                    <br />
                    <p>Наши ключевые направления:</p>
                    <ul>
                        <li>Транспорт и логистика: Оптимизация логистических процессов и управления транспортом</li>
                        <li>Медиа и развлечения: Создание и управление цифровым контентом и интерактивными платформами</li>
                        <li>Экомерция: Решения для онлайн-торговли и улучшения пользовательского опыта</li>
                    </ul>
                    <p>и многие другие направления.</p>
                    <br />
                    <p>
                        Мы всегда готовы предложить инновационные и качественные решения для вашего бизнеса. Присоединяйтесь к <span className='comname'>ARCANE DEVLAB</span> и достигайте новых высот в мире IT!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomeAbout