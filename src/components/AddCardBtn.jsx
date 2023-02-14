import "../components/AddCardBtn.css";
const AddCardBtn = ({ name1, newprice1 }) => {
	return (
		<button
			onClick={() => {
				alert(`Agregaste ${name1} por $${newprice1} al carrito`);
			}}
		>
			Comprar
		</button>
	);
};
export { AddCardBtn };
