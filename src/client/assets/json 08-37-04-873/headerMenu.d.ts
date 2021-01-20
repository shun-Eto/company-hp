declare module "*/headerMenu.json" {
	const value: {
		id: string;
		value: string;
		label: { jp: string; en: string };
		list: {
			id: string;
			value: string;
			label: { jp: string; en: string };
			faIcon: { icon: ["fas", "home"] };
		}[];
	};
	export = value;
}
