import { Helmet } from "react-helmet";
import { Mainscreen, Short } from '../component'

const GalleryPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Галерия</title>
        <meta
          name="description"
          content="Страница с галерией"
        />
      </Helmet>
      <Mainscreen />
      <Short />
    </>
  )
}

export default GalleryPage