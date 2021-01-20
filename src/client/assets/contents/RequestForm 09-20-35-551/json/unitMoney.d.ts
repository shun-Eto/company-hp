declare module "*/unitMoney.json" {
	const value: {
		id: string;
		value: string;
		label: { jp: string; en: string };
		list: {
			id: string;
			value: number;
			label: EnvTypes.Languages;
		}[];
	};
	export = value;
}
