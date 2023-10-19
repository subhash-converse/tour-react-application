import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import FileOpenOutlinedIcon from "@mui/icons-material/FileOpenOutlined";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper, { PaperProps } from "@mui/material/Paper";
import Draggable from "react-draggable";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import Addjobvacancy from "./AddJob";



interface VacancyTableProps {
  entries: number;
  datas: any;
}

function PaperComponent(props: PaperProps) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

const VacancyTable: React.FC<VacancyTableProps> = (props) => {
  const [mainDuties, setMainDuties] = React.useState<number | null>(null);
  const [mainDutiesValue, setmainDutiesValue] = React.useState("")
  const [experience, setExperience] = React.useState(false);
  const [experienceValue, setexperienceValue] = React.useState("")
  const [deleteRow, setDeleteRow] = React.useState<number | null>(null);
  const [afterDeleted, setAfterDeleted] = React.useState(props.datas);



  

  const mainDutiesClickOpen = (row: number, val: any) => {
    setMainDuties(row);
    setmainDutiesValue(changeFormatMain(val))
  };

  const mainDutiesClickClose = () => {
    setMainDuties(null);
  };

  const changeFormatMain = (val:any) => {
    let text = val
    .replace(/<p>/g, '')
    .replace(/<\/p>/g, '\n')
    .replace(/<br>/g, '\n')
    .replace(/<.*?>/g, ''); 

  return text;
  }

  const experienceClickOpen = (val: any) => {
    setExperience(true);
    setexperienceValue(changeFormatMain(val));
  };

  const experienceClickClose = () => {
    setExperience(false);
  };

  const deleteClickOpen = (row: number) => {
    setDeleteRow(row);
    console.log(row)
  };

  const deleteClickClose = () => {
    setDeleteRow(null);
  };

  const deleteConfirm = (row: number) => {
    var candidateData;
    if (row) {
      let obj = props.datas.map((singleObj: any) => singleObj.id);
      let len = obj.length;
      for (let i = 0; i < len; i++) {
        let dataId = obj[i];

        if (dataId == row) {
          candidateData = props.datas.splice(i, 1);
          setAfterDeleted(props.datas)
        }
      }
      deleteClickClose();
    }
  };


  return (
    <div className="">
      <table className="w-full table">
        <thead>
          <tr className=" bg-white sticky top-0">
            <th>ID</th>
            <th>OPENINGS</th>
            <th>DEPARTMENT</th>
            <th>PUBLISH DATE</th>
            <th>LOCATION</th>
            <th>MAIN DUTIES</th>
            <th>EXPERIENCE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {props.datas.map((Vacancy: any) => (
            <tr key={Vacancy.id}>
              <td>{Vacancy.id}</td>
              <td>{Vacancy.openings}</td>
              <td>{Vacancy.department}</td>
              <td>{Vacancy.publishDate}</td>
              <td>{Vacancy.location}</td>
              <td>
                <div className=" tb-icon">
                  <FileOpenOutlinedIcon
                    className=" tb-icon action-buttons"
                    onClick={() => {
                      mainDutiesClickOpen(Vacancy.id, Vacancy.mainDuties);
                    }}
                  />
                </div>
              </td>
              <td>
                <div className=" tb-icon">
                  <FileOpenOutlinedIcon
                    className=" tb-icon action-buttons"
                    onClick={() => { experienceClickOpen(Vacancy.experience) }}
                  />
                </div>
              </td>
              <td>
                <div className="action-buttons">
                  <Link to={`/Addvacancy/${Vacancy.id}`}>
                    <FontAwesomeIcon icon={faPenToSquare} className="tb-icon"
                    />
                  </Link>
                  <BackspaceOutlinedIcon
                    className="tb-icon"
                    onClick={() => {
                      deleteClickOpen(Vacancy.id);
                    }}
                  />
                  
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Main Duties Dialog */}
      <Dialog
        open={mainDuties !== null}
        onClose={mainDutiesClickClose}
        PaperComponent={(props) => (
          <PaperComponent
            {...props}
            style={{ width: '400px', height: '300px' }} // Adjust the width and height as needed
          />
        )}

        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Main Duties
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {mainDutiesValue}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={mainDutiesClickClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Experience Dialog */}
      <Dialog
        open={experience}
        onClose={experienceClickClose}
        PaperComponent={(props) => (
          <PaperComponent
            {...props}
            style={{ width: '400px', height: '300px' }} // Adjust the width and height as needed
          />
        )}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Experience
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {experienceValue}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={experienceClickClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog
        open={deleteRow !== null}
        onClose={deleteClickClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Delete
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you want to delete this row?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => deleteConfirm(deleteRow!)}
          >
            Confirm
          </Button>
          <Button onClick={deleteClickClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default VacancyTable;
