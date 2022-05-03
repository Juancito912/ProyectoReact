import React from 'react';
import Item from './Item';
import { Box, Grid } from '@mui/material';

export default function ItemList({items}) {
    return (
        <>
            <Box sx={{ flexGrow:1 ,p:2}}>
                <Grid container spacing={{ xs:1, sm:2, md:3, lg:4}} columns={{xs:2,sm:8,md:12}}> 
                    {items.map(obj => <Grid item xs={2} sm={4} md={4}> 
                        <Item key={obj.id} item={obj} />
                        </Grid>
                    )}
                </Grid>
            </Box>
        </>
    );
    
}