import { Helmet } from "react-helmet";
import { Mainscreen, PhotosBar, PhotosContent } from '../component'

const PhotosPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Фотогалереи — ООО "Проспект"</title>
        <meta
          name="description"
          content="Если вы ищете вдохновение для своего собственного строительного проекта или просто цените исключительные строительные фотографии, наши фотогалереи являются ценным ресурсом для изучения впечатляющего портфолио Prospect. Войдите в мир Prospect и посмотрите на красоту и опыт их строительных работ через захватывающие изображения."
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
      <PhotosBar />
      <PhotosContent />
    </>
  )
}

export default PhotosPage