declare module "*/department.json" {
	const value: {
		id: string;
		value: string;
		label: { jp: string; en: string };
		list: {
			id: string;
			value: string;
			label: { jp: string; en: string };
			//  orig
			code: string;
			category: "sales" | "engineer";
		}[];
	};
	export = value;
}
