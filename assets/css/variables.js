const colors = {
	backgroundColor: "#dedede",
	highlightColor: "#eee",
	textColor: "#444",
	textSecondaryColor: "#666",
	primaryColor: "#9d70d4",
	primaryTextColor: "#eee"
}

const fonts = {
	bodyFont: "Roboto",
	headingFont: "Quicksand"
}

const reactToolbox = {
	"preferred-font": fonts.bodyFont,
	// Body & Text
	"color-divider": colors.textColor,
	"color-background": colors.backgroundColor,
	"color-text-secondary": colors.textSecondaryColor,
	// Colors
	"color-primary": colors.primaryColor,
	"color-primary-dark": `${colors.primaryColor} blackness(+5%))`,
	"color-primary-contrast": colors.primaryTextColor,
	// Misc
	"button-floating-font-size": "calc(1 * var(--unit))",
	"button-floating-height": "calc(4.2 * var(--unit))"
}

module.exports = Object.assign({},
	colors,
	fonts,
	reactToolbox
)
