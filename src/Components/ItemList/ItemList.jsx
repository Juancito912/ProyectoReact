import React from 'react';
import Item from './Item';
import { Box, Grid } from '@mui/material';

export default function ItemList({items}) {
    return (
        <>
            <Box sx={{flexGrow:1 ,p:2,bgcolor:'white'}}>
                <Grid sx={{flexDirection:{xs:'column',sm:'row'},alignItems:'center'}} container rowSpacing={3} spacing={{ xs:1, sm:2, md:3}}> 
                    {items.map(obj => <Grid key={obj.id} item xs={12} sm={6} md={4} lg={3}> 
                        <Item key={obj.id} item={obj} />
                        </Grid>
                    )}
                </Grid>
            </Box>
        </>
    );
    
}