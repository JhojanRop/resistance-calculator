import { resistorMultipliers, resistorTolerances, resistorValues } from "../constants";

import SelectWithLabel from "./SelectWithLabel";

const handleSelectChange = (event, setBand) => {
	setBand({
		color: event.target.options[event.target.selectedIndex].getAttribute("data-color"),
		value: event.target.value,
		name: event.target.options[event.target.selectedIndex].textContent,
	});
};

const Selects = ({ bands, setBands }) => {
	return (
		<>
			<SelectWithLabel
				options={resistorValues}
				handleChange={handleSelectChange}
				bandInfo={bands.band1}
				setBand={setBands.setBand1}
				nband="Band 1"
				keyPattern="cdf"
			/>
			<SelectWithLabel
				options={resistorValues}
				handleChange={handleSelectChange}
				bandInfo={bands.band2}
				setBand={setBands.setBand2}
				nband="Band 2"
				keyPattern="std"
			/>
			<SelectWithLabel
				options={resistorMultipliers}
				handleChange={handleSelectChange}
				bandInfo={bands.band3}
				setBand={setBands.setBand3}
				nband="Band 3"
				keyPattern="nby"
			/>
			<SelectWithLabel
				options={resistorTolerances}
				handleChange={handleSelectChange}
				bandInfo={bands.band4}
				setBand={setBands.setBand4}
				nband="Band 4"
				keyPattern="bev"
			/>
		</>
	);
};

export default Selects;
