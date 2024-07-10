import React, { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import axios from "axios";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Box,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Example = () => {
  const navi=useNavigate()
  const [data, setData] = useState([]);
  const [editingRow, setEditingRow] = useState(null);
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    ImageFile: "",
  });
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [Toast, setToastMessage] = useState("");
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://ecomm-react-server.vercel.app/api/v1/products"
        );
        setData(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [showToast]);

  const handleEdit = (row) => {
    setEditingRow(row.original);
    setIsEditDialogOpen(true);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    if (!token) {
      // console.error("No token found in localStorage");
      return;
    }
  
    try {
      const response = await axios.delete(
        "https://ecomm-react-server.vercel.app/api/v1/product/delete",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          data: { _id: id },
        }
      );
      
      // console.log("Deleted response:", response.data);
      setToastMessage(response.data.message);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2500);
    } catch (error) {
      console.error("Error deleting product:", error);
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
      }
    }
  };
  

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("id", editingRow._id);
      formData.append("category", editingRow.category);
      formData.append("description", editingRow.description);
      formData.append("price", editingRow.price);
      formData.append("title", editingRow.title);

      if (editingRow.ImageFile) {
        formData.append("ImageFile", editingRow.ImageFile);
      } else {
        formData.append("ImageUrl", editingRow.ImageUrl);
      }

      const response = await axios.put(
        "https://ecomm-react-server.vercel.app/api/v1/product/update",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer "+localStorage.getItem('token'),
          },
        }
      );

      // console.log("Here is the updated data from response:", response.data);
      setToastMessage(response.data.message);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2500);
      setIsEditDialogOpen(false);
      setEditingRow(null);
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const handleAdd = async () => {
   
    if (
      newProduct.title.length < 1 ||
      newProduct.ImageFile.length < 1 ||
      newProduct.price.length < 1 ||
      newProduct.category.length < 1 ||
      newProduct.description.length < 1
    ) {
      alert("fill all the details ");
      // setNewProduct({
      //   title: "",
      //   price: "",
      //   description: "",
      //   category: "",
      //   ImageFile: "",
      // });
      return;
    }
    const formData = new FormData();
    formData.append("title", newProduct.title);
    formData.append("ImageFile", newProduct.ImageFile);
    formData.append("price", newProduct.price);
    formData.append("category", newProduct.category);
    formData.append("description", newProduct.description);
    // console.log("the new product before added is : ", newProduct);
    try {
      const response = await axios.post(
        "https://ecomm-react-server.vercel.app/api/v1/UploadtoDb",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer "+localStorage.getItem('token'),
             
          },
        }
      );
      setToastMessage(response.data.message);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2500);

      // console.log("Add new product:", newProduct);
      setNewProduct({
        title: "",
        price: "",
        description: "",
        category: "",
        ImageFile: "",
      });
      setIsAddDialogOpen(false);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "title",
        header: "Title",
        size: 150,
      },
      {
        accessorKey: "price",
        header: "Price",
        size: 100,
      },
      {
        accessorKey: "description",
        header: "Description",
        size: 200,
        Cell: ({ cell }) => (
          <div style={{ maxHeight: "50px", overflowY: "scroll" }}>
            {cell.getValue()}
          </div>
        ),
      },
      {
        accessorKey: "category",
        header: "Category",
        size: 150,
      },
      {
        accessorKey: "ImageUrl",
        header: "Image",
        size: 150,
        Cell: ({ cell }) => (
          <img
            src={cell.getValue()}
            alt="Product"
            style={{ width: "50px", height: "50px" }}
          />
        ),
      },
      {
        accessorKey: "edit",
        header: "Edit",
        Cell: ({ row }) => (
          <Button variant="outlined" onClick={() => handleEdit(row)}>
            Edit
          </Button>
        ),
      },
      {
        accessorKey: "delete",
        header: "Delete",
        Cell: ({ row }) => (
          <Button
            variant="outlined"
            onClick={() => {
              let id = row.original._id;
              handleDelete(id);
            }}
          >
            Delete
          </Button>
        ),
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
  });

  return (
    <>
      <Box sx={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }}>
        <nav className="bg-gray-800 rounded-l-lg px-6 py-4 flex justify-between items-center">
          <h1 className="text-white text-xl font-bold">Ecom Admin Panel</h1>
          <div className="flex space-x-2">
            <button
              className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
              onClick={() => setIsAddDialogOpen(true)}
            >
              Add Product
            </button>
            <button className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-700" onClick={() => {
              localStorage.removeItem("token");
              setShowToast(true);
              setToastMessage("Logged Out Successfully");
              setTimeout(()=>{
                setShowToast(false);
              },3000);
              setTimeout(()=>{
                navi("/");
              },500)
            }}>
              Logout
            </button>
          </div>
        </nav>
        <Box sx={{ padding: 2 }}>
          <MaterialReactTable table={table} />
        </Box>
        <Dialog
          open={isEditDialogOpen}
          onClose={() => setIsEditDialogOpen(false)}
        >
          <DialogTitle>Edit Product</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              label="Title"
              type="text"
              fullWidth
              value={editingRow?.title || ""}
              onChange={(e) =>
                setEditingRow({ ...editingRow, title: e.target.value })
              }
            />
            <TextField
              margin="dense"
              label="Price"
              type="number"
              fullWidth
              value={editingRow?.price || ""}
              onChange={(e) =>
                setEditingRow({ ...editingRow, price: e.target.value })
              }
            />
            <TextField
              margin="dense"
              label="Description"
              type="text"
              fullWidth
              multiline
              rows={4}
              value={editingRow?.description || ""}
              onChange={(e) =>
                setEditingRow({ ...editingRow, description: e.target.value })
              }
            />

            <Select
              margin="dense"
              label="Category"
              fullWidth
              value={editingRow?.category || ""}
              onChange={(e) =>
                setEditingRow({ ...editingRow, category: e.target.value })
              }
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select a Category
              </MenuItem>
              <MenuItem value="MEN'S CLOTHING">MEN'S CLOTHING</MenuItem>
              <MenuItem value="JEWELERY">JEWELERY</MenuItem>
              <MenuItem value="ELECTRONICS">ELECTRONICS</MenuItem>
              <MenuItem value="WOMEN'S CLOTHING">WOMEN'S CLOTHING</MenuItem>
            </Select>
            <TextField
              margin="dense"
              type="file"
              fullWidth
              onChange={(e) =>
                setEditingRow({
                  ...editingRow,
                  ImageUrl: e.target.files[0],
                })
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={isAddDialogOpen}
          onClose={() => setIsAddDialogOpen(false)}
        >
          <DialogTitle>Add Product</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              label="Title"
              type="text"
              fullWidth
              value={newProduct.title}
              onChange={(e) =>
                setNewProduct({ ...newProduct, title: e.target.value })
              }
            />
            <TextField
              margin="dense"
              label="Price"
              type="number"
              fullWidth
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <TextField
              margin="dense"
              label="Description"
              type="text"
              fullWidth
              multiline
              rows={4}
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
            />
            <Select
              margin="dense"
              label="Category"
              fullWidth
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select a Category
              </MenuItem>
              <MenuItem value="MEN'S CLOTHING">MEN'S CLOTHING</MenuItem>
              <MenuItem value="JEWELERY">JEWELERY</MenuItem>
              <MenuItem value="ELECTRONICS">ELECTRONICS</MenuItem>
              <MenuItem value="WOMEN'S CLOTHING">WOMEN'S CLOTHING</MenuItem>
            </Select>

            <TextField
              margin="dense"
              type="file"
              fullWidth
              onChange={(e) =>
                setNewProduct({ ...newProduct, ImageFile: e.target.files[0] })
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleAdd}>Add</Button>
          </DialogActions>
        </Dialog>
      </Box>
      {showToast ? (
        <div
          id="toast-success"
          className="fixed inset-x-0 top-0 mx-auto mt-4 max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div className="flex items-center">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="sr-only">Check icon</span>
            </div>
            <div className="ms-3 text-sm font-normal">{Toast}</div>
            <button
              type="button"
              className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-success"
              aria-label="Close"
              onClick={() => {
                setShowToast(false);
              }}
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Example;
