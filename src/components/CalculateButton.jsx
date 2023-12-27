import { calculateResistance } from "../logic/calculateResistance";

const CalculateButton = ({ setShowResistance, setResistance, bands, children }) => {
	return (
		<button
			className="w-full my-3 py-2 bg-purple-500 text-white text-sm rounded transition hover:bg-purple-600"
			onClick={() => {
				setShowResistance(true);
				setResistance(calculateResistance(Object.values(bands)));
			}}>
			{children}
		</button>
	);
};

export default CalculateButton;
