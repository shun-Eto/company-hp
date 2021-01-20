declare module "*/outsource.json" {
	const value: {
		id: string;
		value: string;
		label: { jp: string; en: string };
		list: {
			id: string;
			value: string;
			label: { jp: string; en: string };
			//  orig
			unitPrice: number;
		}[];
	};
	export = value;
}
