import { Helmet } from "react-helmet";
import { Mainscreen, Short } from '../component'

const GalleryPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Название фотогалереи — ООО "Проспект"</title>
        <meta
          name="description"
          content="Просмотрите широкий спектр тщательно подобранных фотогалерей, в которых представлены жилые, коммерческие и инфраструктурные объекты. От поразительных экстерьеров до элегантных интерьеров, каждая галерея отражает суть приверженности компании Проспект к качеству и вниманию к деталям."
        />
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1.0" 
        />
        <meta 
          name="theme-color" 
          content="#00A0DC" 
        />
      </Helmet>
      <Mainscreen />
      <Short />
    </>
  )
}

export default GalleryPage