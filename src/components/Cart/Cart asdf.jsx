// import React from "react";
// import { Box, Button, Typography } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { selectCart } from "redux/cart/cartSelectors";
// import { delGoodFromCart, updateAmount } from "redux/cart/cartSlice";

// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import { CardTravelOutlined } from "@mui/icons-material";

// const columns = [
//   { id: "good", label: "Good", minWidth: 100 },
//   { id: "price", label: "Price", minWidth: 20 },
//   { id: "amount", label: "Amount", minWidth: 20, align: "right" },
// ];

// function createData(name, code, population, size) {
//   return { name, code, population, size };
// }

// export default function Cart() {
//   const dispatch = useDispatch();
//   const cart = useSelector(selectCart);
//   // const rows = [    createData('India', 'IN', 1324171354, 3287263),  ];

//   const handleDelete = (id) => {
//     dispatch(delGoodFromCart(id));
//   };

//   const handleIncreaseAmount = (good) => {
//     const newAmount = good.amount + 1;
//     dispatch(updateAmount({ id: good._id, newAmount }));
//   };

//   const handleDecreaseAmount = (good) => {
//     if (good.amount === 1) {
//       return;
//     }
//     const newAmount = good.amount - 1;
//     dispatch(updateAmount({ id: good._id, newAmount }));
//   };

//   return (
//     // <Box>
//     //   {cart.length === 0 ? (
//     //     <Typography>Your cart is empty. Add some goods to deliver!</Typography>
//     //   ) : (
//     //     cart.map((good) => (
//     //       <Box key={good._id} sx={{ border: "1px solid black", p: 1, m: 1 }}>
//     //         <Typography variant="h6">{good.productName}</Typography>
//     //         <Typography>{good.amount} </Typography>
//     //         <Button onClick={() => handleIncreaseAmount(good)}>+1</Button>
//     //         <Button onClick={() => handleDecreaseAmount(good)}>-1</Button>
//     //         <Button onClick={() => handleDelete(good._id)}>Del</Button>
//     //       </Box>
//     //     ))
//     //   )}
//     // </Box>

//     <Box>
//       {cart.length === 0 ? (
//         <Typography>Your cart is empty. Add some goods to deliver!</Typography>
//       ) : (
//         <Paper sx={{ width: "100%", overflow: "hidden" }}>
//           <TableContainer sx={{ maxHeight: 440 }}>
//             <Table stickyHeader aria-label="sticky table">
//               <TableHead>
//                 <TableRow>
//                   {columns.map((column) => (
//                     <TableCell
//                       key={column.id}
//                       align={column.align}
//                       style={{ minWidth: column.minWidth }}
//                     >
//                       {column.label}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {cart.map((good) => {
//                   return (
//                     <TableRow
//                       hover
//                       // role="checkbox"
//                       tabIndex={-1}
//                       key={good._id}
//                     >
//                       {columns.map((column) => {
//                         const value = good[column.id];
//                         return (
//                           <TableCell key={column.id} align={column.align}>
//                             {column.format && typeof value === "number"
//                               ? column.format(value)
//                               : value}
//                           </TableCell>
//                         );
//                       })}
//                     </TableRow>
//                   );
//                 })}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Paper>
//       )}
//     </Box>
//   );
// }

// // function StickyHeadTable() {
// //   const [page, setPage] = React.useState(0);
// //   const [rowsPerPage, setRowsPerPage] = React.useState(10);

// //   return (
// //   );
// // }
