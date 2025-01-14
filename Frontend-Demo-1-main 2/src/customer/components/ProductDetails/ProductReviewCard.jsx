import React from "react";
import {Grid, Avatar, Box, Rating} from '@mui/material';

const ProductReviewCard = () => {
    return (
        <div>
            <Grid container spacing={2} gap={3}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar className='text-white' sx={{width:56, height:56, bgcolor:"#9155fd"}}></Avatar>
                    </Box>
                </Grid>
                <Grid item xs={9}>
    <div className="space-y-2 text-left">
        <div className="flex justify-between">
        <div>
            <p>Ram</p>
            <p>Sep 28, 2024</p>
        </div>
        <Rating value={4.5} name="half-rating" readOnly precision={0.5} />
        </div>
        
    </div>
    
    <p className="text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis molestiae debitis vitae similique, facere distinctio id sequi error cumque itaque maiores autem culpa dolores alias maxime commodi, eum pariatur delectus!
    </p>
</Grid>

            </Grid>
        </div>
    )
}

export default ProductReviewCard;