import Label from "./Label";
import Select from "./Select";

const SelectWithLabel = ({ options, handleChange, bandInfo, setBand, nband, keyPattern }) => {
	return (
		<div className="w-full">
			<Label color={bandInfo.color} name={nband} />
			<Select
				options={options}
				handleChange={handleChange}
				setBand={setBand}
				keyPattern={keyPattern}
			/>
		</div>
	);
};

export default SelectWithLabel;
