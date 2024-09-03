import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2)
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1)
  }
}));

function BootstrapDialogTitle(props) {
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
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired
};

export default function Carousel_Rule_Modals() {
  const [open, setOpen, setFocusedModal] = React.useState(false);
  const [focusModal, setFocusedModal] = useState(null);
  const handleClickOpen = (item) => {
    setOpen(true);
    setFocusedModal(item);
  };
  const handleClose = () => {
    setOpen(false);
    setFocusedModal(null);
  };

  return (
    <React.Fragment>
      {carouselDataRules.map((item) => (
        <div>
          <Button key={item.id} variant="outlined" onClick={handleClickOpen}>
            {item.title}
          </Button>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title "
              onClose={handleClose}
            >
              <Typography variant="overline" display="block">
                {item.title}
              </Typography>
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <Typography variant="body1" gutterBottom>
                {item.description}
                <br />
                {item.short_desc}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Severity:
                <Stack direction="row" spacing={1}>
                  <Chip
                    label={item.severity}
                    variant="outlined"
                    color="error"
                  />
                </Stack>
              </Typography>
              <br />
              <Typography variant="body2" gutterBottom>
                {item.resolution}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                Close
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </div>
      ))}
    </React.Fragment>
  );
}
