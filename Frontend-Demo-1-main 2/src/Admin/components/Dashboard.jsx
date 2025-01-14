import { Grid } from "@mui/material";
import React from "react";
import Acheivment from "./Acheivment";
import MonthlyOverview from "./MonthlyOverview";
import ProductTable from "./ProductTable";

const AdminDashboard = () => {
    return(
        <div className="w-full">
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Acheivment/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <MonthlyOverview/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ProductTable/>
                </Grid>
            </Grid>
        </div>
    )
}

export default AdminDashboard;