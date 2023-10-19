import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import * as Yup from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Vacancylists from "../../../Mock/Vacancylists";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {Editor, EditorState} from 'draft-js';
import DraftEditor from "./DraftTool/Draft";


interface addJob {
  id: number;
  openings: string;
  department: string;
  location: string;
  publishDate: string;
  mainDuties: any;
  experience: any;
}

const Addjobvacancy = () => {
  const validationSchema = Yup.object().shape({
    Openings: Yup.string().required("Openings is required"),
    Department: Yup.string().required("Department is required"),
    location: Yup.string().required("location is required"),
    PublishedDate: Yup.string().required("PublishedDate is required"),
    MainDuties: Yup.string().required("MainDuties is required"),
    Experience: Yup.string().required("Experience is required"),
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState<any>({
  });
console.log(formData);
const myUrl2 = new URL(window.location.toLocaleString());
const editDataId = Number((myUrl2.pathname).split("/").pop());


useEffect(() => {
  if (editDataId) {
    setEditMode(true);
    console.log(editDataId)
    console.log(editMode)
  }
}, [editDataId]);

useEffect(() => {
  if (editDataId) {
    Vacancylists.forEach((a) => {
      if (a.id == editDataId) {
        setFormData(a);
      }
    });
  }
},[editDataId]);


  const handleOnChange = (event: any) => {
    let name = event.target.name;
    let value = event.target.value;
    let id = Vacancylists.length+1;
    let publishDateVal = new Date().toLocaleDateString();
    console.log(name);
    console.log(value)

    setFormData({ ...formData, [name]: value, id:id, publishDate: publishDateVal });
  };


  const submitHandler = (event: any) => {
    event.preventDefault();
    console.log(formData)
    Vacancylists.push(formData);
    alert('Submitted sucessfully')
  };

  const updateHandler = (event: any) => {
 

    event.preventDefault();
   const updateId = Vacancylists.findIndex(function(findObj){
   return findObj.id == editDataId
   })
  
   Vacancylists.splice(updateId,1,formData)
   alert('Updated sucessfully')
  }
  


  return (
    <div className="w-full">
      {/* Button */}
      <div className="w-full flex flex-col mb-[15px] items-center md:flex-row md:justify-between">
        <div className="text-[#029e9d] text-sm">
          <Link to="#" className="anchor-tag">
            Dashboard
          </Link>{" "}
          /{" "}
          <span className="text-[#7987a1]">
            {editMode ? "Update A Vacancy" : "Add A Vacancy"}{" "}
          </span>
        </div>

        <div className="">
          <button className="Export-button">
            <Link to="/vacancylist">
              <span>
                <FontAwesomeIcon icon={faArrowLeft} />
              </span>
              <span className="pl-[10px]">Back to List</span>
            </Link>
          </button>
        </div>
      </div>

      {/* Add candidate form */}
      <div className="py-4 add-vacancy-form px-[3.5rem]">
        <div className="mt-5">
          <span className="text-[1.25rem] font-bold">
            {editMode ? "Update A Vacancy" : "Add A Vacancy"}{" "}
          </span>
        </div>

        <form onSubmit={editMode? updateHandler:submitHandler}>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-x-10 gap-y-10 mt-10">
            <div className="flex flex-col w-full gap-2">
              <input
                type="text"
                id="openings"
                placeholder="Openings"
                required
                name="openings"
                value={formData.openings}
                className="border-[1px] px-3 w-full h-10 md:h-12 outline-none rounded-lg border-gray-200"
                onChange={handleOnChange}
              />
              <div className="invalid-feedback text-red-700 text-[12px]">
                <span className="absolute z-10">
                  {/* {errors.Openings?.message} */}
                </span>
              </div>
            </div>

            <div className="flex flex-col w-full gap-2">
              <div className="border-[1px] w-full  border-gray-200 rounded-lg px-[10px] h-12 ">
                <select
                  name="department"
                  id="department"
                  value={formData.department}
                  required
                  className=" outline-none bg-white text-[#7987AD] w-full h-11 flex items-center"
                  onChange={handleOnChange}
                >
                  <option value="">Select Department</option>
                  <option value="Department 1" className="drop-option">
                    Department 1
                  </option>
                  <option value="Department 2" className="drop-option">
                    Department 2
                  </option>
                  <option value="Department 3" className="drop-option">
                    Department 3
                  </option>
                </select>
              </div>
              <div className="invalid-feedback  text-red-700 text-[12px]">
                <span className="absolute z-10">
                  {/* {errors.Department?.message} */}
                </span>
              </div>
            </div>

            <div className="flex flex-col w-full gap-2">
              <div className="border-[1px] w-full  border-gray-200 rounded-lg px-[10px] h-12 ">
                <select
                  id="location"
                  required
                  name="location"
                  // {...register("location")}
                  value={formData.location}
                  className=" outline-none bg-white text-[#7987AD] w-full h-11 flex items-center"
                  onChange={handleOnChange}
                >
                  <option value="">Select location</option>
                  <option value="location 1" className="drop-optnpm install --save draft-js react react-domion">
                    location 1
                  </option>
                  <option value="location 2" className="drop-option">
                    location 2
                  </option>
                  <option value="Location 3" className="drop-option">
                    location 3
                  </option>
                </select>
              </div>
              <div className="invalid-feedback  text-red-700 text-[12px]">
                <span className="absolute z-10">
                  {/* {errors.location?.message} */}
                </span>
              </div>
            </div>

            <div className="flex flex-col w-full gap-2"></div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-7">
            <div className="flex flex-col w-full gap-2 ">
              <label htmlFor="MainDuties">Main Duties</label>
              <div className="p-[1px] min-h-[200px] xl:min-h-[340px]">
              <DraftEditor field = "mainDuties" id ={editDataId} data = {formData.mainDuties} formData={formData} setFormData={setFormData}/>
    </div>
            </div>

            <div className="flex flex-col w-full gap-2">
              <label htmlFor="Experience">Experience</label>
              <div className="p-[1px] min-h-[200px] xl:min-h-[340px]">
              <DraftEditor field = "experience" id ={editDataId} data = {formData.experience} formData={formData} setFormData={setFormData}/>

    </div>
            </div>
          </div>

          <div className="flex justify-center mt-9">
            <button type="submit" className="Export-button">
              <span className="text-[15px]">
                {editMode ? "Update" : "Submit"}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addjobvacancy;