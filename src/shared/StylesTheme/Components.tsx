export const paletteTheme = {
	color: {
		primary: "#3980F5",
		secondary: "#9545F0",
	},

	dark: {
		money: "#02c51f",
		percent: "#184cdd",
	},
	light: {
		money: "#0abb0a",
		percent: "#184cdd",
	},
};

export const customVariables = {
	dark: {
		color: {
			money: paletteTheme.dark.money,
			percent: paletteTheme.dark.percent,
		},

		gradient: {
			cardPrimary: `linear-gradient(45deg, ${paletteTheme.color.primary} 30%, #f0c2ffd6 90%)`,
			cardSecondary: `linear-gradient(45deg, ${paletteTheme.color.primary} 30%, #5121fdd5 90%)`,
		},
	},

	light: {
		color: {
			money: paletteTheme.light.money,
			percent: paletteTheme.light.percent,
		},

		gradient: {
			cardPrimary: `linear-gradient(45deg, ${paletteTheme.color.primary} 30%,#f0c2ffd6 90%)`,
			cardSecondary: `linear-gradient(45deg, ${paletteTheme.color.primary} 30%, #5121fdd5 90%)`,
		},
	},
};
