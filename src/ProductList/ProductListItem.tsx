import { Button, Card, CardContent, CardActions } from "@mui/material";
import "./ProductListItem.scss";

type Props = {
  id: number;
  title: string;
  description: string;
  addPrice: (price: number) => void;
  currency: string;
  changePrice: number;
  price: number;
};

const ProductsListItem = ({
  id,
  title,
  description,
  addPrice,
  currency,
  changePrice,
  price,
}:Props) => {
  const newPrice = changePrice * price
  return (
    <Card variant="outlined" className="product">
      <CardContent>
        <div className="product-title">{title}</div>
        <div className="product-desc">{description}</div>
        <div className="product-price">
          {currency}
          {newPrice}
        </div>
        <CardActions className="product-btn-wrap">
          <Button variant="outlined" onClick={() => addPrice(price)}>
            Buy
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default ProductsListItem;
