import { Card, CardContent, styled, Typography, Button } from '@mui/material'
import React from "react";

const TriangleImg = styled("img")({
    right: 0,
    bottom: 0,
    height: 170,
    position: "absolute",
})

const TrophyImg = styled("img")({
    right: 36,
    bottom: 20,
    height: 98,
    position: 'absolute',
})

const Acheivment = () => {
    return (
        <Card sx={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center", padding: 2 }}>
            <CardContent sx={{ textAlign: "left", padding: 0, flex: 1 }}>
                <Typography variant="h4" sx={{ letterSpacing: ".25px" }}>Estylishkart</Typography>
                <Typography variant="body2">Congratulations 🎉</Typography>
                <Typography variant="h5" sx={{ my: 3.1 }}>420.8k</Typography>
                <Button size="small" sx={{ backgroundColor: "#5b2338", color: "#fff", px: 2 }}>View Sales</Button>
            </CardContent>
            <TrophyImg
                src="https://img.freepik.com/free-vector/golden-winners-cup_1284-18399.jpg?ga=GA1.1.2119177580.1724646229&semt=ais_hybrid"
                style={{ width: "120px", height: "auto", marginLeft: "16px" }}
            />
        </Card>

    )
}

export default Acheivment;