import './objects.css'

const Objects: React.FC = () => {
  return (
    <section className="objects">
                    <div className="objects__container container">
                        <div className="objects__body">
                            <div className="objects__top">
                                <h2 className="objects__subtitle subtitle">Наши объекты</h2><a className="objects__link icons-small-pin" href="#">
                                    <span>Смотреть все объекты на карте</span></a>
                            </div>
                            <div className="objects__swiper-wrap">
                                <div className="swiper">
                                    <ul className="objects__list swiper-wrapper">
                                        <li className="objects__item swiper-slide"> <a className="objects__image" href="#"><img
                                                    src="template/images/obj01.webp" alt="" /></a>
                                            <div className="objects__address"> <span className="icons-small-pin"></span>Краснопольский проспект, 17Б
                                            </div><a className="objects__caption" href="#">ТК «Проспект»</a>
                                            <div className="objects__text">Расположение комплекса на одном из главных перекрестков района Парковый
                                                на первой линии в плотной жилой застройке обеспечивает высокий пешеходный и транспортный поток.
                                            </div>
                                        </li>
                                        <li className="objects__item swiper-slide"> <a className="objects__image" href="#"><img
                                                    src="template/images/obj02.webp" alt="" /></a>
                                            <div className="objects__address"> <span className="icons-small-pin"></span>Комсомольский пр., 50</div><a
                                                className="objects__caption" href="#">ТК «Магнит»</a>
                                            <div className="objects__text">Торговый комплекс выгодно расположен на первой линии, окружен плотной
                                                жилой застройкой, имеется парковка. </div>
                                        </li>
                                        <li className="objects__item swiper-slide"> <a className="objects__image" href="#"><img
                                                    src="template/images/obj03.webp" alt="" /></a>
                                            <div className="objects__address"> <span className="icons-small-pin"></span>Комсомольский пр-т, 74</div><a
                                                className="objects__caption" href="#">ТК «Проспект»</a>
                                            <div className="objects__text">Комплекс находится на первой линии и окружен плотной жилой застройкой. В
                                                непосредственной близости остановки общественного транспорта. Высокий пешеходный и транспортный
                                                поток.</div>
                                        </li>
                                        <li className="objects__item swiper-slide"> <a className="objects__image" href="#"><img
                                                    src="template/images/obj01.webp" alt="" /></a>
                                            <div className="objects__address"> <span className="icons-small-pin"></span>Краснопольский проспект, 17Б
                                            </div><a className="objects__caption" href="#">ТК «Проспект»</a>
                                            <div className="objects__text">Расположение комплекса на одном из главных перекрестков района Парковый
                                                на первой линии в плотной жилой застройке обеспечивает высокий пешеходный и транспортный поток.
                                            </div>
                                        </li>
                                        <li className="objects__item swiper-slide"> <a className="objects__image" href="#"><img
                                                    src="template/images/obj02.webp" alt="" /></a>
                                            <div className="objects__address"> <span className="icons-small-pin"></span>Комсомольский пр., 50</div><a
                                                className="objects__caption" href="#">ТК «Магнит»</a>
                                            <div className="objects__text">Торговый комплекс выгодно расположен на первой линии, окружен плотной
                                                жилой застройкой, имеется парковка. </div>
                                        </li>
                                        <li className="objects__item swiper-slide"> <a className="objects__image" href="#"><img
                                                    src="template/images/obj03.webp" alt="" /></a>
                                            <div className="objects__address"> <span className="icons-small-pin"></span>Комсомольский пр-т, 74</div><a
                                                className="objects__caption" href="#">ТК «Проспект»</a>
                                            <div className="objects__text">Комплекс находится на первой линии и окружен плотной жилой застройкой. В
                                                непосредственной близости остановки общественного транспорта. Высокий пешеходный и транспортный
                                                поток.</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="swiper__button-prev"><svg width="9" height="13" viewBox="0 0 9 13" fill="#00a0dc"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.0612 5.85643L6.65101 0.266811C7.00659 -0.088939 7.5831 -0.0889389 7.93851 0.266811C8.29394 0.622247 8.29394 1.19873 7.9385 1.55413L2.99239 6.50009L7.93836 11.4459C8.29379 11.8015 8.29379 12.3779 7.93836 12.7333C7.58292 13.0889 7.00644 13.0889 6.65086 12.7333L1.06106 7.14361C0.883341 6.9658 0.794583 6.73302 0.794583 6.50012C0.794583 6.2671 0.883514 6.03415 1.0612 5.85643Z" />
                                    </svg>
                                </div>
                                <div className="swiper__button-next"><svg width="9" height="13" viewBox="0 0 9 13" fill="#00a0dc"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.9388 7.14357L2.34899 12.7332C1.99341 13.0889 1.4169 13.0889 1.0615 12.7332C0.706061 12.3778 0.706061 11.8013 1.0615 11.4459L6.00761 6.49991L1.06164 1.55412C0.706207 1.19854 0.706207 0.622118 1.06164 0.266684C1.41708 -0.0888945 1.99356 -0.0888944 2.34914 0.266684L7.93894 5.85639C8.11666 6.0342 8.20542 6.26698 8.20542 6.49988C8.20542 6.73289 8.11649 6.96585 7.9388 7.14357Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
  )
}

export default Objects