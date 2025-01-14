import { TrendingUp } from "@mui/icons-material";
import { SettingsCellIcon } from "@mui/icons-material/SettingsCell";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from "@mui/material";
import React from "react";

const salesData = [
    {
        stats:'245K',
        title:"Sales",
        color:"#5b2338",
        icon:<TrendingUp sx={{fontSize:"1.75rem"}}/>
    },
    {
        stats:'12.5K',
        title:"Customers",
        color:"#5b2338",
        icon:<TrendingUp sx={{fontSize:"1.75rem"}}/>
    },
    {
        stats:'1.5K',
        title:"Products",
        color:"#5b2338",
        icon:<TrendingUp sx={{fontSize:"1.75rem"}}/>
    },
    {
        stats:'88kK',
        title:"Revenue",
        color:"#5b2338",
        icon:<TrendingUp sx={{fontSize:"1.75rem"}}/>
    }
]

const renderStats = () => {
    return salesData.map((item,index)=>(
        <Grid item xs={12} sm={3} key={index}>
            <Box sx={{display:"flex", alignItems:"center"}}>
                <Avatar variant="rounded" sx={{mr:3, width:44, height:44, boxShadow:3, color:"white", backgroundColor:`${item.color}`}}>
                    {item.icon}
                </Avatar>
                <Box sx={{display:"flex", flexDirection:"column"}}>
                    <Typography variant="caption">{item.title}</Typography>
                    <Typography variant="h6">{item.stats}</Typography>
                </Box>
            </Box>
        </Grid>
    ))
}

const MonthlyOverview = () => {
    return(
        <Card>
            <CardHeader title="Monthly Overview" action={
                <IconButton size='small'>
                    <MoreVertIcon/>
                </IconButton>
            }

            subheader={
                <Typography variant="body2">
                    <Box component="span" sx={{fontWeight:600, color:'text.primary', mx:1}} >
                        Total 48.5% growth
                    </Box>
                    This month
                </Typography>
            }
            titleTypographyProps={{
                sx:{
                    mb:2.5,
                    lineHeight: '2rem !important',
                    letterSpacing: '.15px !important',
                }
            }}
            />

            <CardContent sx={{pt:theme=>`${theme.spacing(3)} !important`}}>
                <Grid container spacing={[5,0]}>
                    {renderStats()}
                </Grid>
            </CardContent>
        </Card>
    )
}

export default MonthlyOverview