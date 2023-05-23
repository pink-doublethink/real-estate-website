import './videosContent.css'

const VideosContent: React.FC = () =>  {
  return (
    <>
        <div className="videos">
            <div className="videos__container container">
            <div className="videos__body">
                <ul className="videos__list">
                <li className="videos__item">
                    <div className="videos__image">
                    <iframe
                        src="https://www.youtube.com/embed/HbBMp6yUXO0"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    </div>
                    <a className="videos__title" href="gallery.html">
                    Название видео может быть в несколько строк
                    </a>
                </li>
                <li className="videos__item">
                    <div className="videos__image">
                    <iframe
                        src="https://www.youtube.com/embed/HbBMp6yUXO0"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    </div>
                    <a className="videos__title" href="gallery.html">
                    Название видео может быть в несколько строк
                    </a>
                </li>
                <li className="videos__item">
                    <div className="videos__image">
                    <iframe
                        src="https://www.youtube.com/embed/HbBMp6yUXO0"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    </div>
                    <a className="videos__title" href="gallery.html">
                    Название видео может быть в несколько строк
                    </a>
                </li>
                <li className="videos__item">
                    <div className="videos__image">
                    <iframe
                        src="https://www.youtube.com/embed/HbBMp6yUXO0"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    </div>
                    <a className="videos__title" href="gallery.html">
                    Название видео может быть в несколько строк
                    </a>
                </li>
                <li className="videos__item">
                    <div className="videos__image">
                    <iframe
                        src="https://www.youtube.com/embed/HbBMp6yUXO0"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    </div>
                    <a className="videos__title" href="gallery.html">
                    Название видео может быть в несколько строк
                    </a>
                </li>
                <li className="videos__item">
                    <div className="videos__image">
                    <iframe
                        src="https://www.youtube.com/embed/HbBMp6yUXO0"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    </div>
                    <a className="videos__title" href="gallery.html">
                    Название видео может быть в несколько строк
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

export default VideosContent