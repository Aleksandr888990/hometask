import { Grid, Typography, Button } from "@mui/material";
import ProductsListItem from "./ProductListItem";
import productsArray from "../utils/productsArray";
import { useState } from "react";


type Props = {};

type PriceDataProps = {
  totalPrice: number
} 

const ProductsList = (props:Props) => {
  const [changePrice, setChangePrice] = useState(1);

  const [currency, setCurrency] = useState("EUR");

  const changeCurrencyEur = () => {
    setCurrency("EUR");
    setChangePrice(1)
  };
  const changeCurrencyUsd = () => {
    setCurrency("USD");
    setChangePrice(1.07);
  };
  const changeCurrencyUah = () => {
    setCurrency("UAH");
    setChangePrice(42);
  };

  
  const [priceData, setPriceData] = useState<PriceDataProps>({
    totalPrice: 0,
  });
  const addPrice = (price: number) => {
    setPriceData((prevState) => ({
      totalPrice: prevState.totalPrice + price,
    }));
  };

  return (
    <>
      <Typography
        variant="h3"
        align="center"
        component="h2"
        sx={{ marginBotton: "40px", marginTop: "40px" }}
      >
        Our shop page
      </Typography>
      <Typography align="center">
        <Grid spacing={3}>
          <Button variant="outlined" onClick={() => changeCurrencyUsd()}>
            USD
          </Button>
          <Button variant="outlined" onClick={() => changeCurrencyEur()}>
            EUR
          </Button>
          <Button variant="outlined" onClick={() => changeCurrencyUah()}>
            UAH
          </Button>
        </Grid>
      </Typography>
      <Grid container spacing={3}>
        {productsArray.map(({ id, title, description, price }) => (
          <Grid item xs={12} sm={6} md={4}>
            <ProductsListItem
              id={id}
              title={title}
              description={description}
              price={price}
              addPrice={addPrice}
              currency={currency}
              changePrice={changePrice}
            />
          </Grid>
        ))}
      </Grid>
      <Typography variant="h5" align="center" sx={{ marginTop: "20px" }}>
        Total: {priceData.totalPrice * changePrice}
      </Typography>
    </>
  );
};

export default ProductsList