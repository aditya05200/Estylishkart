import React, { useState, useEffect } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Paper,
} from "@mui/material";
import axios from "axios";

const Coupon = () => {
  const [coupons, setCoupons] = useState([]); // State for coupons
  const [newCoupon, setNewCoupon] = useState({
    code: "",
    discount: "",
    validFrom: "",
    validUntil: "",
    usageLimit: "",
  }); // State for new coupon

  useEffect(() => {
    // Fetch coupons from the backend on component mount
    fetchCoupons();
  }, []);

  const fetchCoupons = async () => {
    try {
      const response = await axios.get("http://localhost:5454/api/coupons");
      setCoupons(response.data.coupons);
    } catch (error) {
      console.error("Error fetching coupons", error);
    }
  };

  // Handle input change for adding a new coupon
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCoupon((prev) => ({ ...prev, [name]: value }));
  };

  // Add a new coupon by sending a request to the backend
  const handleAddCoupon = async () => {
    if (
      !newCoupon.code ||
      !newCoupon.discount ||
      !newCoupon.validFrom ||
      !newCoupon.validUntil ||
      !newCoupon.usageLimit
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const couponData = {
      code: newCoupon.code,
      discountPercentage: newCoupon.discount,
      validFrom: new Date(newCoupon.validFrom),
      validUntil: new Date(newCoupon.validUntil),
      usageLimit: newCoupon.usageLimit,
    };

    try {
      const response = await axios.post(
        "http://localhost:5454/api/coupons",
        couponData
      );

      // Add the new coupon to the state and reset the form
      setCoupons((prev) => [...prev, response.data.coupon]);
      setNewCoupon({
        code: "",
        discount: "",
        validFrom: "",
        validUntil: "",
        usageLimit: "",
      });
    } catch (error) {
      console.error("Error adding coupon", error);
      alert("Error creating coupon.");
    }
  };

  // Delete a coupon by sending a request to the backend
  const handleDeleteCoupon = async (id) => {
    try {
      await axios.delete(`http://localhost:5454/api/coupons/${id}`);

      // Remove the coupon from the state
      setCoupons((prev) => prev.filter((coupon) => coupon._id !== id));
    } catch (error) {
      console.error("Error deleting coupon", error);
      alert("Error deleting coupon.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Coupon Management</h1>

      {/* Form to Add a New Coupon */}
      <div style={{ marginBottom: "20px" }}>
        <TextField
          label="Coupon Code"
          name="code"
          value={newCoupon.code}
          onChange={handleInputChange}
          style={{ marginRight: "10px" }}
        />
        <TextField
          label="Discount (%)"
          name="discount"
          type="number"
          value={newCoupon.discount}
          onChange={handleInputChange}
          style={{ marginRight: "10px" }}
        />
        <TextField
          label="Valid From"
          name="validFrom"
          type="date"
          value={newCoupon.validFrom}
          onChange={handleInputChange}
          style={{ marginRight: "10px" }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Valid Until"
          name="validUntil"
          type="date"
          value={newCoupon.validUntil}
          onChange={handleInputChange}
          style={{ marginRight: "10px" }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Usage Limit"
          name="usageLimit"
          type="number"
          value={newCoupon.usageLimit}
          onChange={handleInputChange}
          style={{ marginRight: "10px" }}
        />
        <Button variant="contained" color="primary" onClick={handleAddCoupon}>
          Add Coupon
        </Button>
      </div>

      {/* List of Coupons */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Code</TableCell>
              <TableCell>Discount (%)</TableCell>
              <TableCell>Valid From</TableCell>
              <TableCell>Valid Until</TableCell>
              <TableCell>Usage Limit</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coupons.map((coupon) => (
              <TableRow key={coupon._id}>
                <TableCell>{coupon.code}</TableCell>
                <TableCell>{coupon.discountPercentage}</TableCell>
                <TableCell>
                  {new Date(coupon.validFrom).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {new Date(coupon.validUntil).toLocaleDateString()}
                </TableCell>
                <TableCell>{coupon.usageLimit}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleDeleteCoupon(coupon._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Coupon;
