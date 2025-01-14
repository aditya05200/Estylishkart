import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../State/Admin/Order/Action";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Avatar, AvatarGroup, Button, Card, CardHeader } from "@mui/material";
import Paper from '@mui/material/Paper';

const OrderTable = () => {
    const dispatch = useDispatch()

    const {adminOrder} = useSelector(store=>store)
    useEffect(()=>{
        dispatch(getOrders())
    },[])

    console.log("Admin Orders", adminOrder.orders)
    return(
        <div>
            <Card className="mt-2">
                <CardHeader title="All Products" />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Image</TableCell>
                                <TableCell align="left">SKU</TableCell>
                                <TableCell align="left">Title</TableCell>
                                <TableCell align="left">Category</TableCell>
                                <TableCell align="left">Price</TableCell>
                                <TableCell align="left">Discounted Price</TableCell>
                                <TableCell align="left">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {adminOrder.orders?.map((item) => (
                                <TableRow
                                    key={item.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left">
                                        <AvatarGroup>
                                            {/* {item.orderItem.map((orderItem))} */}
                                            {item.orderItems.map((orderItem)=><Avatar src={orderItem.product?.imageUrl}></Avatar>)}
                                        </AvatarGroup>
                                    </TableCell>
                                    {/* <TableCell align="left">{item._id}</TableCell> */}
                                    {/* <TableCell align="left">{item.title}</TableCell> */}
                                    <TableCell align="left">{item.orderStatus}</TableCell>
                                    <TableCell align="left">{item?.totalPrice}</TableCell>
                                    {/* <TableCell align="left">{item.discountedPrice}</TableCell> */}
                                    <TableCell align="left">
                                        <Button variant="outlined">Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </div>
    )
}

export default OrderTable;