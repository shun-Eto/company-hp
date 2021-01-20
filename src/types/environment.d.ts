import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export interface Languages {
	jp: string;
	en: string;
}

export interface Validation {
	regExp?: RegExp;
	maxCount?: number;
	errorLabel?: EnvTypes.Languages;
}

export interface FormStatus {
	count: number;
	result?: boolean;
	message?: string;
}

export interface Keyword {
	startFaIcon?: FontAwesomeIconProps;
	text: string;
	endFaIcon?: FontAwesomeIconProps;
}

export interface MenuItem {
	id: string;
	value: any;
	label: Languages;
	faIcon?: FontAwesomeIconProps;
	abbrevation?: Languages;
	theme?: Theme;
	list?: MenuItem[];
	pathname?: string;
	onClick?: () => void;
}

export interface Theme {
	color?: string;
	bgColor?: string;
	hoveredColor?: string;
	hoveredBgColor?: string;
	iconColor?: string;
	fontSize?: number;
	padding?: string;
	margin?: string;
}
