import Mainscreen from "../component/mainscreen/Mainscreen"
import Short from '../component/short/Short';
import Objects from '../component/objects/Objects';
import Advantages from '../component/advantages/Advantages';
import Partners from '../component/partners/Partners';
import Invest from '../component/invest/Invest';

function HomePage() {
  return (
    <>
        <Mainscreen />
        <Short />
        <Objects />
        <Advantages />
        <Partners />
        <Invest />
    </>
  )
}

export default HomePage