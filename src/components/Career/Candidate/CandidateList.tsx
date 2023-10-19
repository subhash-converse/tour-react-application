import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileExport
} from "@fortawesome/free-solid-svg-icons";
import CandidateTable from "./CandidateTable";
import Candidatelists from "../../../Mock/Candidatelists";
import Pagination from 'rc-pagination';
import { Link } from "react-router-dom";


const Candidatelist = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(Candidatelists);
  const [perPage] = useState(10);
  const [size, setSize] = useState(10);
  const [current, setCurrent] = useState(1);
  const PerPageChange = (value: any) => {
    setSize(value);
    const newPerPage = Math.ceil(data.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  }

  const getData = (current: any, pageSize: any) => {
    // Normally you should get the data from the server
    return data.slice((current - 1) * pageSize, current * pageSize);
  };

  const PaginationChange = (page: any, pageSize: any) => {
    setCurrent(page);
    setSize(pageSize)
  }

  const PrevNextArrow = (current: any, type: any, originalElement: any) => {
    if (type === 'prev') {
      return <button><i className="fa fa-angle-double-left"></i></button>;
    }
    if (type === 'next') {
      return <button><i className="fa fa-angle-double-right"></i></button>;
    }
    return originalElement;
  }

  const handleChange = (e: any) => {
    const value = e.target.value;
    setSearchText(value);
    filterData(value);
  };

  const filterData = (value: any) => {
    const lowercasedValue = (value.trim()).toLowerCase();
    if (lowercasedValue === "") {
      setData(Candidatelists);
    } else {
      const filteredData = Candidatelists.filter((item) => {
        // Use '===' for equality comparison, and return the item or null if it doesn't match
        // console.log(item)
        let loweritem = (item.jobtitle).toLowerCase();
        return loweritem.startsWith(lowercasedValue) ||
          loweritem.toLowerCase === lowercasedValue
          ? item
          : null;
      });


      setData(filteredData); // Remove null values
    }
  };
  // console.log(data)
  return (
    <div className="">
      {/* title, add candidate button */}
      <div className="w-full flex flex-col mb-[15px] items-center md:flex-row md:justify-between">
        <div className="text-[#029e9d] text-sm">
          <Link to="#" className="anchor-tag">
            Dashboard
          </Link>
          {" "}
          /
          {" "}
          <Link to="/">
            Candidate
          </Link>
          {" "}
          /
          {" "}
          <Link to="/" className="text-[#7987a1]">
            Candidate List
          </Link>
        </div>

        <div className="mt-[10px] md:mt-0">
          <button className="Export-button">
            <span>
              <FontAwesomeIcon icon={faFileExport} />
            </span>
            <span className="pl-[10px]">Export</span>
          </button>
        </div>
      </div>

      {/* input fields */}
      <div className="shadows p-[24px] mb-4 xl:flex lg:items-center bg-white">
        <div className="flex flex-col gap-y-7 mt-3 md:flex-row justify-evenly gap-x-6 lg:mt-0 w-full">
          <input
            type="text"
            placeholder="Search by category title"
            className="border-[1px] w-[full] border-gray-200 rounded-lg outline-none px-[12px] h-12 md:w-[80%]"
            value={searchText}
            onChange={handleChange}
          />
          <div className="border-[1px] w-full border-gray-200 rounded-lg px-[10px] h-12 md:w-[20%]">
            <select
              name="category"
              id="category"
              className="outline-none bg-white text-[#7987AD] w-full h-11 flex items-center"
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

      {/* candidate table */}
      <div className="hide-scroll shadows max-h-[496px] min-h-[496px]  overflow-x-scroll p-[24px] pt-0 bg-white mb-[15px]">
        <CandidateTable
          entries={perPage}
          datas={getData(current, size)}
        />
      </div>

      {/* pagination */}
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

export default Candidatelist;
