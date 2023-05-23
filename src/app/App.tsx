import './app.css';
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import { lazy } from "react";
import {
  BrowserRouter as Router, 
  Route, 
  Routes
} from "react-router-dom"


const ArticlePage  = lazy(() => import('../pages/ArticlePage')); 
const ContactPage  = lazy(() => import('../pages/ContactPage')); 
const GalleryPage  = lazy(() => import('../pages/GalleryPage')); 
const HomePage = lazy(() => import('../pages/HomePage')); 
const NewsPage  = lazy(() => import('../pages/NewsPage')); 
const ObjectPage  = lazy(() => import('../pages/ObjectPage')); 
const PhotosPage  = lazy(() => import('../pages/PhotosPage')); 
const RentPage  = lazy(() => import('../pages/RentPage')); 
const VideosPage  = lazy(() => import('../pages/VideosPage')); 

const App: React.FC = () => {
  const Article  = <ArticlePage /> 
  const Contact  = <ContactPage /> ;
  const Gallery  = <GalleryPage /> ;
  const Home = <HomePage /> ;
  const News  = <NewsPage /> ;
  const Object  = <ObjectPage /> ;
  const Photos  = <PhotosPage /> ;
  const Rent  = <RentPage /> ;
  const Videos  = <VideosPage /> ; 

  return (
    <Router>
      <div className="wrapper">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/article" element={Article} />
            <Route path="/contact" element={Contact} />
            <Route path="/gallery" element={Gallery} />
            <Route path="/news" element={News} />
            <Route path="/object" element={Object} />
            <Route path="/photos" element={Photos} />
            <Route path="/rent" element={Rent} />
            <Route path="/videos" element={Videos} />
            <Route path="/" element={Home} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
