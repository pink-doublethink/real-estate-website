import './galleryBar.css'

const GalleryBar: React.FC = () =>  {
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
                    <a className="breadcrumbs__link" href="photos.html">
                    Фотогалереи
                    </a>
                </li>
                <li className="breadcrumbs__item">
                    {" "}
                    <span className="breadcrumbs__span">Название фотогалереи</span>
                </li>
                </ul>
            </div>
            <h2 className="bar__subtitle subtitle">Название фотогалереи</h2>
            </div>
        </div>
    </section>
  )
}

export default GalleryBar