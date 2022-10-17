import React, {useState, useEffect} from 'react';
import {Box, Card, Typography, CardMedia, Button} from "@mui/material";
import SellIcon from '@mui/icons-material/Sell';
import { useSelector, useDispatch } from 'react-redux';
import { remove, increaseCart, decreaseCart, emptyCart } from '../store/cartSlice';

const AddToCart = () => {
  const cartItem = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  let couponAmount = 100;

  useEffect(() => {
    setItems(cartItem)
  },[cartItem])

  let data = JSON.parse(localStorage.getItem("cartItems"));
  console.log(data,"==========>datadatadata")


  const handleActualData = () => {
    let price = 0;
    items.forEach((item) => {
      price += (Number(item.qty) + 1)*Number(item.actualPrice);
    })
    return price;
  }
  const handleDiscount = () => {
    let discount = 0;
    items.forEach((item) => {
      discount += (Number(item.qty) + 1)*(Number(item.actualPrice) - Number(item.price));
    })
    return discount;
  }

  const handleRemoveItem = (id) => {
    dispatch(remove(id))
  }

  const handleIncrement = (item) => {
    dispatch(increaseCart(item))
  }
  const handleDecrement = (item) => {
      dispatch(decreaseCart(item))
  }
  const handleQuantity = () => {
    // let data = JSON.parse(localStorage.getItem("itemQuantity"));
    let numberItems = 0;
    items.forEach((item) => {
        numberItems += item.qty;
    })
    return numberItems;
  }
  const handleEmptyCart = () => {
      dispatch(emptyCart())
  }

  return (
    <Box className="cartContainer">
      <Box className="leftContainer">
        <Card className="totalItems">
          <Box className="numberContain">
            <Typography>Number of Items added : </Typography>
            <Typography className="numberShow">{items.length + handleQuantity()}</Typography>
          </Box>
        </Card>
        <Card className="itemsShow">
          {items.length > 0 ?
            items.map((item, ind) => {
              return(
                <Box className="itemContainer">
                  <Box className="leftSide">
                    <CardMedia
                      component="img"
                      image={item.img}
                      alt=""
                    />
                    <Box className="addItem">
                      <Button variant="outlined" className="plusBtn" onClick={() => handleDecrement(item)}>-</Button>
                      <Button variant="contained" className="noBtn">{Number(item.qty) + 1}</Button>
                      <Button variant="outlined" className="plusBtn" onClick={() => handleIncrement(item)}>+</Button>
                    </Box>
                  </Box>
                  <Box className="rightSide">
                    <Box className="itemInfo" style={{height: "75%"}}>
                      <Typography variant="h4">{item.name}</Typography>
                      <Typography variant="h5">{item.title}</Typography>
                      <Typography variant="body1" className="specialPrice">Special Price</Typography>
                      <Box className="productContent productPrice">
                        <Typography className="itemPrice">₹{item.price}</Typography>
                        <Typography className="itemActualPrice">₹{item.actualPrice}</Typography>
                        <Typography className="itemOffer">{item.offer}</Typography>
                      </Box> 
                      <Box className="couponContainer">
                        <SellIcon/>
                        <Typography className="couponApplied">Coupon Applied</Typography> 
                      </Box>
                      <Typography className="deliverDate">Delivery by Sat Oct 15</Typography>
                    </Box>
                    <Box className="removeBtn">
                        <Button variant="contained" onClick={() => handleRemoveItem(item._id)}>Remove Item</Button>
                    </Box>
                  </Box>
                </Box>
              )
            })
            :<Box className="emptyCart"><Typography variant="h3">Your Cart Is Empty.</Typography></Box>
          }
          
        </Card>
      </Box>
      <Box className="rightContainer">
        <Card className="priceDetail">
          <Box className="priceContainer">
            <Typography variant="h4" className="">Price Details</Typography>
            <Box className="subContainerHeight">
              <Box className="priceSubContainer">
                <Box className="priceTable">
                  <Typography variant="h5">{" Price " + " (" + items.length + "-" + "Items" + ")" }</Typography>
                  <Typography variant="h5">₹{handleActualData()}</Typography>
                </Box>
                <Box className="priceTable">
                  <Typography variant="h5">Discount</Typography>
                  <Typography variant="h5">₹{handleDiscount()}</Typography>
                </Box>
                <Box className="priceTable">
                  <Typography variant="h5">Coupon For You</Typography>
                  <Typography variant="h5">₹{items.length > 0 ? couponAmount : 0}</Typography>
                </Box>
                <Box className="priceTable">
                  <Typography variant="h5">Delivery Charges</Typography>
                  <Typography variant="h5">{items.length > 0 ? "FREE" : "₹" + 0}</Typography>
                </Box>
              </Box>
              <Box className="priceTable amountStyle">
                <Typography className="totalAmount">Total Amount</Typography>
                <Typography className="totalAmount">₹{handleActualData() - handleDiscount()}</Typography>
              </Box>
            </Box>
            <Typography className="totalSaving">{items.length > 0 ?("You will save " + "₹"+ (handleDiscount() + couponAmount) + " on this order."):"Please fill your cart to get good offers."}</Typography>
          </Box>
        </Card>
        <Box className="clearCart"><Button variant="contained" onClick={() => handleEmptyCart()}>Clear Cart</Button></Box>
      </Box>
    </Box>
  )
}

export default AddToCart