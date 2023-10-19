import { faLink, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import FileOpenOutlinedIcon from "@mui/icons-material/FileOpenOutlined";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper, { PaperProps } from "@mui/material/Paper";
import Draggable from "react-draggable";
import TextField from "@mui/material/TextField";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

interface table {
  entries: number;
  datas: any;
}

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const CandidateTable: React.FC<table> = (props) => {
  const [coverLetter, setCoverLetter] = React.useState<number | null>(null);
  // const [coverLetterValue, setCoverLetterValue] = React.useState("");
  const [cv, setCv] = React.useState<boolean>(false);
  const [cvValue, setCvValue] = React.useState("");
  const [otherFiles, setOtherFiles] = React.useState<boolean>(false);
  const [otherFilesValue, setOtherFilesValue] = React.useState("");
  const [edit, setEdit] = React.useState<boolean>(false);
  const [editValue, setEditValue] = React.useState(0);
  const [deleteRow, setDeleteRow] = React.useState<number | null>(null);
  const [afterDeleted, setAfterDeleted] = React.useState(props.datas);

  const Cover = [
    {
      uri: "https://calibre-ebook.com/downloads/demos/demo.docx",
      fileType: "docx",
      fileName: "demo.docx",
    },
  ];

  const coverLetterClickOpen = (row: number, val: string) => {
    setCoverLetter(row);
    // setCoverLetterValue(val);
  };

  const coverLetterClickClose = () => {
    setCoverLetter(null);
  };
  // cv
  const cvClickOpen = (val: string) => {
    setCv(true);
    setCvValue(val);
  };

  const cvClickClose = () => {
    setCv(false);
  };
  // other files
  const otherFilesClickOpen = (val: string) => {
    setOtherFiles(true);
    setOtherFilesValue(val);
  };

  const otherFilesClickClose = () => {
    setOtherFiles(false);
  };
  // edit
  const editClickOpen = (row: number) => {
    setEdit(true);
    setEditValue(row);
    console.log(row);
  };
  
  const editClickClose = () => {
    setEdit(false);
  };

  const editConfirm = (row: any) => {
    console.log(`Upadte this row with ID: ${row}`);
    editClickClose();
  };

  // delete
  const deleteClickOpen = (row: number) => {
    setDeleteRow(row);
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

        if (dataId === row) {
          candidateData = props.datas.splice(i, 1);
          setAfterDeleted(props.datas);
        }
      }
      deleteClickClose();
    }
  };

  return (
    <div>
      <table className="w-full table">
        <thead>
          <tr className="bg-white sticky top-0">
            <th>ID</th>
            <th>IMG</th>
            <th>DOB</th>
            <th>ADDRESS</th>
            <th>LINKEDIN URL</th>
            <th>MARITAL STATUS</th>
            <th>CURRENT JOB</th>
            <th>CURRENT COMPANY</th>
            <th>JOB TITLE</th>
            <th>SALARY</th>
            <th>EDUCATION</th>
            <th>COVER LETTER</th>
            <th>CV</th>
            <th>OTHER FILES</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {props.datas.map((candidate: any) => (
            <tr key={candidate.id}>
              <td>{candidate.id}</td>
              <td className="image-padding">
                <img
                  className="rounded-md"
                  src={candidate.img}
                  alt="user img"
                />
              </td>
              <td className="whitespace-nowrap">{candidate.dob}</td>
              <td>{candidate.address}</td>
              <td>
                <a href={candidate.linkedinurl} target="_blank">
                  <FontAwesomeIcon icon={faLink} className="tb-icon" />
                </a>
              </td>
              <td>{candidate.maritalstatus}</td>
              <td>{candidate.currentjob}</td>
              <td>{candidate.currentcompany}</td>
              <td>{candidate.jobtitle}</td>
              <td>{candidate.salary}</td>
              <td>{candidate.education}</td>
              <td>
                <div className="tb-icon">
                  <FileOpenOutlinedIcon
                    className="tb-icon action-buttons"
                    onClick={() => {
                      coverLetterClickOpen(candidate.id, candidate.coverLetter);
                    }}
                  />
                </div>
              </td>
              <td>
                <div className="tb-icon">
                  <FileOpenOutlinedIcon
                    className="tb-icon action-buttons"
                    onClick={() => {
                      cvClickOpen(candidate.cv);
                    }}
                  />
                </div>
              </td>
              <td>
                <div className="tb-icon">
                  <FileOpenOutlinedIcon
                    className="tb-icon action-buttons"
                    onClick={() => {
                      otherFilesClickOpen(candidate.otherFiles);
                    }}
                  />
                </div>
              </td>
              <td>
                <span className="action-buttons">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="tb-icon"
                    onClick={() => {
                      editClickOpen(candidate.id);
                    }}
                  />

                  <BackspaceOutlinedIcon
                    className="tb-icon"
                    onClick={() => {
                      deleteClickOpen(candidate.id);
                    }}
                  />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* cover letter dialog */}
      <Dialog
        open={coverLetter !== null}
        onClose={coverLetterClickClose}
        PaperComponent={(props) => (
          <PaperComponent
            {...props}
            style={{ width: "600px", height: "700px" }} // Adjust the width and height as needed
          />
        )}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogContent>
          <DocViewer
            documents={Cover}
            pluginRenderers={DocViewerRenderers}
            style={{ height: "600px", width: "" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={coverLetterClickClose}>Cancel</Button>
        </DialogActions>
      </Dialog>

      {/* cv dialog */}
      <Dialog
        open={cv}
        onClose={cvClickClose}
        PaperComponent={(props) => (
          <PaperComponent
            {...props}
            style={{ width: "600px", height: "700px" }}
          />
        )}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          CV
        </DialogTitle>
        <DialogContent>
          <DocViewer
            documents={Cover}
            pluginRenderers={DocViewerRenderers}
            style={{ height: "600px", width: "" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={cvClickClose}>Cancel</Button>
        </DialogActions>
      </Dialog>

      {/* other files dialodue */}
      <Dialog
        open={otherFiles}
        onClose={otherFilesClickClose}
        PaperComponent={(props) => (
          <PaperComponent
            {...props}
            style={{ width: "600px", height: "700px" }} // Adjust the width and height as needed
          />
        )}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          otherFiles
        </DialogTitle>
        <DialogContent>
          <DocViewer
            documents={Cover}
            pluginRenderers={DocViewerRenderers}
            style={{ height: "600px", width: "" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={otherFilesClickClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
      {/* edit Dialog */}
      <Dialog
        open={edit}
        onClose={editClickClose}
        PaperComponent={(props) => (
          <PaperComponent
            {...props}
            style={{ width: "600px", height: "800px" }} // Adjust the width and height as needed
          />
        )}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle
          style={{ cursor: "move", font: "10 px" }}
          id="draggable-dialog-title"
        >
          update
        </DialogTitle>
        <DialogContent>
          <TextField label="Image" fullWidth margin="normal" />
          <TextField label="DOB" fullWidth margin="normal" />
          <TextField label="Address" fullWidth margin="normal" />
          <TextField label="Linked In URL" fullWidth margin="normal" />
          <TextField label="Marital Status" fullWidth margin="normal" />
          <TextField label="Current Job" fullWidth margin="normal" />
          <TextField label="Current Job" fullWidth margin="normal" />
          <TextField label="Job Title" fullWidth margin="normal" />
          <TextField label="Salary" fullWidth margin="normal" />
          <TextField label="Education" fullWidth margin="normal" />
          <TextField label="COVER LETTER" fullWidth margin="normal" />
          <TextField label="CV" fullWidth margin="normal" />
          <TextField label="OTHER FILES" fullWidth margin="normal" />
        </DialogContent>
        <DialogActions>
          <Button onClick={editClickClose}>Update</Button>
          <Button onClick={editClickClose}>Cancel</Button>
        </DialogActions>
      </Dialog>

      {/* delete Dialog */}
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
          <DialogContentText>Do you want to delete this row?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => deleteConfirm(deleteRow!)}>Confirm</Button>
          <Button onClick={deleteClickClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CandidateTable;
