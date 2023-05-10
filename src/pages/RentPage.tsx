import { Helmet } from "react-helmet";
import { Mainscreen } from '../component'

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
    </>
  )
}

export default RentPage