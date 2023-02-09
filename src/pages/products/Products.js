import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { productRows } from "../../DummyData";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListProduct">
            <img
              className="productListImg"
              src={params.row.image}
              alt={params.row.name}
            />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              onClick={() => handleDelete(params.row.id)}
              className="productListDelete"
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="products">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default Products;
