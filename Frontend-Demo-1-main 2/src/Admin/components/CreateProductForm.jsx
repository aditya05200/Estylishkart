import { useState } from "react";
import {
  Typography,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Fragment } from "react";
import axios from "axios";

const initialSizes = [{ name: "Free Size", quantity: 30 }];

const CreateProductForm = () => {
  const [productData, setProductData] = useState({
    imageUrl: "",
    imageALL: [],
    brand: "",
    title: "",
    colors: [],
    discountedPrice: "",
    price: "",
    discountPersent: "",
    sizes: [{ name: "Free Size", quantity: 30 }],
    quantity: "",
    topLavelCategory: "",
    secondLavelCategory: "",
    thirdLavelCategory: "",
    description: "",
  });

  const [newImageURL, setNewImageURL] = useState("");
  const [newColorName, setNewColorName] = useState("");
  const [loading, setLoading] = useState(false);
  const [newColorImageUrl, setNewColorImageUrl] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddColor = () => {
    console.log("Adding color:", newColorName, newColorImageUrl); // Log color data
    if (
      newColorName.trim() &&
      newColorImageUrl.trim() &&
      !productData.colors.some((c) => c.name === newColorName.trim())
    ) {
      setProductData((prevState) => {
        const updatedColors = [
          ...prevState.colors,
          { name: newColorName.trim(), imageUrl: newColorImageUrl.trim() },
        ];
        console.log("Updated colors:", updatedColors); // Log updated colors state
        return { ...prevState, colors: updatedColors }; // Correctly update 'colors'
      });
      setNewColorName("");
      setNewColorImageUrl("");
    }
  };

  const handleAddImage = () => {
    if (newImageURL.trim()) {
      setProductData((prevState) => ({
        ...prevState,
        imageALL: [...prevState.imageALL, newImageURL.trim()],
      }));
      setNewImageURL("");
    }
  };

  const handleAddSize = () => {
    setProductData((prevState) => ({
      ...prevState,
      sizes: [...prevState.sizes, { name: "", quantity: "" }],
    }));
  };

  const handleRemoveSize = (index) => {
    setProductData((prevState) => {
      const sizes = [...prevState.sizes];
      sizes.splice(index, 1);
      return { ...prevState, sizes };
    });
  };

  const handleSizeChange = (e, index) => {
    const { name, value } = e.target;
    setProductData((prevState) => {
      const sizes = [...prevState.sizes];
      if (sizes[index]) {
        // Ensure size exists
        sizes[index][name] = value;
      }
      return { ...prevState, sizes };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const requiredFields = [
      "title",
      "price",
      "quantity",
      "brand",
      "description",
      "topLavelCategory",
    ];

    for (const field of requiredFields) {
      if (!productData[field]?.trim()) {
        alert(`Please fill the ${field} field.`);
        return;
      }
    }

    const formattedData = {
      ...productData,
      sizes: productData.sizes.map((s) => ({
        name: s.name.trim(),
        quantity: parseInt(s.quantity, 10),
      })),
    };

    try {
      const response = await axios.post(
        "http://localhost:5454/api/admin/products",
        productData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Product added successfully:", response.data);
      setProductData({
        imageUrl: "",
        imageALL: [],
        brand: "",
        title: "",
        colors: [],
        discountedPrice: "",
        price: "",
        discountPersent: "",
        sizes: [{ name: "Free Size", quantity: 30 }],
        quantity: "",
        topLavelCategory: "",
        secondLavelCategory: "",
        thirdLavelCategory: "",
        description: "",
      });
    } catch (error) {
      const errorMsg = error.response?.data?.message || "An error occurred.";
      alert(errorMsg);
    }
    setLoading(false);
  };

  return (
    <Fragment>
      <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        className="py-10 text-center"
      >
        Add New Product
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="createProductContainer min-h-screen"
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              name="imageUrl"
              value={productData.imageUrl}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={productData.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Color Name"
              value={newColorName}
              onChange={(e) => setNewColorName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Color Image URL"
              value={newColorImageUrl}
              onChange={(e) => setNewColorImageUrl(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleAddColor} sx={{ mt: 1 }}>
              Add Color
            </Button>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Current Colors:{" "}
              {productData.colors.length
                ? productData.colors
                    .map((c) => `${c.name} (${c.imageUrl})`)
                    .join(", ")
                : "No colors added yet"}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Quantity"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discounted Price"
              name="discountedPrice"
              value={productData.discountedPrice}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discount Percentage"
              name="discountPersent"
              value={productData.discountPersent}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select
                name="topLavelCategory"
                value={productData.topLavelCategory}
                onChange={handleChange}
                label="Top Level Category"
              >
                <MenuItem value="men">Men</MenuItem>
                <MenuItem value="women">Women</MenuItem>
                <MenuItem value="kids">Kids</MenuItem>
                <MenuItem value="home_living">Home & living</MenuItem>
                <MenuItem value="beauty">Beauty</MenuItem>
                <MenuItem value="accessories">Accessories</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Second Level Category</InputLabel>
              <Select
                name="secondLavelCategory"
                value={productData.secondLavelCategory}
                onChange={handleChange}
                label="Second Level Category"
              >
                <MenuItem value="indian-fusion-wear">
                  Indian Fusion Wear
                </MenuItem>
                <MenuItem value="Western-Wear">Western Wear</MenuItem>
                <MenuItem value="lingerie-sleepwear">
                  Lingerie & Sleepwear
                </MenuItem>
                <MenuItem value="footwear">Footwear Women</MenuItem>
                <MenuItem value="Beauty-Personal-Care">
                  Beauty & Personal Care
                </MenuItem>
                <MenuItem value="Jewellery">Jewellery</MenuItem>
                <MenuItem value="Gadgets">Gadgets</MenuItem>
                <MenuItem value="sports-active-wear">
                  Sports & Active Wear
                </MenuItem>
                <MenuItem value="others">Others Women</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Third Level Category</InputLabel>
              <Select
                name="thirdLavelCategory"
                value={productData.thirdLavelCategory}
                onChange={handleChange}
                label="Third Level Category"
              >
                <MenuItem value="kurtas-suits">Kurta & Suits</MenuItem>
                <MenuItem value="kurtis-tunics-tops">
                  Kurtis, Tunics, Tops
                </MenuItem>
                <MenuItem value="sarees">Sarees</MenuItem>
                <MenuItem value="lengha-choli">Lehenga Choli</MenuItem>
                <MenuItem value="leggings-salwars-chudidars">
                  Leggings Salwars Chudidars
                </MenuItem>
                <MenuItem value="dress-materials">Dress Materials</MenuItem>
                <MenuItem value="lehenga-cholis-gowns">
                  Lehenga Cholis & Gowns
                </MenuItem>
                <MenuItem value="dresses-women">Women Dresses</MenuItem>
                <MenuItem value="tops">Tops</MenuItem>
                <MenuItem value="t-shirts-women">Women T-shirts</MenuItem>
                <MenuItem value="jeans-women">Women Jeans</MenuItem>
                <MenuItem value="shorts-skirts">Shorts & Skirts</MenuItem>
                <MenuItem value="bra">Bra</MenuItem>
                <MenuItem value="briefs-women">Briefs Women</MenuItem>
                <MenuItem value="shapewear-women">Women Shapewear</MenuItem>
                <MenuItem value="sleepwear-women">Women Sleepweaer</MenuItem>
                <MenuItem value="flats">Women Flats</MenuItem>
                <MenuItem value="casual-shoes-women">
                  Women Casual Shoes
                </MenuItem>
                <MenuItem value="heels-women">Heels</MenuItem>
                <MenuItem value="sports-shoes-women">
                  Women Sports Shoes
                </MenuItem>
                <MenuItem value="makeup">Makeup</MenuItem>
                <MenuItem value="skincare-women">Women Skincare</MenuItem>
                <MenuItem value="lipsticks">Lipsticks</MenuItem>
                <MenuItem value="fragrances-women">Women Fragrances</MenuItem>
                <MenuItem value="fashion-jwellery">Fashion Jwellery</MenuItem>
                <MenuItem value="fine-jewellery">Fine Jewellery</MenuItem>
                <MenuItem value="earings">Earings</MenuItem>
                <MenuItem value="smart-wearables">Smart Wearables</MenuItem>
                <MenuItem value="headphones">Headphones</MenuItem>
                <MenuItem value="speakers">Speakers</MenuItem>
                <MenuItem value="clothing-women-sports">
                  Women Sports Clothing
                </MenuItem>
                <MenuItem value="footwear-women-sports">
                  Women Sports Footwear
                </MenuItem>
                <MenuItem value="maternity-wear">Maternity Wear</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              multiline
              name="description"
              rows={3}
              value={productData.description}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Add Image URL to ImageALL"
              value={newImageURL}
              onChange={(e) => setNewImageURL(e.target.value)}
            />
            <Button variant="contained" onClick={handleAddImage} sx={{ mt: 1 }}>
              Add Image
            </Button>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Current ImageALL: {productData.imageALL.join(", ")}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Manage Sizes</Typography>
          </Grid>
          {productData.sizes.map((sizes, index) => (
            <Grid container item spacing={3} key={index}>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Size Name"
                  name="name"
                  value={sizes.name}
                  onChange={(e) => handleSizeChange(e, index)}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Quantity"
                  name="quantity"
                  type="number"
                  value={sizes.quantity}
                  onChange={(e) => handleSizeChange(e, index)}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleRemoveSize(index)}
                >
                  Remove Size
                </Button>
              </Grid>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleAddSize} sx={{ mt: 2 }}>
              Add Size
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              size="large"
              // type="submit"
              onClick={handleSubmit}
            >
              Add New Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};

export default CreateProductForm;
