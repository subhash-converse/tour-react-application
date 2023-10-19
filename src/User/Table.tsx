
import * as React from 'react';
import  { useState,useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import image from '../uploads/k icon.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import axios from 'axios';


interface UserData {
  userid: number;
  email: string;
  pass_word: string;
  image:any;
  mobilenumber:string|number;
  roleid:number;
  firstname:string;
  lastname:string;
  country:string;
  gender:string;
  address:string;
  socialmedialink:string,
  user_status:any,
  img:any;
  defaultcurrency:string|any;
  defaultlanguage:string
}
// function createData(
//   id:number,
//   Img:string|File|any,
//     Email:string,
//     Mobilenumber:number|string,
//     Role:string,
//     Firstname:string,
//     Lastname:string,
//     Country:string,
//     Gender:string,
//     Address:string,
//     Socialmedialink:string,
//     Userstatus:string,
    
//     Defaultcurrency:string,
//     Defaultlanguage:string
// ) {
  
//   return { id,Img,Email,Mobilenumber,Role,Firstname,Lastname,Country,Gender,Address,Socialmedialink,Userstatus,Defaultcurrency,Defaultlanguage};
// }

// const rows = [
//   createData(1,`${image}`,'abcd@gmail.com',9876543210,'User','raju','ram','India','Male','123,abcd street,xxxxx.','avdfhdfhe.com','active','$','Tamil'),
//   createData(2,`${image}`,'abcd@gmail.com',9876543210,'User','raju','ram','India','Male','123,abcd street,xxxxx.','avdfhdfhe.com','active','$','Tamil'),
//   createData(3,`${image}`,'abcd@gmail.com',9876543210,'User','raju','ram','India','Male','123,abcd street,xxxxx.','avdfhdfhe.com','active','$','Tamil'),
//   createData(4,`${image}`,'abcd@gmail.com',9876543210,'User','raju','ram','India','Male','123,abcd street,xxxxx.','avdfhdfhe.com','active','$','Tamil'),
//   createData(5,`${image}`,'abcd@gmail.com',9876543210,'User','raju','ram','India','Male','123,abcd street,xxxxx.','avdfhdfhe.com','active','$','Tamil'),
//   createData(6,`${image}`,'abcd@gmail.com',9876543210,'User','raju','ram','India','Male','123,abcd street,xxxxx.','avdfhdfhe.com','active','$','Tamil'),
//   createData(7,`${image}`,'abcd@gmail.com',9876543210,'User','raju','ram','India','Male','123,abcd street,xxxxx.','avdfhdfhe.com','active','$','Tamil')
// ];



export default function Tablelist() {
  const [entries, setEntries] = useState(5);
  const [data, setData] = useState<UserData[]>([]);

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
  function handleEditAction(userid:number) {
    // Perform actions when edit icon is clicked
    console.log(`Edit action clicked for user ID: ${userid}`);
  }

  return (
        
      <TableContainer className='Table-container' sx={{ maxHeight:'450px' , width: '100%'}}>
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
          {data.slice(0, entries).map((list) => (
              <tr key={list.userid} >
                <td>{list.userid}</td>
                <td >
                  <img className='rounded-md' src={list.image} alt={` img`} />
                </td>
                <td>{list.email}</td>
                <td>{list.mobilenumber}</td>
                <td>{list.firstname}</td>
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
                     <FontAwesomeIcon icon={faPenToSquare} className='text-xl'  onClick={() => handleEditAction(list.userid)}/>
                     
                    <BackspaceOutlinedIcon/>
                  </span>                </td>
              </tr>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    
  );
}