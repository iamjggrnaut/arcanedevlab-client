import React from 'react'

import { SiAntdesign, SiVitest } from "react-icons/si";
import { SlGlobe } from "react-icons/sl";
import { TbDeviceMobile } from "react-icons/tb";
import { TiFlowSwitch } from "react-icons/ti";
import { FaTelegram } from 'react-icons/fa6'
import { RiSmartphoneLine } from "react-icons/ri";




const HomeService = () => {

    return (
        <div className='home-service' id='service'>
            <div className="container hs-container">
                <div className='d-flex align-items-center justify-content-center gap-3'>
                    <hr style={{ border: '1px solid #00B2D9', opacity: 1, width: '10%' }} />
                    <p className="title mb-0">Что мы делаем</p>
                    <hr style={{ border: '1px solid #00B2D9', opacity: 1, width: '10%' }} />
                </div>
                <div>
                    <p className="text-center">
                        Создаем инновационные решения, трансформируя технологии в мощные <br /> инструменты для вашего бизнеса и цифрового успеха.
                    </p>
                </div>
                <div className="service-cards">
                    <div className="row cards-row gap-4">
                        <div className="col service-card">
                            <div className="d-flex align-items-center justify-content-between">
                                <h5 className='mb-0'>Веб разработка</h5>
                                <SlGlobe className='card-icon' />
                            </div>
                            <div className="mt-2">
                                <p className='card-description'>
                                    В ARCANE DEVLAB мы предлагаем комплексные услуги вебразработки, создавая уникальные и функциональные веб-сайты. Наши эксперты разрабатывают интуитивные интерфейсы, используя современные технологии и передовые практики. Мы обеспечиваем адаптивность, производительность и соответствие вашим бизнес-целям, гарантируя качественное исполнение и поддержку на всех этапах разработки.
                                </p>
                            </div>
                            {/* <button className='card-button'>
                                more
                            </button> */}
                        </div>
                        <div className="col service-card">
                            <div className="d-flex align-items-center justify-content-between">
                                <h5 className='mb-0'>Мобильная разработка</h5>
                                <RiSmartphoneLine className='card-icon' />
                            </div>
                            <div className="mt-2">
                                <p className='card-description'>
                                    Мы создаем высококачественные мобильные приложения для различных платформ и используем передовые технологии для обеспечения отличной производительности и пользовательского опыта. Мы предлагаем индивидуальные решения, полностью адаптированные под ваши бизнес-цели, и предоставляем полный цикл разработки — от концепции до поддержки.
                                </p>
                            </div>
                            {/* <button className='card-button'>
                                more
                            </button> */}
                        </div>
                        <div className="col service-card">
                            <div className="d-flex align-items-center justify-content-between">
                                <h5 className='mb-0'>UX/UI дизайн</h5>
                                <SiAntdesign className='card-icon' />
                            </div>
                            <div className="mt-2">
                                <p className='card-description'>
                                    Наши профессиональные услуги UX/UI-дизайна в ARCANE DEVLAB создают привлекательные и интуитивные интерфейсы. Используя передовые методы и технологии, наши дизайнеры обеспечивают превосходный пользовательский опыт. Мы предлагаем индивидуальные решения, соответствующие вашим бизнес-целям и улучшающие взаимодействие с пользователями.
                                </p>
                            </div>
                            {/* <button className='card-button'>
                                more
                            </button> */}
                        </div>
                    </div>
                    <div className="row cards-row gap-4 mt-4">
                        <div className="col service-card">
                            <div className="d-flex align-items-center justify-content-between">
                                <h5 className='mb-0'>Тестирование приложений</h5>
                                <SiVitest className='card-icon' />
                            </div>
                            <div className="mt-2">
                                <p className='card-description'>
                                    ARCANE DEVLAB специализируется на высококачественном тестировании приложений и веб-сервисов. Мы применяем передовые методы и технологии для обеспечения надежности, функциональности и безопасности вашего продукта. Наша команда специалистов проводит как ручное, так и автоматизированное тестирование, гарантируя высокое качество исполнения и соответствие вашим требованиям.
                                </p>
                            </div>
                            {/* <button className='card-button'>
                                more
                            </button> */}
                        </div>
                        <div className="col service-card">
                            <div className="d-flex align-items-center justify-content-between">
                                <h5 className='mb-0'>Автоматизация бизнеса</h5>
                                <TiFlowSwitch className='card-icon' />
                            </div>
                            <div className="mt-2">
                                <p className='card-description'>
                                    Наша экспертиза в ARCANE DEVLAB включает в себя автоматизацию бизнеса для оптимизации операций и повышения эффективности компаний. Мы предлагаем индивидуальные решения с использованием передовых технологий и методов автоматизации процессов. Наши услуги включают автоматизацию бизнес-процессов, CRM-системы, корпоративные порталы и интеграции между системами, помогая вашему бизнесу стать более гибким и конкурентоспособным.
                                </p>
                            </div>
                            {/* <button className='card-button'>
                                more
                            </button> */}
                        </div>
                        <div className="col service-card">
                            <div className="d-flex align-items-center justify-content-between">
                                <h5 className='mb-0'>Telegram боты</h5>
                                <FaTelegram className='card-icon' />
                            </div>
                            <div className="mt-2">
                                <p className='card-description'>
                                    ARCANE DEVLAB также специализируется на создании инновационных телеграм-ботов, предлагая клиентам эффективные решения для автоматизации коммуникации и бизнес-процессов. Наши разработчики используют передовые технологии для создания персонализированных и функциональных ботов, способствующих улучшению взаимодействия с аудиторией и повышению эффективности операций.
                                </p>
                            </div>
                            {/* <button className='card-button'>
                                more
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeService