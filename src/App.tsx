import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import BookDetails from './pages/BookDetails';
// import Home from './pages/Home';

const Home = React.lazy(() => import('./pages/Home'));
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <React.Suspense fallback={<div>Loading...</div>}>
          {/* <ScrollToTop /> */}
          <Routes>
            <Route path={`${import.meta.env.BASE_URL}`} element={<Home />} />
            <Route path={`${import.meta.env.BASE_URL}/book-details/*`} element={<BookDetails />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App

