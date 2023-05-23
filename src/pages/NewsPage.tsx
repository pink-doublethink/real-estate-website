import { Helmet } from "react-helmet";
import { Mainscreen, NewsBar, NewsContent } from '../component'

const NewsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Новости и аналитика — ООО "Проспект"</title>
        <meta
          name="description"
          content="Оставайтесь в курсе событий, используя наши своевременные новостные статьи, пресс-релизы и комментарии экспертов, предлагающие ценные взгляды на тенденции в строительстве, основные проекты и отраслевые инновации. Эта страница служит ценным ресурсом для профессионалов отрасли, инвесторов и всех, кто интересуется строительным сектором."
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
      <NewsBar />
      <NewsContent />
    </>
  )
}

export default NewsPage