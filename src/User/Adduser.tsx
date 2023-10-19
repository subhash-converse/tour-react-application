import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Define the type for userData
interface UserdataType {
  email: string;
  pass_word: string;
  mobilenumber: string;
  firstname: string;
  lastname: string;
  country: string;
  gender: string;
  address: string;
  socialmedialink: string;
  user_status: string;
  img: any;
  defaultcurrency: string;
  defaultlanguage: string;
  createddate: any;
  
  rolename: string;
  [key: string]: any;
}
interface AddUserProps {
  isEditMode: boolean;
  userId?: string;
}

const AddUser = () => {
  // Define the initial state for userData and errors
  const [userData, setUserData] = useState<UserdataType>({
    email: '',
    pass_word: '',
    mobilenumber: '',
    firstname: '',
    lastname: '',
    country: '',
    gender: '',
    address: '',
    socialmedialink: '',
    user_status: '',
    img: '',
    defaultcurrency: '',
    defaultlanguage: '',
    createddate: '',
    rolename: '',
    
  });

  const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    email: '',
    pass_word: '',
    mobilenumber: '',
  });

  // useEffect(() => {
  // if (isEditMode) {
  //   // Fetch user data based on the ID and populate the form fields
  //   fetch(`http://localhost:8080/api/userinfo/${id}`)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`Failed to fetch user data: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((userDataFromServer) => {
  //       setUserData(userDataFromServer);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching user data:', error);
  //     });
  // }
