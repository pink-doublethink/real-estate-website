import './App.css';
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import { lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider
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


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/article",
    element: <ArticlePage />
  },
  {
    path: "/contact",
    element: <ContactPage />
  },
  {
    path: "/gallery",
    element: <GalleryPage />
  },
  {
    path: "/news",
    element: <NewsPage />
  },
  {
    path: "/object",
    element: <ObjectPage />
  },
  {
    path: "/photos",
    element: <PhotosPage />
  },
  {
    path: "/rent",
    element: <RentPage />
  },
  {
    path: "/videos",
    element: <VideosPage />
  },
])

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <RouterProvider router={router} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
