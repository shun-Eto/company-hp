declare module "*/office.json" {
	const value: {
		id: string;
		value: string;
		label: { jp: string; en: string };
		list: {
			id: string;
			value: string;
			label: { jp: string; en: string };
			//  orig
		}[];
	};
	export = value;
}
