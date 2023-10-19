import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

interface UserData {
  userid: number;
  email: string;
  pass_word: string;
  image: any;
  mobilenumber: string | number;
  roleid: number;
  firstname: string;
  lastname: string;
  country: string;
  gender: string;
  address: string;
  socialmedialink: string,
  user_status: any,
  img: any;
  defaultcurrency: string | any;
  defaultlanguage: string
}

function App() {
  const [data, setData] = useState<UserData[]>([]);
  const [entries, setEntries] = useState(5);

  const getData = async () => {
    try {
      const response = await axios.get<UserData[]>("http://localhost:4000/usertable");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  function handleEditAction(userid: number) {
    // Perform actions when edit icon is clicked
    console.log(`Edit action clicked for user ID: ${userid}`);
  }

  return (
    <div>
      <>
        <select name="entries" id="enrties" className='border-[1px] border-gray-200 w-full px-4 py-3 mb-2 rounded-lg outline-none md:w-1/3  text-[#7987A1] text-base' value={entries}
          onChange={(e) => setEntries(parseInt(e.target.value))}>
          <option value="Show Entries" selected style={{ color: 'gray' }}>Show Entries</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </>
      <table className='gap-6'>
        <thead className='text-gray-800'>
          <tr className='table-head'>
            <td>ID</td>
            <td>IMAGE</td>
            <td>EMAIL</td>
            <td>MOBILE</td>
            <td>F.NAME</td>
            <td>L.NAME</td>
            <td>COUNTRY</td>
            <td>GENDER</td>
            <td>ADDRESS</td>
            <td>SOCIALMEDIA</td>
            <td>STATUS</td>
            <td>CURRENCY</td>
            <td>LANGUAGE</td>
            <td>ACTIONS</td>
          </tr>
        </thead>

        <tbody className='gap-10 divide-y'>
          {data.slice(0, entries).map(list => (
            <>
              <tr key={list.userid}>
                <td>{list.userid}</td>
                <td>
                  <img className='rounded-md' src={list.image} alt={`Profile of ${list.firstname}`} />
                </td>
                <td>{list.email}</td>
                <td>{list.mobilenumber}</td>
                <td>{list.firstname}</td>
                <td>{list.lastname}</td>
                <td>{list.country}</td>
                <td>{list.gender}</td>
                <td>{list.address}</td>
                <td>{list.socialmedialink}</td>
                <td>{list.user_status[0] === 0x01 ? "Inactive" : "Active"}</td>
                <td>{list.defaultcurrency}</td>
                <td>{list.defaultlanguage}</td>
                <td>
                  <span><FontAwesomeIcon
                    icon={faPenToSquare}
                    className='text-xl text-[#029e9d] cursor-pointer'
                    onClick={() => handleEditAction(list.userid)}
                  /> <BackspaceOutlinedIcon className='text-xl text-[#029e9d] cursor-pointer' /></span>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>

    </div>

  )
}
export default App;
