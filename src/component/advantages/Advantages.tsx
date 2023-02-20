import './advantages.css'

function Advantages() {
  return (
    <section className="advantages">
                    <div className="advantages__top-polygon"></div>
                    <div className="advantages__container container">
                        <div className="advantages__body">
                            <h2 className="advantages__subtitle subtitle">Наши преимущества</h2>
                            <ul className="advantages__list">
                                <li className="advantages__item">
                                    <div className="advantages__icon icons-tick"> </div>
                                    <div className="advantages__text">Возможность снять <span>от 1 до 2500 кв.м.</span></div>
                                </li>
                                <li className="advantages__item">
                                    <div className="advantages__icon icons-tick"> </div>
                                    <div className="advantages__text">Услуги собственной <span> управляющей компании</span></div>
                                </li>
                                <li className="advantages__item">
                                    <div className="advantages__icon icons-tick"> </div>
                                    <div className="advantages__text">Опыт работы в сфере оказания данного рода услуг <span>7 лет</span></div>
                                </li>
                                <li className="advantages__item">
                                    <div className="advantages__icon icons-tick"> </div>
                                    <div className="advantages__text">Единственный <span>собственник здания</span></div>
                                </li>
                                <li className="advantages__item">
                                    <div className="advantages__icon icons-tick"> </div>
                                    <div className="advantages__text">На обслуживании <span>38 объектов, общей площадью 77200 кв.м.</span></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="advantages__bottom-polygon"></div>
                </section>
  )
}

export default Advantages