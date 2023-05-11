import { Helmet } from "react-helmet";
import { Mainscreen, Short } from '../component'

const PhotosPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Фотографии</title>
        <meta
          name="description"
          content="Страница с фотографиями"
        />
      </Helmet>
      <Mainscreen />
      <Short />
    </>
  )
}

export default PhotosPage