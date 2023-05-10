import { Helmet } from "react-helmet";
import { Mainscreen } from '../component'

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Контакты</title>
        <meta
          name="description"
          content="Страница с контактами"
        />
      </Helmet>
      <Mainscreen />
    </>
  )
}

export default ContactPage