// }, [isEditMode, id]);

  const validateInput = (fieldName: string, value: string) => {
    let errorMessage = '';

    if (fieldName === 'firstname' && value.trim() === '') {
      errorMessage = 'First Name is required';
    } else if (fieldName === 'lastname' && value.trim() === '') {
      errorMessage = 'Last Name is required';
    } else if (fieldName === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errorMessage = 'Invalid Email';
    } else if (fieldName === 'pass_word' && value.length < 6) {
      errorMessage = 'Password must be at least 6 characters long';
    } else if (fieldName === 'mobilenumber' && !/^\d{10}$/.test(value)) {
      errorMessage = 'Invalid Mobile Number';
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: errorMessage,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!userData.img) {
      alert('Please select an image for upload.');
      return; // Don't proceed with the submission
    }

    Object.keys(userData).forEach((fieldName) => {
      validateInput(fieldName,userData [fieldName]);
    });
 
    // Check if there are any validation errors
    const hasErrors = Object.values(errors).some((error) => error !== '');
  
     if (!hasErrors) {
    try {

      // if (isEditMode) {
      //   // Handle editing an existing user
      //   const userId = /* Get the user ID you want to edit */;
      //   const response = await fetch(`http://localhost:8080/api/userinfo/:id`, {
      //     method: 'PUT',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(userData),
      //   });

      //   if (response.status === 200) {
      //     console.log('User updated successfully');
      //   } else {
      //     console.error('Error updating user:', response.status);
      //   }
      // }else{
      // Add a new user
      const formData = new FormData();
      formData.append('file', userData.img);
      formData.append('firstname', userData.firstname); // Append each form field value
      formData.append('lastname', userData.lastname);
      formData.append('email', userData.email);
      formData.append('pass_word', userData.pass_word);
      formData.append('mobilenumber',userData.mobilenumber);
      formData.append('gender', userData.gender);
      formData.append('address', userData.address);
        formData.append('socialmedialink', userData.socialmedialink);
        formData.append('defaultcurrency', userData.defaultcurrency);
       formData.append('country', userData.country);
       formData.append('defaultlanguage', userData.defaultlanguage);
       formData.append('rolename',userData.rolename)

     



      // console.log(JSON.stringify(userData));
      const response = await fetch('http://localhost:8080/api/userinfo/useradd', {
        method: 'POST',
        body: formData,
      });

      if (response.status === 201) {
        // Handle successful user addition
        console.log('User added successfully');
      } else {
        
        console.error('Error adding user:', response.status);
      // }
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  
  }

  };
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = (event.target as HTMLInputElement).files?.[0];
  
    // Check if the selected file is an image
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      // Update the userData state with the selected image file
      setUserData({ ...userData, img: selectedFile });
    } else {
      // Show an alert for an invalid file
      alert('Please select a valid image file.');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    // Check some condition, for example, the length of the textarea input
    if (value.length <= 100) {
      setUserData({ ...userData, [name]: value });
    } else {
      // Handle the condition, e.g., show an error message or prevent further changes
      alert('Textarea input is too long! Max length is 100 characters.');
    }
  };

  const handleradioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // Check if the input type is radio
    if (event.target.type === 'radio') {
      // Update the gender property in userData
      setUserData({ ...userData, [name]: value });
    }
  };
 
  return (
    <div className="bg-[#f9fafb] px-3 md:px-6">
      <div className="md:flex justify-between mt-7 md:mt-3 lg:mt-3">
        <div className="flex-row text-center">
          <h2 className="text-gray-500 md:pt-5 lg:pt-5">
            <span className="text-[rgb(2,158,157)]">Dashboard</span> /{' '}
            <span className="text-[rgb(2,158,157)]">User Management</span> / Add User
          </h2>
        </div>
        <div className="flex-row mt-3 text-center lg:mr-3">
          <button className="bg-[hsl(180,82%,35%)] text-white py-[12px] px-[18px] w-[141px] rounded-lg mr-1 hover:bg-yellow-400 gap-1">
            <Link to="/">
              <FontAwesomeIcon icon={faArrowLeft} className="text-xl " /> Back To List
            </Link>
          </button>
        </div>
      </div>

      <form className="pl-[20px] bg-[#ffffff] border-[1px] border-gray-100 shadow-sm rounded-lg pb-[18px] mb-12 pr-6 mt-4" onSubmit={handleSubmit} encType="multipart/form-data">
        <h4 className="text-[#232323]  text-[20px] font-semibold pt-3">User Setup</h4>
        <br />
        <label>Upload Category Icon</label>
        <br />
        <input
          type="file"
          className="border-[1px] py-2 h-[50px] border-gray-200 rounded-lg w-full grid grid-cols-1 mr-4 mb-2 pl-2"
          name="img"
          accept="image/*" 
          // multiple={false}
          // value={userData.img}
          onChange={handleImageChange}
        />
        <div className="w-full grid grid-cols-1">
          <div className="lg:flex gap-6 mb-2">
            <div className="flex flex-col w-full">
              <label>First Name</label>
              <input
                type="text"
                className={`border-[1px] border-gray-200 rounded-lg h-[50px] w-full pl-2 ${errors.firstname ? 'border-red-500' : ''}`}
                name="firstname"
                value={userData.firstname}
                onChange={handleChange}
              />
              {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>}
            </div>

            <div className="flex flex-col w-full">
              <label>Last Name</label>
              <input
                type="text"
                className={`border-[1px] border-gray-200 rounded-lg h-[50px] w-full pl-2 ${errors.lastname ? 'border-red-500' : ''}`}
                name="lastname"
                value={userData.lastname}
                onChange={handleChange}
              />
              {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>}
            </div>
          </div>

          <div className="lg:flex gap-6 mb-2">
            <div className="flex flex-col w-full">
              <label>Email Address</label>
              <input
                type="email"
                className={`border-[1px] border-gray-200 rounded-lg h-[50px] w-full pl-2 ${errors.email ? 'border-red-500' : ''}`}
                name="email"
                value={userData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="flex flex-col w-full">
              <label>Phone Number</label>
              <input
                type="text"
                className={`border-[1px] border-gray-200 rounded-lg h-[50px] w-full pl-2 ${errors.mobilenumber ? 'border-red-500' : ''}`}
                name="mobilenumber"
                value={userData.mobilenumber}
                onChange={handleChange}
              />
              {errors.mobilenumber && <p className="text-red-500 text-sm mt-1">{errors.mobilenumber}</p>}
            </div>
          </div>
          <div className="lg:flex gap-6 mb-2">
            <div className="flex flex-col w-full">
              <label>Password</label>
              <input
                type="password"
                className={`border-[1px] border-gray-200 rounded-lg h-[50px] w-full pl-2 ${errors.pass_word ? 'border-red-500' : ''}`}
                name="pass_word"
                value={userData.pass_word}
                onChange={handleChange}
              />
              {errors.pass_word && <p className="text-red-500 text-sm mt-1">{errors.pass_word}</p>}
            </div>
            <div className="flex flex-col w-full">
              <label>Gender</label>
              <div className="w-full gap-3 lg:gap-4 pt-4" style={{ display: 'flex' }}>
                <label className="flex justify-center gap-1 md:gap-2">
                  <input
                    type="radio"
                    className="font-[20px]"
                    id="radio-inline"
                    name="gender"
                    checked={userData.gender === 'Male'}
                    value="Male"
                    onChange={handleradioChange}
                  />{' '}
                  Male
                </label>
                <label className="flex justify-center gap-1 md:gap-2">
                  <input
                    type="radio"
                    id="radio-inline"
                    name="gender"
                    checked={userData.gender === 'Female'}
                    value="Female"
                    onChange={handleradioChange}
                  />{' '}
                  Female{' '}
                </label>
                <label className="flex justify-center gap-1 md:gap-2">
                  <input
                    type="radio"
                    id="radio-inline"
                    name="gender"
                    checked={userData.gender === 'Other'}
                    value="Other"
                    onChange={handleradioChange}
                  />{' '}
                  Other{' '}
                </label>
              </div>
            </div>
          </div>

          <div className="lg:flex gap-6 mb-2">
            <div className="flex flex-col w-full">
              <label>Address</label>
              <textarea
                className="border-[1px] border-gray-200 rounded-lg h-[50px] w-full pl-2"
                name="address"
                value={userData.address}
                onChange={handleTextareaChange} // Use a different handler for textarea
              />
            </div>
            <div className="flex flex-col w-full">
              <label>Social Media link</label>
              <input
                type="text"
                className="border-[1px] border-gray-200 rounded-lg h-[50px] w-full pl-2"
                name="socialmedialink"
                value={userData.socialmedialink}
                onChange={handleChange} // Make sure it's bound to the state
              />
            </div>
          </div>
          <div className="lg:flex gap-6 ">
            <div className="flex flex-col w-full">
              <label htmlFor="currency">Currency</label>
              <select
                id="currency"
                className="border-[1px] border-gray-200 rounded-lg h-[50px] w-full mr-4 text-gray-500 pl-2"
                name="defaultcurrency"
                value={userData.defaultcurrency}
                onChange={handleSelectChange}
              >
                <option disabled> Currency type</option>
                <option>USD</option>
                <option>CAD</option>
                <option>Other</option>
              </select>
            </div>
            <div className="flex flex-col w-full mb-2">
              <label htmlFor="language">Language</label>
              <select
                id="language"
                className="text-gray-500 mr-4 border-[1px] border-gray-200 rounded-lg h-[50px] w-full pl-2"
                name="defaultlanguage"
                value={userData.defaultlanguage}
                onChange={handleSelectChange}
              >
                <option disabled> Language</option>
                <option>Tamil</option>
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>
          </div>
        </div>
        <div className="lg:flex gap-6 ">
          <div className="flex flex-col w-full ">
            <label htmlFor="role" className="">
              Select Role
            </label>
            <select
              id={userData.roleid}
              placeholder="select one"
              className="border-[1px] border-gray-200 rounded-lg h-[50px] w-full grid grid-cols-1 pl-2 text-[#7987a1] px-3"
              name="rolename"
              value={userData.rolename}
              onChange={handleSelectChange}
            >
              <option disabled>Select your category</option>
              <option value="Admin" >Admin</option>
              <option value="User">User</option>
              <option value="Hr">Hr</option>
              
            </select>
            {/* <label htmlFor="role" className="">
          Select Role
        </label>
        <select
          id="role"
          placeholder="select one"
          className="border-[1px] border-gray-200 rounded-lg h-[50px] w-full grid grid-cols-1 pl-2 text-[#7987a1] px-3"
          name="rolename"
          value={userData.rolename}
          onChange={handleSelectChange}
        >
          <option disabled>Select your category</option>
          {roleOptions.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select> */}
          </div>
          <div className="flex flex-col w-full mb-2">
            <label htmlFor="country">Country</label>
            <select
              id="country"
              className="text-gray-500 mr-4 border-[1px] border-gray-200 rounded-lg h-[50px] w-full pl-2"
              name="country"
              value={userData.country}
              onChange={handleSelectChange}
            >
              <option>India</option>
              <option>others</option>
              <option></option>
            </select>
          </div>
        </div>

        <div className="flex justify-center pt-3">
          <button className="bg-[hsl(180,82%,35%)] text-white py-3 px-4 rounded-lg hover:bg-yellow-400" type="submit">
            <FontAwesomeIcon icon={faUserPlus} /> Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
