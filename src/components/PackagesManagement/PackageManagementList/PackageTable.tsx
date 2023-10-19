import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import PackageLists from "../../../Mock/PackageLists";

interface table{
  entries:number,
  currentPage:number
}

const PackageTable = (props:table) => {

  return (
    <div className="">
      <table className="w-full">
        <tr className=" bg-white sticky top-0">
          <th className="">ID</th>
          <th>IMG</th>
          <th>TITLE</th>
          <th>CONTENT</th>
          <th>DURATION</th>
          <th>CITY</th>
          <th>COUNTRY</th>
          <th>AMOUNT</th>
          <th>OFFER</th>
          <th>OFFER DURATION</th>
          <th>PICKUP</th>
          <th>PICKUP TIME</th>
          <th>DROP LOCATION</th>
          <th>MIN MEMBERS</th>
          <th>MAX MEMBERS</th>
          <th>LANGUAGE FOR TOUR</th>
          <th>TOUR GUIDE NAME</th>
          <th>TOUR GUIDE IMAGE</th>
          <th>TOUR VIDEO</th>
          <th>ACTUAL AMOUNT</th>
          <th>CURRENT AMOUNT</th>
          {/* <th>INCLUDES</th>
          <th>DOESNOT INCLUDES</th>
          <th>GOOD TO KNOW</th>
          <th>QUESTIONS AND ANSWERS</th>
          <th>ASK ME A QUSTION</th>
          <th>ASKED QUESTIONS</th>
          <th>CREATE MY TRIP</th>
          <th>GUEST COUNT</th>
          <th>CURRENCY TYPE</th>
          <th>REVIEWS</th>
          <th>SCORE</th> */}
          <th>TAX</th>
          <th>ACTION</th>

        </tr>

        {PackageLists.slice((props.currentPage - 1) * props.entries, props.currentPage * props.entries).map((Package) => (
          <tr>
            <td>{Package.packagedetailsid}</td>
            <td>{Package.img}</td>
            <td>{Package.title}</td>
            <td>{Package.content}</td>
            <td>{Package.duration}</td>
            <td>{Package.city}</td>
            <td>{Package.country}</td>
            <td>{Package.amount}</td>
            <td>{Package.offer}</td>
            <td>{Package.offerduration}</td>
            <td>{Package.pickup}</td>
            {/* <td>{Package.pickuptime}</td>
            <td>{Package.droplocation}</td> */}
            <td>{Package.minmembers}</td>
            <td>{Package.maxmembers}</td>
            <td>{Package.languagefortour}</td>
            <td>{Package.tourguidename}</td>
            <td>{Package.tourguideimg}</td>
            <td>{Package.tourguidevideo}</td>
            <td>{Package.actualamount}</td>
            <td>{Package.currentamount}</td>
            {/* <td>{Package.includes}</td>
            <td>{Package.doesnotinclude}</td>
            <td>{Package.goodtoknow}</td>
            <td>{Package.questionsandanswers}</td>
            <td>{Package.ask_me_a_questuion}</td>
            <td>{Package.askedquestion}</td>
            <td>{Package.createmytrip}</td>
            <td>{Package.guestcount}</td>
            <td>{Package.currencytype}</td>
            <td>{Package.reviews}</td>
            <td>{Package.score}</td> */}
            <td>{Package.tax}</td>
            <td>
              <span className="action-buttons">
                <FontAwesomeIcon icon={faPenToSquare} className="tb-icon" />
                <BackspaceOutlinedIcon className="tb-icon" />
              </span>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default PackageTable;
