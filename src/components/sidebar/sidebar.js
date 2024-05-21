import React from 'react'
import './sidebar.css'
import SidebarButton from './sidebarButton/sidebarButton'
import { FaGripfire } from "react-icons/fa";
import { SlFeed } from "react-icons/sl";
import { FaPlay } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";
import { IoLibraryOutline } from "react-icons/io5"
import { PiSignOutLight } from "react-icons/pi";


export default function Sidebar() {
  return (
    <div className='sidebar-container'>
      <img src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/anime_spirited_away_no_face_nobody-512.png' alt='pfp-picture' className='profile-pic'/>
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<SlFeed />}/>
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />}/>
        <SidebarButton title="Player" to="/player" icon={<FaPlay />}/>
        <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />}/>
        <SidebarButton title="Library" to="/" icon={<IoLibraryOutline />}/>
      </div>
      <SidebarButton title="Sign Out" to="/" icon={<PiSignOutLight />}/>
    </div>
  )
}
