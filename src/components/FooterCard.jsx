import ArrowRigthIcon from "./ArrowRigthIcon";
import Modal from "./Modal";

const FooterCard = ({ resistance, tolerance }) => {
	return (
		<footer className="w-full flex flex-col items-center">
			<article>
				<p className="text-gray-600 text-sm">Resistance value</p>
				<p className="text-gray-900 text-center text-2xl font-bold">{resistance} Ω</p>
			</article>

			<button
				className="ml-auto text-gray-500 text-xs inline-flex group"
				onClick={() => Modal(resistance, tolerance)}>
				See more values
				<span className="inline-block w-4 text-gray-600 ml-1 transition-all group-hover:translate-x-1">
					<ArrowRigthIcon />
				</span>
			</button>
		</footer>
	);
};

export default FooterCard;
