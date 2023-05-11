import { Helmet } from "react-helmet";
import { Mainscreen, Short } from '../component'

const ObjectPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Объекты</title>
        <meta
          name="description"
          content="Страница с объектами"
        />
      </Helmet>
      <Mainscreen />
      <Short />
    </>
  )
}

export default ObjectPage