import React from 'react';
import {useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPlus} from '@fortawesome/free-solid-svg-icons';
import image from '../Image/k icon.jpg';
import { Link } from 'react-router-dom';
import {  faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import axios from 'axios';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';



interface UserData {
  userid: number;
  email: string;
  pass_word: string;
  image:any;
  mobilenumber:string|number;
  role:any;
  firstname:string;
  lastname:string;
  country:string;
  gender:string;
  address:string;
  socialmedialink:string,
  user_status:any,
  img:any;
  defaultcurrency:string|any;
  defaultlanguage:string;
}
export const Userlistpage = () => {

  const [entries, setEntries] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<UserData[]>([]);

  // const getData = async () => {
  //   try {
  //     const response = await axios.get<UserData[]>("http://localhost:8080/api/userinfo/all");
  //     setData(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }

  useEffect(() => {
    fetch(`http://localhost:8080/api/userinfo/all`)
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Set the fetched user data in state
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

   // Perform actions when edit icon is clicked
   function handleEditAction(userid:number) {
    const updatedUserData = { /* Construct the updated user data here */ };
    fetch(`http://localhost:8080/api/userinfo/${userid}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedUserData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Handle success
      console.log(`User with ID ${userid} updated successfully.`);
    })
    .catch((error) => {
      console.error('Error updating user data:', error);
    });
   

    console.log(`Edit action clicked for user ID: ${userid}`);
  }


  return (
    <div className='px-4 lg:px-6'>
      
      <div className=' pt-6 md:flex justify-between   '>
        <div className="flex-row text-center  2xl:mr">
          
            <h2 className='text-gray-500 md:mt-5'>
              <span className="text-[rgb(2,158,157)]">Dashboard</span >&nbsp; / &nbsp;  User Mangement
            </h2>
        </div>
        <div className='flex-row mt-3 text-center'>
         
        <button className="bg-[hsl(180,82%,35%)]  text-white py-3.5   px-6 rounded-lg mr-1 hover:bg-yellow-400 " >
            <Link to='/adduser'><FontAwesomeIcon icon={faPlus} className='text-xl' /> Add user</Link>
          </button>
          
    
        </div>
      </div><br></br>

      <div className=' bg-white px-4 py-4 rounded-[10px] shadow-sm lg:flex lg:flex-row lg:justify-between xl:py-[22px]'>

        <div className=''>

          <h5 className='flex justify-center md:justify-start   w-full p-4  text-[16px] lg:w-[190px] xl:w-full lg:text-[16px] md:py-0 font-semibold  text-[#424040]   xl:pt-3'> User Management Lists </h5>

        </div>



        <div className='flex flex-col md:flex-row md:gap-6 lg:w-2/3 '>

        <input type="text" placeholder='Search by catogory title' className='border-[1px] w-full px-4 py-3 mb-2 border-gray-200  rounded-lg outline-none md:w-1/3 lg:w-2/3  '/>

       

        <select name="entries" id="enrties" className='border-[1px] border-gray-200 w-full px-4 py-3 mb-2 rounded-lg outline-none md:w-1/3  text-[#7987A1] text-base'value={entries}
  onChange={(e) => setEntries(parseInt(e.target.value))}>

          <option value="Show Entries"  selected   style={{color:'gray'}}>Show Entries</option>

          <option value="6">6</option>

          <option value="10">10</option>

          <option value="15">15</option>

        </select>

        </div>

      </div>
    
      
     <div className='  mt-4 px-5 py-5 border-[1px] border-gray-100 rounded-[10px] shadow-sm  bg-white '><TableContainer className='Table-container' sx={{ maxHeight:'450px' , width: '100%'}}>
        <Table className='gap-6 '  >
          <TableHead className='text-gray-800 ' >
            <TableRow className='table-head' >
                 <th>ID</th>
                 <th>IMAGE</th>
                 <th>EMAIL</th>
              
               <th>MOBILE</th>
               <th>ROLE</th>
               <th>F.NAME</th>
               <th>L.NAME</th>
               <th>COUNTRY</th>
               <th>GENDER</th>
               <th>ADDRESS</th>
               <th>SOCIALMEDIA </th>
               <th>STATUS</th>
               <th>CURRENCY</th>
               <th>LANGUAGE</th>
               <th>ACTIONS</th>
              
            </TableRow>
          </TableHead>
          <TableBody >
          {data.slice((currentPage - 1) * entries, currentPage * entries).map((list) => (
              <tr key={list.userid} >
                <td>{list.userid}</td>
                <td >
                  <img className='rounded-md' src={list.image} alt={` img`} />
                </td>
                <td>{list.email}</td>
                <td>{list.mobilenumber}</td>
                <td>{list.role.rolename}</td>
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
                  <span className='flex gap-2 text-[#029e9d] justify-center'>
                     <Link to='/usereditor/${list.userid}'><FontAwesomeIcon icon={faPenToSquare} className='text-xl'  onClick={() => handleEditAction(list.userid)}/></Link>
                     
                    <BackspaceOutlinedIcon/>
                  </span>                </td>
              </tr>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
</div>
     <div className='my-8 flex  justify-center lg:justify-start  flex-row '>
     <button className="bg-white text-[hsl(180,82%,35%)] hover:text-white  hover:bg-[hsl(180,82%,35%)] py-2  px-3 rounded-lg mr-1 border-[1px] border-gray-200  " onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}>
            Previous
          </button>
          <button className={`${
    currentPage === 1 ? 'active-page' : 'bg-white text-[hsl(180,82%,35%)]'
  } py-2 border-[1px] border-gray-200 px-4 rounded-lg mr-1`} onClick={() => setCurrentPage(1)}>
             1
          </button>
          <button className={`${
    currentPage === 2 ? 'active-page' : 'bg-white text-[hsl(180,82%,35%)]'
  } py-2 border-[1px] border-gray-200 px-4 rounded-lg mr-1`} onClick={() => setCurrentPage(2)}>
            2
          </button>
          <button className={`${
    currentPage === 3 ? 'active-page' : 'bg-white text-[hsl(180,82%,35%)]'
  } py-2 border-[1px] border-gray-200 px-4 rounded-lg mr-1`} onClick={() => setCurrentPage(3)}>
             3
          </button>
          <button className="bg-white text-[hsl(180,82%,35%)] hover:bg-[hsl(180,82%,35%)] hover:text-white py-2  border-[1px] border-gray-200 px-3 rounded-lg mr-1 " onClick={() => setCurrentPage(currentPage + 1)}>
             Next
          </button>
     </div>
     
      </div>
      
     

     




  )
};
