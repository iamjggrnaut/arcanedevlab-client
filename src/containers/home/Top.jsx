import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import LetterA from '../../assets/svg/LetterA';
import LetterR from '../../assets/svg/LetterR';
import LetterC from '../../assets/svg/LetterC';
import LetterN from '../../assets/svg/LetterN';
import LetterE from '../../assets/svg/LetterE';
import LetterA2 from '../../assets/svg/LetterA2';


const Top = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='top'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <Carousel.Caption>
                        <LetterA />
                        <div className='text-start letter-text'>
                            <h3 className="mt-3">Автоматизация</h3>
                            <p style={{ fontWeight: '300' }}>Автоматизация повышает эффективность и конкурентоспособность вашего бизнеса. Наши решения оптимизируют процессы, снижают затраты и минимизируют ошибки. Внедрение наших технологий освобождает время для стратегических задач и обеспечивает рост производительности, открывая новые возможности для вашего бизнеса в эпоху цифровой трансформации.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <Carousel.Caption>
                        <LetterR />
                        <div className='text-start letter-text'>
                            <h3 className="mt-3">Реализация</h3>
                            <p style={{ fontWeight: '300' }}>Автоматизация повышает эффективность и конкурентоспособность вашего бизнеса. Наша IT-компания специализируется на реализации проектов любой сложности, обеспечивая полный цикл разработки — от концепции до внедрения и поддержки. Используя передовые технологии и методы управления проектами, мы гарантируем высокое качество, соблюдение сроков и индивидуальный подход к каждому клиенту. Наш опыт и профессионализм позволяют нам создавать решения, которые помогают бизнесу расти и достигать новых высот.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <Carousel.Caption>
                        <LetterC />
                        <div className='text-start letter-text'>
                            <h3 className="mt-3">Креативность</h3>
                            <p style={{ fontWeight: '300' }}>
                                Креативность — это ключ к инновациям. Мы не просто решаем задачи, мы находим уникальные пути для достижения результатов, объединяя технологическое мастерство и творческий подход. Наши команды вдохновляются новыми идеями, чтобы создавать продукты и решения, которые не только отвечают текущим потребностям, но и прокладывают путь к будущему. В каждом проекте мы стремимся превзойти ожидания, используя креативность как основу для инноваций и роста.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <Carousel.Caption>
                        <LetterA2 />
                        <div className='text-start letter-text'>
                            <h3 className="mt-3">Анализ</h3>
                            <p style={{ fontWeight: '300' }}>
                                Наши эксперты проводят всесторонний анализ IT-проектов, выявляя ключевые области для оптимизации и повышения эффективности. Мы тщательно исследуем каждую стадию разработки, определяя риски и предлагая решения, которые позволяют достигнуть поставленных целей в срок и с минимальными затратами. Наш подход основан на глубоких знаниях и опыте, что гарантирует успех ваших проектов.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <Carousel.Caption>
                        <LetterN />
                        <div className='text-start letter-text'>
                            <h3 className="mt-3">Новые проекты</h3>
                            <p style={{ fontWeight: '300' }}>
                                В этом году наша IT-компания с гордостью представляет новые проекты, направленные на инновационное развитие и улучшение пользовательского опыта. Среди них - платформа для управления корпоративными данными, интегрированная система аналитики в реальном времени и мобильное приложение для оптимизации рабочих процессов. Мы продолжаем внедрять современные технологии и стремимся создавать решения, которые не только отвечают текущим потребностям рынка, но и формируют его будущее.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <Carousel.Caption>
                        <LetterE />
                        <div className='text-start letter-text'>
                            <h3 className="mt-3">Экосистема</h3>
                            <p style={{ fontWeight: '300' }}>
                                Наши решения в области IT создают сильную экосистему, способствующую инновациям и эффективному взаимодействию между бизнесом и технологиями. Мы интегрируем передовые технологии, разрабатываем устойчивые решения и помогаем компаниям достигать своих целей в современном цифровом мире.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="letters">
                <button className={index === 0 ? 'letter-btn-active' : "letter-btn"} onClick={() => handleSelect(0)}>
                    A
                </button>
                <button className={index === 1 ? 'letter-btn-active' : "letter-btn"} onClick={() => handleSelect(1)}>
                    R
                </button>
                <button className={index === 2 ? 'letter-btn-active' : "letter-btn"} onClick={() => handleSelect(2)}>
                    C
                </button>
                <button className={index === 3 ? 'letter-btn-active' : "letter-btn"} onClick={() => handleSelect(3)}>
                    A
                </button>
                <button className={index === 4 ? 'letter-btn-active' : "letter-btn"} onClick={() => handleSelect(4)}>
                    N
                </button>
                <button className={index === 5 ? 'letter-btn-active' : "letter-btn"} onClick={() => handleSelect(5)}>
                    E
                </button>
            </div>
        </div>
    )
}

export default Top