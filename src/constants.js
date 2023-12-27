const resistorColors = {
	Black: {
		color: "#000000",
		value: {
			resistance: 0,
			tolerance: null,
			multiplier: 10 ** 0,
		},
	},
	Brown: {
		color: "#8B4513",
		value: {
			resistance: 1,
			tolerance: null,
			multiplier: 10 ** 1,
		},
	},
	Red: {
		color: "#FF0000",
		value: {
			resistance: 2,
			tolerance: null,
			multiplier: 10 ** 2,
		},
	},
	Orange: {
		color: "#FFA500",
		value: {
			resistance: 3,
			tolerance: null,
			multiplier: 10 ** 3,
		},
	},
	Yellow: {
		color: "#FFFF00",
		value: {
			resistance: 4,
			tolerance: null,
			multiplier: 10 ** 4,
		},
	},
	Green: {
		color: "#008000",
		value: {
			resistance: 5,
			tolerance: null,
			multiplier: 10 ** 5,
		},
	},
	Blue: {
		color: "#0000FF",
		value: {
			resistance: 6,
			tolerance: null,
			multiplier: 10 ** 6,
		},
	},
	Violet: {
		color: "#8A2BE2",
		value: {
			resistance: 7,
			tolerance: null,
			multiplier: 10 ** 7,
		},
	},
	Gray: {
		color: "#808080",
		value: {
			resistance: 8,
			tolerance: null,
			multiplier: null,
		},
	},
	White: {
		color: "#FFFFFF",
		value: {
			resistance: 9,
			tolerance: null,
			multiplier: null,
		},
	},
	Gold: {
		color: "#FFD700",
		value: {
			resistance: null,
			tolerance: 5,
			multiplier: null,
		},
	},
	Silver: {
		color: "#C0C0C0",
		value: {
			resistance: null,
			tolerance: 10,
			multiplier: null,
		},
	},
	none: {
		color: "#D8B476",
		value: {
			resistance: null,
			tolerance: 20,
			multiplier: null,
		},
	},
};

const resistorValues = Object.entries(resistorColors)
	.filter((color) => color[1].value.resistance !== null)
	.map((item) => ({ name: item[0], color: item[1].color, value: item[1].value.resistance }));

const resistorMultipliers = Object.entries(resistorColors)
	.filter((color) => color[1].value.multiplier !== null)
	.map((item) => ({ name: item[0], color: item[1].color, value: item[1].value.multiplier }));

const resistorTolerances = Object.entries(resistorColors)
	.filter((color) => color[1].value.tolerance !== null)
	.map((item) => ({ name: item[0], color: item[1].color, value: item[1].value.tolerance }));

export { resistorValues, resistorMultipliers, resistorTolerances };
