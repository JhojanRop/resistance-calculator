const Select = ({ options, handleChange, setBand, keyPattern }) => {
	return (
		<select
			className="w-full p-2 border rounded-lg"
			onChange={(event) => handleChange(event, setBand)}>
			{options.map(({ value, name, color }) => (
				<option value={value} data-color={color} key={name + value + keyPattern}>
					{name}
				</option>
			))}
		</select>
	);
};

export default Select;
