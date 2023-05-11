import { Helmet } from "react-helmet";
import { Mainscreen, Short } from '../component'

const RentPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Рента</title>
        <meta
          name="description"
          content="Страница с рентой"
        />
      </Helmet>
      <Mainscreen />
      <Short />
    </>
  )
}

export default RentPage