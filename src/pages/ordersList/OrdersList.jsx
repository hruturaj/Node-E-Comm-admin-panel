import "./ordersList.css";
import {
  DataGrid,
  GridToolbarExport,
  GridToolbarContainer,
  GridToolbar,
} from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../redux/apiCalls";
import { getOrders } from "../../redux/apiCalls";
import { format } from "timeago.js";

export default function OrdersList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.allUsers);
  const orders = useSelector((state) => state.order.orders);
  useEffect(() => {
    getOrders(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "username",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        let user = users.find((user) => user._id === params.row.userId);
        return <div className="orderListItem">{user.username}</div>;
      },
    },

    {
      field: "products",
      headerName: "Product Quantity",
      width: 200,
      renderCell: (params) => {
        let prodQuantity = 0;

        params.row.products.forEach(
          (product) => (prodQuantity += parseInt(product.quantity))
        );

        return <div className="orderListItem">{prodQuantity}</div>;
      },
    },
    {
      field: "amount",
      headerName: "Total Amount",
      width: 200,
    },
    {
      field: "createAt",
      headerName: "Created At",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListCreatedAt">
            {format(params.row.createdAt)}
          </div>
        );
      },
    },
    { field: "status", headerName: "Status", width: 200 },
    // {
    //   field: "action",
    //   headerName: "Action",
    //   width: 150,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <Link to={"/product/" + params.row._id}>
    //           <button className="orderListEdit">Edit</button>
    //         </Link>
    //         <DeleteOutline
    //           className="orderListDelete"
    //           onClick={() => handleDelete(params.row._id)}
    //         />
    //       </>
    //     );
    //   },
    // },
  ];

  function MyExportButton() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  return (
    <div className="orderList">
      <div className="productTitleContainer" style={{ margin: "10px" }}>
        <h1 className="productTitle">Orders Listing</h1>
      </div>
      <DataGrid
        rows={orders}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
}
