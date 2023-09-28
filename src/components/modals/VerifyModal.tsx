import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import { Box, Typography } from "@mui/material";
import {
  IdCard,
  crossIcon,
  imgFrame,
  userIcon,
} from "../../assets/icons/indext";
import styles from "../../styles/components/modal.module.scss";
import { setDoc, doc, deleteDoc } from "firebase/firestore/lite";
import { db } from "../../database/firebaseConfig";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

interface TVerifyTitle {
  title: string;
  desc: string;
}
const VerfiyTitle = ({ title, desc }: TVerifyTitle) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      <Typography className={styles.verifyTitle}>{title}</Typography>
      <Typography className={styles.verifyDesc}>{desc}</Typography>
    </Box>
  );
};

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
  handleImgModal: () => void;
  user: any;
}

export default function VerifyModal({
  open,
  handleClose,
  handleImgModal,
  user,
}: TAddNewsModal) {
  const [isProfile, setIsProfile] = React.useState(false);

  const handleUserProfile = () => {
    setIsProfile(!isProfile);
  };

  const handleImg = () => {
    handleImgModal();
    handleClose();
  };

  const acceptRequest = async () => {
    await setDoc(
      doc(db, "TrophyRequest", user.id),
      {
        ...user,
        trophy: "verified",
      },
      { merge: true }
    )
      .then(() => window.location.reload())
      .catch((e) => alert(e));
  };

  const delRequest = async () => {
    const userRef = doc(db, "TrophyRequest", user.id);

    // Set the "capital" field of the city 'DC'
    await deleteDoc(userRef)
      .then(() => window.location.reload())
      .catch((e) => alert(e));
  };

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      sx={{ borderRadius: "24px" }}
      className="newsDialog"
    >
      <Title id="customized-dialog-title" onClose={handleClose}></Title>

      <DialogContent>
        <div className={styles.userProfile}>
          <img
            src={user?.profilePicture}
            style={{
              width: 75,
              height: 75,
              borderRadius: 75 / 2,
            }}
            alt="verify-icon"
            width={67}
            height={67}
          />
          <Typography>{user?.name}</Typography>
          <Typography>{user?.email}</Typography>
        </div>
        <Box>
          <VerfiyTitle title="Username" desc={user?.username} />
          <VerfiyTitle title="Supporting" desc={user?.supporting} />
          <VerfiyTitle title="Phone number" desc={user?.phoneNumber} />
        </Box>

        <Box sx={{ mb: 1 }}>
          <Typography className={styles.verifyTitle}>Descriptions</Typography>
          <Typography className={styles.verifyDesc}>
            {user?.description}
          </Typography>
        </Box>

        <Box>
          <img
            src={user?.identification}
            alt="id1"
            onClick={handleImg}
            className="pointer"
            style={{
              width: "100%",
              height: 200,
              borderRadius: 20,
            }}
          />
          {/* <img src={IdCard} alt="id2" onClick={handleImg} className="pointer" /> */}
        </Box>
      </DialogContent>

      <div className="addNewsBtn">
        <Button onClick={acceptRequest} fullWidth>
          Verify Account
        </Button>
        <Button onClick={delRequest} fullWidth variant="text">
          Delete Request
        </Button>
      </div>
    </BootstrapDialog>
  );
}
