import { Helmet } from "react-helmet";
import { Mainscreen } from '../component'

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
    </>
  )
}

export default PhotosPage