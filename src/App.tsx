import Task1 from './Task1'
import ProductsList from './ProductList/ProductList'
import Divider from "@mui/material/Divider";

type Props = {};



const App = (props: Props) => {
  return (
    <>
      <Task1 />
      <Divider />
      <ProductsList />      
    </>
  );
};

export default App