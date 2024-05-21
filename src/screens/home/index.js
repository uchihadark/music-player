import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Library from '../library/library'
import Feed from '../feed/feed'
import Favorites from '../favorites/favorites'
import Player from '../player/player'
import Trending from '../trending/trending'
import './home.css'
import Sidebar from '../../components/sidebar/sidebar'

export default function Home() {
  return (
    <div className='main-body'>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Library />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='player' element={<Player />} />
          <Route path='trending' element={<Trending />} />
        </Routes>
      </Router>
    </div>
  )
}
