import './short.css'

const Short: React.FC = () => {
  return (
    <section className="short">
                    <div className="short__container container">
                        <div className="short__body">
                            <div className="short__top">
                                <h2 className="short__subtitle subtitle">Кратко о компании</h2>
                                <div className="short__text text">ООО «Проспект» работает с 2010 года и является собственником крупных
                                    объектов коммерческой недвижимости в различных районах г. Челябинска.</div>
                            </div>
                            <div className="short__bottom">
                                <ul className="short__infographic infographic">
                                    <li className="infographic__item">
                                        <div className="infographic__number">38</div>
                                        <div className="infographic__text">объектов недвижимости</div>
                                    </li>
                                    <li className="infographic__item">
                                        <div className="infographic__number">77 200</div>
                                        <div className="infographic__text">кв. м на обслуживании</div>
                                    </li>
                                    <li className="infographic__item">
                                        <div className="infographic__number">7</div>
                                        <div className="infographic__text">лет опыта вкоммерческой недвижимости</div>
                                    </li>
                                    <li className="infographic__item">
                                        <div className="infographic__number"> <span>до </span>2500</div>
                                        <div className="infographic__text">Возможность снять от 1 до 2500 кв.м.</div>
                                    </li>
                                </ul>
                                <div className="short__info">
                                    <div className="short__descripton text">
                                        <p>В компетенцию компании входит девелопмент на всех стадиях развития проектов, эксплуатация торговых
                                            и офисных зданий, а так же управление арендными отношениями.</p>
                                        <p>ООО «Проспект» предоставляет услуги собственной управляющей компании, имеющей на обслуживании 38
                                            объектов общей площадью 77200 кв.м. Отличительными особенностями работы компании являются
                                            разработанная система маркетинга, индивидуальный подход к арендаторам, минимальная конкуренция на
                                            объектах и долгосрочное сотрудничество.</p>
                                    </div>
                                    <div className="short__person">
                                        <div className="short__name">Чигинцев Максим Николаевич</div>
                                        <div className="short__position">Генеральный директор ООО «Проспект»</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="short__watermark"> <img src="template/images/watermark.svg" alt="" /></div>
                </section>
  )
}

export default Short