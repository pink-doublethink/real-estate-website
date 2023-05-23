import './objectBar.css'

const ObjectBar: React.FC = () =>  {
  return (
    <section className="bar">
        <div className="bar__container container">
            <div className="bar__body">
            <div className="bar__breadcrumbs breadcrumbs">
                <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                    {" "}
                    <a className="breadcrumbs__link" href="index.html">
                    Главная
                    </a>
                </li>
                <li className="breadcrumbs__item">
                    {" "}
                    <a className="breadcrumbs__link" href="rent.html">
                    Объекты в аренду
                    </a>
                </li>
                <li className="breadcrumbs__item">
                    {" "}
                    <span className="breadcrumbs__span">ТК «Проспект»</span>
                </li>
                </ul>
            </div>
            <h2 className="bar__subtitle subtitle icons-pin">Победы пр., 163</h2>
            <div className="bar__object">
                <span>ТК «Проспект» </span>
            </div>
            </div>
        </div>
    </section>
  )
}

export default ObjectBar