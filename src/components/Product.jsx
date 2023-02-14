import "../components/Product.css";
import { AddCardBtn } from "./AddCardBtn";
import { Discount } from "./Discount";
import { Heart } from "./Heart";
const Product = ({ discount, name, oldprice, newprice }) => {
	return (
		<div className="product">
			<Heart />
			<Discount discount={discount} />
			<img className="product__image" src="https://picsum.photos/200" alt="producto" />
			<h2 className="product__name">{name}</h2>
			<div className="product__details">
				<p className="product__oldprice">${oldprice}</p>
				<p className="product__newprice">${oldprice - oldprice * (discount / 100)}</p>
				<AddCardBtn name1={name} newprice1={newprice} />
			</div>
		</div>
	);
};

export { Product };
