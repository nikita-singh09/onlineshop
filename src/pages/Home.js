import React, {useState, useEffect} from "react";
import { Box, Typography, Card, CardContent, CardMedia, Grid, CardActionArea, CardActions } from "@mui/material";
import Data from "../const/Data";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { add } from '../store/productSlice';

const Home = () => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        setData(Data)
    }, [])

    const handleProductItem = (product) => {
        dispatch(add(product))
    }

  return (
    <Box>
        <Box className="mainTitle">
            <Typography> Footwear Collection</Typography>
        </Box>
        <Box className="item-container">
            <Grid container spacing={2}>
                {data.map((item, ind) => {
                    return(
                        <Grid item xs={4} className="sub-item" key ={ind}>
                            <Card className="itemCard">
                                <Link to="/product" >
                                    <CardMedia
                                        onClick={() => handleProductItem(item)}
                                        component="img"
                                        image={item.img}
                                        alt=""
                                    />
                                </Link>
                                <CardContent className="itemContent">
                                    <Typography variant="h5" className="itemName">{item.name}</Typography>
                                    <Typography className="itemDesc">{item.desc}</Typography>
                                    <Box className="priceContent">
                                        <Typography className="itemPrice">₹{item.price}</Typography>
                                        <Typography className="itemActualPrice">₹{item.actualPrice}</Typography>
                                        <Typography className="itemOffer">{item.offer}</Typography>
                                    </Box>  
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })
                }
            </Grid>
            
        </Box>
    </Box>
  );
};
export default Home;
