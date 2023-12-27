const Label = ({ name, color }) => {
	return (
		<label
			className="font-semibold mb-2 text-xs w-fit flex items-center gap-1 rounded-2xl border px-2 py-1"
			style={{ borderColor: color }}>
			<span
				className="inline-block w-4 h-4 opacity-85 rounded-full"
				style={{ background: color }}></span>
			{name}
		</label>
	);
};

export default Label;
