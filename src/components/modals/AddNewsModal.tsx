import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box, InputLabel, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";
import { crossIcon, imgFrame, plusIcon } from "../../assets/icons/indext";
import {
  db,
  imagesRef,
  spaceRef,
  storage,
} from "../../database/firebaseConfig";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore/lite";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function Title(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.primary.main,
          }}
        >
          <img src={crossIcon} alt="cross" />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

interface TAddNewsModal {
  open: boolean;
  handleClose: () => void;
}
export default function AddNewsModal({ open, handleClose }: TAddNewsModal) {
  const [isProfile, setIsProfile] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [subTitle, setSubTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState({
    imgFrame: imgFrame,
    file: "",
    uri: "",
  });
  //   const [imageLink, setImageLink] = React.useState("");
  //   const [file, setFile] = React.useState("");

  const addNews = async () => {
    // Add a new document in collection "news"
    // uploadImage(image.file)
    await addDoc(collection(db, "news"), {
      title,
      subTitle,
      description,
      image: imageLink,
    })
      .then(() => window.location.reload())
      .catch((e) => alert(e));
  };

  const handleUserProfile = () => {
    setIsProfile(!isProfile);
  };

  const handleChange = (e: any) => {
    let link = URL.createObjectURL(e.target.files[0]);
    setImage({ ...image, imgFrame: link });
    console.log(image.imgFrame);
  };
  
  React.useEffect(() => {
	
  }, [image.imgFrame])
  

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      sx={{ borderRadius: "24px" }}
      className="newsDialog"
    >
      <Title id="customized-dialog-title" onClose={handleClose}>
        Add News
      </Title>
      <DialogContent>
        <InputLabel className="title" sx={{ mb: "5px" }}>
          Add Illustration
        </InputLabel>
        <div>
          <img src={image.imgFrame} alt="img-fram" width={"100%"} />
          <input type={"file"} style={{}} onChange={handleChange} />
        </div>
        <InputLabel className="title">Title</InputLabel>
        <TextField
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          name="title"
          placeholder="Enter title here"
        />
        <InputLabel className="title">Subtitle</InputLabel>
        <TextField
          onChange={(e) => {
            setSubTitle(e.target.value);
          }}
          name="subtitle"
          placeholder="Enter subtitle here"
        />

        <span className="title">Description</span>
        <TextField
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          name="description"
          placeholder="Enter description here"
          rows={4}
          multiline
        />
        {isProfile ? (
          <>
            <InputLabel className="title">Username</InputLabel>
            <TextField name="subtitle" placeholder="Enter username here" />
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <img src={plusIcon} alt="plus" />
            <Button
              color="secondary"
              variant="text"
              onClick={handleUserProfile}
            >
              Add user profile
            </Button>
          </Box>
        )}
      </DialogContent>

      <div className="addNewsBtn">
        <Button onClick={addNews} fullWidth>
          Add News
        </Button>
      </div>
    </BootstrapDialog>
  );
}
