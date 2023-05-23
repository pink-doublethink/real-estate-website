import './photosContent.css'

const PhotosContent: React.FC = () =>  {
  return (
    <>
        <div className="photos">
            <div className="photos__container container">
            <div className="photos__body">
                <ul className="photos__list">
                <li className="photos__item">
                    <div className="photos__image">
                    <img src="template/images/obj01.webp" alt="" />
                    <div className="photos__cover">
                        {" "}
                        <a
                        className="photos__btn btn-no-bg btn-no-bg--white"
                        href="gallery.html"
                        >
                        просмотреть фотографии
                        </a>
                    </div>
                    </div>
                    <a className="photos__title" href="gallery.html">
                    Название альбома фотогалереи
                    </a>
                </li>
                <li className="photos__item">
                    <div className="photos__image">
                    <img src="template/images/obj01.webp" alt="" />
                    <div className="photos__cover">
                        {" "}
                        <a
                        className="photos__btn btn-no-bg btn-no-bg--white"
                        href="gallery.html"
                        >
                        просмотреть фотографии
                        </a>
                    </div>
                    </div>
                    <a className="photos__title" href="gallery.html">
                    Название альбома фотогалереи
                    </a>
                </li>
                <li className="photos__item">
                    <div className="photos__image">
                    <img src="template/images/obj01.webp" alt="" />
                    <div className="photos__cover">
                        {" "}
                        <a
                        className="photos__btn btn-no-bg btn-no-bg--white"
                        href="gallery.html"
                        >
                        просмотреть фотографии
                        </a>
                    </div>
                    </div>
                    <a className="photos__title" href="gallery.html">
                    Название альбома фотогалереи
                    </a>
                </li>
                <li className="photos__item">
                    <div className="photos__image">
                    <img src="template/images/obj01.webp" alt="" />
                    <div className="photos__cover">
                        {" "}
                        <a
                        className="photos__btn btn-no-bg btn-no-bg--white"
                        href="gallery.html"
                        >
                        просмотреть фотографии
                        </a>
                    </div>
                    </div>
                    <a className="photos__title" href="gallery.html">
                    Название альбома фотогалереи
                    </a>
                </li>
                <li className="photos__item">
                    <div className="photos__image">
                    <img src="template/images/obj01.webp" alt="" />
                    <div className="photos__cover">
                        {" "}
                        <a
                        className="photos__btn btn-no-bg btn-no-bg--white"
                        href="gallery.html"
                        >
                        просмотреть фотографии
                        </a>
                    </div>
                    </div>
                    <a className="photos__title" href="gallery.html">
                    Название альбома фотогалереи
                    </a>
                </li>
                <li className="photos__item">
                    <div className="photos__image">
                    <img src="template/images/obj01.webp" alt="" />
                    <div className="photos__cover">
                        {" "}
                        <a
                        className="photos__btn btn-no-bg btn-no-bg--white"
                        href="gallery.html"
                        >
                        просмотреть фотографии
                        </a>
                    </div>
                    </div>
                    <a className="photos__title" href="gallery.html">
                    Название альбома фотогалереи
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </div>
        <div className="pagination">
            <div className="pagination__container container">
            <div className="pagination__body">
                <ul className="pagination__list">
                <li className="pagination__item">
                    {" "}
                    <a className="pagination__link pagination__link--active" href="#">
                    1
                    </a>
                </li>
                <li className="pagination__item">
                    {" "}
                    <a className="pagination__link" href="#">
                    2
                    </a>
                </li>
                <li className="pagination__item">
                    {" "}
                    <a className="pagination__link" href="#">
                    3
                    </a>
                </li>
                <li className="pagination__item">
                    {" "}
                    <a className="pagination__link" href="#">
                    4
                    </a>
                </li>
                <li className="pagination__item">
                    {" "}
                    <a className="pagination__link" href="#">
                    5
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </div>
    </>
  )
}

export default PhotosContent