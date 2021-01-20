import * as EnvTypes from "@src/types/environment";

export default class {
	headerMenu: EnvTypes.MenuItem[] = [
		{
			id: "home",
			value: "home",
			label: { jp: "Home", en: "Home" },
			faIcon: { icon: ["fas", "home"] },
			pathname: "/",
		},
		{
			id: "Work",
			value: "Work",
			label: { jp: "Work", en: "Work" },
			faIcon: { icon: ["fas", "briefcase"] },
			pathname: "/work",
		},
		{
			id: "contact",
			value: "contact",
			label: { jp: "Contact", en: "Contact" },
			faIcon: { icon: ["fas", "paper-plane"] },
			pathname: "/contact",
		},
	];
}
