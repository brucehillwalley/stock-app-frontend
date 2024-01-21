import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../styles/globalStyles";
import { TextField } from "@mui/material";
import useStockCalls from "../service/useStockCalls";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SaleModal({ open, handleClose, info, setInfo }) {
  const { postStock, putStock } = useStockCalls();
  const { products, brands } = useSelector((state) => state.stock);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    //! target yani textfield name  API deki property ile eşleştirilmeli. Aynı ise id de kullanılabilirdi.
    setInfo({
      ...info,
      [name]: value,
      //   [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (info._id) {
      putStock("sales", info);
    } else {
      postStock("sales", info);
    }

    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component="form"
            onSubmit={handleSubmit}
          >
            <FormControl>
              <InputLabel variant="outlined" id="brand-select-label">
                Brand
              </InputLabel>
              <Select
                labelId="brand-select-label"
                id="brand-select"
                name="brandId"
                value={info?.brandId?._id || info?.brandId}
                label="Brand"
                onChange={handleChange}
                required
              >
                <MenuItem onClick={() => navigate("/stock/brands/")}>
                  Add New Brand
                </MenuItem>
                <hr />
                {brands?.map((item) => (
                  <MenuItem key={item._id} value={item._id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl>
              <InputLabel variant="outlined" id="product-select-label">
                Product
              </InputLabel>
              <Select
                labelId="product-select-label"
                id="product-select"
                name="productId"
                value={info?.productId?._id || info?.productId}
                label="Product"
                onChange={handleChange}
                required
              >
                <MenuItem onClick={() => navigate("/stock/products/")}>
                  Add New Product
                </MenuItem>
                <hr />
                {products?.map((item) => (
                  <MenuItem key={item._id} value={item._id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Quantity"
              name="quantity"
              id="quantity"
              type="number"
              variant="outlined"
              InputProps={{ inputProps: { min: 0 } }}
              value={info?.quantity}
              onChange={handleChange}
              required
            />

            <TextField
              label="Price"
              name="price"
              id="price"
              type="number"
              variant="outlined"
              InputProps={{ inputProps: { min: 0 } }}
              value={info?.price}
              onChange={handleChange}
              required
            />

            <Button variant="contained" type="submit" size="large">
              {info?._id ? "Update Sale" : "Add New Sale"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
