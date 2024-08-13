import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faVideo, faVideoSlash, faBroadcastTower, faFire, faShoppingCart, faMusic, faFilm, faGamepad, faNewspaper, faFutbol, faCog, faHistory, faQuestionCircle, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
const Sidebar = () => {
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);

  //Early Return
  if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg w-48'>
       <ul className="list-none p-0">
      <li className="flex items-center mb-2 text-gray-700 hover:text-blue-500">
        <FontAwesomeIcon icon={faHome} className="mr-2" /> <Link to="/">Home</Link>
      </li>
      <li className="flex items-center mb-2 text-gray-700 hover:text-blue-500">
        <FontAwesomeIcon icon={faVideoSlash} className="mr-2" /> Shorts
      </li>
      <li className="flex items-center mb-2 text-gray-700 hover:text-blue-500">
        <FontAwesomeIcon icon={faVideo} className="mr-2" /> Video
      </li>
      <li className="flex items-center mb-2 text-gray-700 hover:text-blue-500">
        <FontAwesomeIcon icon={faBroadcastTower} className="mr-2" /> Live
      </li>
    </ul>
    <h1 className='font-bold text-lg pt-5'>Explore</h1>
      <ul className="list-none p-0 mt-2">
        <li className="flex items-center mb-2 text-gray-700 hover:text-blue-500">
          <FontAwesomeIcon icon={faFire} className="mr-2" /> Trending
        </li>
        <li className="flex items-center mb-2 text-gray-700 hover:text-blue-500">
          <FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> Shopping
        </li>
        <li className="flex items-center mb-2 text-gray-700 hover:text-blue-500">
          <FontAwesomeIcon icon={faMusic} className="mr-2" /> Music
        </li>
        <li className="flex items-center mb-2 text-gray-700 hover:text-blue-500">
          <FontAwesomeIcon icon={faFilm} className="mr-2" /> Films
        </li>
        <li className="flex items-center mb-2 text-gray-700 hover:text-blue-500">
          <FontAwesomeIcon icon={faGamepad} className="mr-2" /> Gaming
        </li>
        <li className="flex items-center mb-2 text-gray-700 hover:text-blue-500">
          <FontAwesomeIcon icon={faNewspaper} className="mr-2" /> News
        </li>
        <li className="flex items-center mb-2 text-gray-700 hover:text-blue-500">
          <FontAwesomeIcon icon={faFutbol} className="mr-2" /> Sport
        </li>
      </ul>

      <h1 className='font-bold text-lg pt-5'>More</h1>
      <ul className="list-none p-0 mt-2">
        <li className="flex items-center mb-2 text-gray-700 hover:text-blue-500">
          <FontAwesomeIcon icon={faCog} className="mr-2" /> Setting
        </li>
        <li className="flex items-center mb-2 text-gray-700 hover:text-blue-500">
          <FontAwesomeIcon icon={faHistory} className="mr-2" /> Report History
        </li>
        <li className="flex items-center mb-2 text-gray-700 hover:text-blue-500">
          <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" /> Help
        </li>
        <li className="flex items-center mb-2 text-gray-700 hover:text-blue-500">
          <FontAwesomeIcon icon={faPaperPlane} className="mr-2" /> Send Feedback
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
