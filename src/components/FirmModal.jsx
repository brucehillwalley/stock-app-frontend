import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../styles/globalStyles";
import { TextField } from "@mui/material";
import { useState } from "react";

export default function FirmModal({ open, handleClose }) {
  const initialState = {
    name: "",
    phone: "",
    address: "",
    image: "",
  };
  const [info, setInfo] = useState({ initialState });

  const handleChange = (e) => {
    const { name, value } = e.target;
    //! target yani textfield name  API deki property ile eşleştirilmeli. Aynı ise id de kullanılabilirdi.
    setInfo({
      ...info,
      [name]: value,
      //   [e.target.name]: e.target.value,
    });
  };

  console.log(info);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Firm name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
            />
            <TextField
              label="Phone"
              name="phone"
              id="phone"
              type="tel"
              variant="outlined"
              value={info.phone}
              onChange={handleChange}
            />

            <TextField
              label="Address"
              name="address"
              id="address"
              type="text"
              variant="outlined"
              value={info.address}
              onChange={handleChange}
            />
            <TextField
              label="Image"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              value={info.image}
              onChange={handleChange}
            />

            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
