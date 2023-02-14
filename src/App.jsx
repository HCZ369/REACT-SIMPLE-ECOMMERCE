import "../src/App.css";

import { ProductContainer } from "./components/ProductContainer";
import { Product } from "./components/Product";
import data from "./products.json";

const App = () => {
	return (
		<ProductContainer>
			{data.map((product) => (
				<Product name={product.name} oldprice={product.price} newprice={product.discount} discount={product.discount} />
			))}
		</ProductContainer>
	);
};

export default App;
