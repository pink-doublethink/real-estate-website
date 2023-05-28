import './mainscreen.css'
import { Link } from 'react-router-dom';
import img from '../../assets/images/letter.svg'

const Mainscreen: React.FC = () => {
  return (
    <section className="mainscreen">
                    <div className="mainscreen__polygon"></div>
                    <div className="mainscreen__container container">
                        <div className="mainscreen__body">
                            <div className="mainscreen__info">
                                <h1 className="mainscreen__title title">Коммерческая недвижимость в Челябинске</h1>
                                <div className="mainscreen__text">от ведущего девелопера</div><Link to="/objects" className="mainscreen__btn btn btn--orange"
                                    >подобрать помещение</Link>
                            </div>
                            <div className="mainscreen__decor"> <img src={img} alt="" /></div>
                        </div>
                    </div>
                </section>
  )
}

export default Mainscreen