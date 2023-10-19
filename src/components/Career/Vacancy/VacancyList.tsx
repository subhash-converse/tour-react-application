import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "rc-pagination";
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Vacancylists from "../../../Mock/Vacancylists";
import Vacancytable from "./VacancyTable";

const Vacancylist = () => {
  const [entries] = React.useState(10);
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(Vacancylists);
  const [searchDepartment, setSearchDepartment] = useState("Show Entries");
  const [searchLocation, setsearchLocation] = useState("");
  const [perPage] = useState(10);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);

  const handleDepartment = (e: any) => {
    const value = e.target.value;
    console.log(value);
    setSearchDepartment(value);
    filterDepartment(value);
  };

  const filterDepartment = (value: any) => {
    const Department = value.trim();
    if (Department === "") {
      setData(Vacancylists);
    } else {
      let filteredDepart = Vacancylists.filter((item) => {
        return item.department.startsWith(Department) ||
          item.department === Department
          ? item
          : null;
      });

      setData(filteredDepart);
    }
  };

  const handleChange = (e: any) => {
    const value = e.target.value;
    setSearchText(value);
    filterData(value);
  };

  const filterData = (value: any) => {
    const lowercasedValue = value.trim().toLowerCase();
    if (lowercasedValue === "") {
      setData(Vacancylists);
    } else {
      const filteredData = Vacancylists.filter((item) => {
        let loweritem = item.openings.toLowerCase();
        return loweritem.startsWith(lowercasedValue) ||
          loweritem === lowercasedValue
          ? item
          : null;
      });
      setData(filteredData);
    }
  };

  const handleLocation = (e: any) => {
    const value = e.target.value;
    setsearchLocation(value);
    filterLocation(value);
  };

  const filterLocation = (value: any) => {
    const Location = value.trim();
    if (Location === "") {
      setData(data);
    } else {
      let filteredLocation = data.filter((item) => {
        return item.location.startsWith(Location) || item.location === Location
          ? item
          : null;
      });

      setData(filteredLocation);
    }
  };
  const PerPageChange = (value: any) => {
    setSize(value);
    const newPerPage = Math.ceil(data.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  const getData = (current: any, pageSize: any) => {
    return data.slice((current - 1) * pageSize, current * pageSize);
  };

  const PaginationChange = (page: any, pageSize: any) => {
    setCurrent(page);
    setSize(pageSize);
  };

  const PrevNextArrow = (current: any, type: any, originalElement: any) => {
    if (type === "prev") {
      return (
        <button>
          <i className="fa fa-angle-double-left"></i>
        </button>
      );
    }
    if (type === "next") {
      return (
        <button>
          <i className="fa fa-angle-double-right"></i>
        </button>
      );
    }
    return originalElement;
  };




  return (
    <div className="">
      {/* title,add candidate button */}

      <div className="w-full flex flex-col mb-[15px] items-center md:flex-row md:justify-between">
        <div className="text-[#029e9d] text-sm">
          <Link to="#" className="anchor-tag">
            Dashboard
          </Link>{" "}
          / <Link to="/">Candidate</Link> /{" "}
          <Link to="Vacancylist" className="text-[#7987a1]">
            {" "}
            Vacancy List
          </Link>
        </div>

        <div className="">
          <button className="Export-button mt-3 md:mt-0">
            <Link to="/addvacancy">
              <span className="pr-[10px]">
                <FontAwesomeIcon icon={faPlus} />
              </span>{" "}
              Add A Job
            </Link>
          </button>
        </div>
      </div>

      {/* input fields */}

      <div className="shadows  px-[30px] py-[24px] mb-4   lg:items-center lg:justify-end bg-white">
        <div className="flex flex-col  gap-y-7 mt-3 xl:flex-row md:justify-between gap-x-7 lg:mt-0 w-full">
          <input
            type="text"
            placeholder="Search by job Openings"
            className="border-[1px] w-[full] border-gray-200  rounded-lg outline-none px-[10px] h-12 md xl:w-[60%]"
            value={searchText}
            onChange={handleChange}
          />
          <div className="flex flex-col gap-y-6 md:flex-row gap-x-6 justify-stretch xl:w-[40%]">
            <div className="border-[1px] w-full border-gray-200 rounded-lg px-[10px] h-12 ">
              <select
                name="catogory"
                id="catogory"
                className="drop-down outline-none bg-white text-[#7987AD] w-full h-11 flex items-cente"
                value={searchDepartment}
                onChange={handleDepartment}
              >
                <option value="" className="drop-option" selected disabled hidden>
                Choose Department 
                </option>
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

            <div className="border-[1px] w-full  border-gray-200 rounded-lg px-[10px] h-12 ">
              <select
                name="catogory"
                id="catogory"
                className="dropdown-bg outline-none bg-white text-[#7987AD] w-full h-11 flex items-center"
                value={searchLocation}
                onChange={handleLocation}
              >
                <option value="" className="drop-option" selected disabled hidden>
                Choose location 
                </option>
                <option value="location 1" className="drop-option">
                location 1
                </option>
                <option value="location 2" className="drop-option">
                location 2
                </option>
                <option value="location 3" className="drop-option">
                location 3
                </option>
              </select>
            </div>

            <div className="border-[1px] w-full  border-gray-200 rounded-lg px-[10px] h-12 ">
              <select
                name="catogory"
                id="catogory"
                className=" outline-none bg-white text-[#7987AD] w-full h-11 flex items-center"
                value={size}
                onChange={(e) => setSize(parseInt(e.target.value))}
              >
                <option value="10" className="drop-option">
                  10
                </option>
                <option value="20" className="drop-option">
                  20
                </option>
                <option value="30" className="drop-option">
                  30
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* candidate table */}
      <div className="hide-scroll shadows max-h-[496px] min-h-[496px] overflow-scroll xl:overflow-x-hidden p-[24px] pt-0 bg-white mb-[15px]">
        <Vacancytable entries={entries} datas={getData(current, size)} />
      </div>

      {/* pagenation */}
      <div className="w-full">
        <Pagination
          className="pagination-data"
          onChange={PaginationChange}
          total={data.length}
          current={current}
          pageSize={size}
          showSizeChanger={false}
          itemRender={PrevNextArrow}
          onShowSizeChange={PerPageChange}
        />
      </div>
    </div>
  );
};

export default Vacancylist;
