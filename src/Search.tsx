
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSearch } from '@fortawesome/free-solid-svg-icons';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
import icon from '../components/k icon.jpg';
// import './page.css';

const NotificationCircle = () => {
  return <div className="notification-circle"></div>;
};

const SearchIcon= () => {
  return (
    <div className='md:flex justify-between px-5  '>
    <div  className='hidden md:block mt-[2vh] lg:w-3/4'>
       <FontAwesomeIcon icon={faSearch} className='pr-5 text-slate-400 text-lg'/><input type='text' placeholder='Search here...' className='outline-none'/>
    
    </div>
    <div className='flex justify-end  gap-2  mr-5'>
      <i><NotificationsNoneIcon className='mt-[2vh] ' /><NotificationCircle /></i>
      <Avatar alt="K" src={icon} className=" mt-[1vh] 2xl:mt-[500px] " style={{height:'30px',width:'30px',marginTop:'13px'}}/>
    </div>
    </div>
  );
};

export default SearchIcon;
