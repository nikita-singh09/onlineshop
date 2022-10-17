import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { add } from "../store/cartSlice";
import {Box, Typography, Card, Grid, CardMedia, Button} from '@mui/material';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import SellIcon from '@mui/icons-material/Sell';
import {Link} from "react-router-dom";

const Product = () => {
	const dispatch = useDispatch();

	let data = useSelector((state) => state.product);
	let newData = useSelector((state) => state.cart);
	const [productData, setProductData] = useState(data);
	const [changeBtn, setChangeBtn] = useState([]);

	useEffect(() => {
		let changeData = newData.filter((item) => {
			return item._id === data[0]._id;
		})
		if(changeData){
			setChangeBtn(changeData)
		}
	},[])

	const handleAdd = (product) => {
		dispatch(add(product))
		if(changeBtn.length === 0){
			setChangeBtn([product])
		}
	}

   return (
		<>
			<Box className="product-box">
				<Typography className="proTitle">Product Description</Typography>
				<Box className="product-container">
					<Card className="productCard">
						<Grid container spacing={0}>
							<Grid item xs={5}>
							<Card className="imgContainer">
								<CardMedia component="img" image={productData[0].img} alt=""/> 
							</Card>
							</Grid>
							<Grid item xs={7}>
								<Card className="productContent">
									<Typography variant="h5" className="productName">{productData[0].name}</Typography>
									<Typography variant="h6" className="productTitle">{productData[0].title}</Typography>
									<Box className="productPrice">
											<Typography className="itemPrice">₹{productData[0].price}</Typography>
											<Typography className="itemActualPrice">₹{productData[0].actualPrice}</Typography>
											<Typography className="itemOffer">{productData[0].offer}</Typography>
									</Box>  
									<Typography variant="h5" className="productCoupon">Coupon For You</Typography>
									<Box className="specialCoupon">
										<Box className="couponIcon"><ConfirmationNumberIcon/></Box>
										<Typography className="specialPrice">Special Price</Typography>
										<Typography className="priceCoupon">{productData[0].coupon}</Typography>
									</Box>
									<Typography variant="h5" className="productCoupon">Available Offers</Typography>
									<Box className="specialCoupon">
										<Box className="couponIcon"><SellIcon/></Box>
										<Typography className="specialPrice bankOffer">Bank Offers</Typography>
										<Typography className="priceCoupon">{productData[0].availableOffers}</Typography>
									</Box>
									<Typography variant="h5" className="productCoupon">About</Typography>
									<Typography className="productDesc">{productData[0].desc}</Typography>
									<Box className="cartBtn">
										{changeBtn.length > 0 ?
											<Link to="/cart">
												<Button variant="contained">Go To Cart</Button> 
											</Link>
											: 
											<Button variant="contained" onClick={() => handleAdd(productData[0])}>Add To Cart</Button>
										}

									</Box>
								</Card>
							</Grid>
						</Grid>
										
					</Card>
				</Box>
			</Box>
		</>
   )
}

export default Product