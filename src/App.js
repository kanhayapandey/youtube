import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails" ;
 import Header from "./components/Header";
import { Appcontext } from "./context/contextApi";
const App = () => {
  return (
    <Appcontext>
      <BrowserRouter>
        <div className="flex flex-col h-full"> 
          <Header />
          <Routes>
             <Route  path='/' exact element={<Feed />} />
             <Route  path='/searchResult/:searchQuery' element={<SearchResult />} />
             <Route  path='/video/:id' element={ <VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Appcontext>
  )
}

export default App