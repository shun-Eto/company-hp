//  types
import * as RequestFormTypes from "../requestForm";
import * as EnvTypes from "@src/types/environment";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

//	assets json

interface Ledger {
	tableHeader: {
		list: (EnvTypes.MenuItem & { style?: CSSProperties })[];
	};
	tableBody: {
		reqArticles: (EnvTypes.MenuItem & { style?: CSSProperties })[];
		planConditions: (EnvTypes.MenuItem & {
			id: keyof RequestFormTypes.PlanConditions;
			style?: CSSProperties;
		})[];
	};
}

export default class {
	testDocument: RequestFormTypes.Document = {
		id: "test",
		date: new Date(),
		form: {
			formType: "new",
			"request-id": "R2002-001",
			"plan-id": "OT19N01038-01",
			department: {
				id: "highway-railroad-project-sales-department",
				text: "道路・鉄道プロジェクト営業部",
			},
			office: {
				id: "highway-railroad-project-office",
				text: "道路・鉄道プロジェクト営業室",
			},
			division: { id: "order", text: "受注検討" },
			"division-mention": "",
			product: { id: "soundproog-wall", text: "防音壁" },
			salesPIC: { id: "shun", text: "江藤" },
			"owner-1": {
				id: "owner-1-No.0",
				text: "東日本高速道路㈱",
			},
			"owner-2": {
				id: "owner-2-No.1",
				text: "関東支社",
			},
			"owner-3": {
				id: "owner-3-No.0",
				text: "東京工事事務所",
			},
			contractor: {
				id: "JFE建材工事㈱",
				text: "JFE建材工事㈱",
			},
			PIC: {
				id: "JFE建材工事㈱",
				text: "JFE建材工事㈱",
			},
			SpMention: "===========!",
			unitMoeny: 4500,

			outsource: {
				id: "",
				text: "Sopherre株式会社",
				unitMoney: 4000,
				hour: 10,
				money: 40000,

				acceptedMonth: new Date(),
				tax: 0.1,
				innerHour: 9,
				innerMoney: 40500,
				innerMonth: new Date(),
			},

			checkPIC: {
				user: {
					id: "",
					text: "江藤",
				},
				hour: 1,
				money: 4500,
			},

			techPIC: {
				users: [
					{ id: "", text: "江藤" },
					{ id: "", text: "TEST" },
				],
				hour: 20,
				money: 90000,
			},

			reqArticles: {
				calcuDocu: {
					active: true,
					mention: "",
					date_1: new Date(),
					date_2: new Date(),
					date_3: new Date(),
					hour: 10,
					money: 45000,
					PIC: { id: "", text: "江藤" },
				},
				designedDrawing: {
					active: true,
					mention: "",
					date_1: new Date(),
					date_2: new Date(),
					date_3: new Date(),
					hour: 20,
					money: 90000,
					PIC: { id: "", text: "江藤" },
				},
				approvedDrawing: {
					active: false,
					mention: "",
					date_1: null,
					date_2: null,
					date_3: null,
					hour: 0,
					money: 0,
					PIC: { id: "", text: "" },
				},
				mechanicDrawing: {
					active: false,
					mention: "",
					date_1: null,
					date_2: null,
					date_3: null,
					hour: 0,
					money: 0,
					PIC: { id: "", text: "" },
				},
				locationDrawing: {
					active: false,
					mention: "",
					date_1: null,
					date_2: null,
					date_3: null,
					hour: 0,
					money: 0,
					PIC: { id: "", text: "" },
				},
				specificExamin: {
					active: false,
					mention: "",
					date_1: null,
					date_2: null,
					date_3: null,
					hour: 0,
					money: 0,
					PIC: { id: "", text: "" },
				},
				soundExamin: {
					active: false,
					mention: "",
					date_1: null,
					date_2: null,
					date_3: null,
					hour: 0,
					money: 0,
					PIC: { id: "", text: "" },
				},
				productSpecific: {
					active: false,
					mention: "",
					date_1: null,
					date_2: null,
					date_3: null,
					hour: 0,
					money: 0,
					PIC: { id: "", text: "" },
				},
				techDescription: {
					active: false,
					mention: "",
					date_1: null,
					date_2: null,
					date_3: null,
					hour: 0,
					money: 0,
					PIC: { id: "", text: "" },
				},
				fieldSurvey: {
					active: false,
					mention: "",
					date_1: null,
					date_2: null,
					date_3: null,
					hour: 0,
					money: 0,
					PIC: { id: "", text: "" },
				},
				others: {
					active: false,
					mention: "",
					date_1: null,
					date_2: null,
					date_3: null,
					hour: 0,
					money: 0,
					PIC: { id: "", text: "" },
				},
				development: {
					active: false,
					mention: "",
					date_1: null,
					date_2: null,
					date_3: null,
					hour: 0,
					money: 0,
					PIC: { id: "", text: "" },
				},
				construction: {
					active: false,
					mention: "",
					date_1: null,
					date_2: null,
					date_3: null,
					hour: 0,
					money: 0,
					PIC: { id: "", text: "" },
				},
			},

			planConditions: {
				panelType: [
					{ id: "", text: "透光板" },
					{ id: "", text: "金属板" },
					{ id: "", text: "遮音板" },
					{ id: "", text: "SQパネル" },
					{ id: "", text: "ブラストフェンス" },
				],
				wallHeight: [{ id: "", text: "R柱" }],
				steelShape: [{ id: "", text: "直柱" }],
				windLoad: [{ id: "", text: "1.5[kN/m2]" }],
				CoStrength: [{ id: "", text: "24[N/mm2]" }],
				soilCondition: [{ id: "", text: "単位体積重量:19[kN/m3]" }],
				baseType: [],
				memo: "memo",
			},

			total: {
				hour: 30,
				money: 135000,
			},
		},
	};
	ledger: Ledger = {
		tableHeader: {
			list: [
				{
					id: "start-action",
					value: "start-action",
					label: { jp: "", en: "" },
					style: { width: 60 },
				},
				{
					id: "request-id",
					value: "request-id",
					label: { jp: "依頼番号", en: "RequestID" },
				},
				{
					id: "plan-id",
					value: "plan-id",
					label: { jp: "設計番号", en: "PlanID" },
				},
				{
					id: "department",
					value: "department",
					label: { jp: "部・支店", en: "Department" },
				},
				{
					id: "office",
					value: "office",
					label: { jp: "室・営業所", en: "Office" },
				},
				{
					id: "division",
					value: "division",
					label: { jp: "処理区分", en: "Division" },
				},
				{
					id: "product",
					value: "product",
					label: { jp: "商品", en: "Product" },
				},
				{
					id: "salesPIC",
					value: "salesPIC",
					label: { jp: "営業担当者", en: "Sales-PIC" },
				},
				{
					id: "techPIC",
					value: "techPIC",
					label: { jp: "技術担当者", en: "Tech-PIC" },
				},
			],
		},
		tableBody: {
			reqArticles: [
				{
					id: "calcuDocu",
					value: "calcuDocu",
					label: { jp: "構造計算書", en: "Calculate Document" },
				},
				{
					id: "designedDrawing",
					value: "designedDrawing",
					label: { jp: "設計図", en: "Designed Drawing" },
				},
				{
					id: "approvedDrawing",
					value: "approvedDrawing",
					label: { jp: "承認図", en: "Approved Drawing" },
				},
				{
					id: "mechanicDrawing",
					value: "mechanicDrawing",
					label: { jp: "加工図", en: "Mechanic Drawing" },
				},
				{
					id: "locationDrawing",
					value: "locationDrawing",
					label: { jp: "割付図", en: "Location Drawing" },
				},
				{
					id: "specificExamin",
					value: "specificExamin",
					label: { jp: "仕様確認検討", en: "Specific Examin" },
				},
				{
					id: "soundExamin",
					value: "soundExamin",
					label: { jp: "音響効果検討", en: "Sound Examin" },
				},
				{
					id: "productSpecific",
					value: "productSpecific",
					label: { jp: "製品仕様書", en: "Product Specific" },
				},
				{
					id: "techDescription",
					value: "techDescription",
					label: { jp: "技術説明同行", en: "Technical Description" },
				},
				{
					id: "fieldSurvey",
					value: "fieldSurvey",
					label: { jp: "現地調査", en: "Field Survey" },
				},
				{
					id: "others",
					value: "others",
					label: { jp: "その他", en: "Others" },
				},
				{
					id: "development",
					value: "development",
					label: { jp: "設計開発", en: "Development" },
				},
				{
					id: "construction",
					value: "construction",
					label: { jp: "工務", en: "Construction" },
				},
			],
			planConditions: [
				{
					id: "panelType",
					value: "panel",
					label: { jp: "パネル種類", en: "Panel" },
				},
				{
					id: "wallHeight",
					value: "wallHeight",
					label: { jp: "遮音壁高さ", en: "Wall Height" },
				},
				{
					id: "steelShape",
					value: "steelShape",
					label: { jp: "支柱形状", en: "Steel Shape" },
				},
				{
					id: "windLoad",
					value: "windLoad",
					label: { jp: "風荷重", en: "Wind load" },
				},
				{
					id: "baseType",
					value: "baseTypeoStrength",
					label: { jp: "基礎種類", en: "基礎種類" },
				},
				{
					id: "soilCondition",
					value: "soil",
					label: { jp: "土質条件", en: "Soil" },
				},
				{
					id: "CoStrength",
					value: "CoStrength",
					label: { jp: "コンクリート強度", en: "Co Strength" },
				},
			],
		},
	};

	format_document(
		document: RequestFormTypes.Document
	): EnvTypes.MenuItem & { list: EnvTypes.MenuItem[] } {
		return {
			id: document.id,
			value: document.id,
			label: { jp: "", en: "" },
			list: this.ledger.tableHeader.list.map((val) => {
				const id = val.id as keyof RequestFormTypes.Form;
				const value = document.form[id];
				return {
					id: val.id,
					value: value,
					label: { jp: val.label.jp, en: val.label.en },
				};
			}),
		};
	}

	//	get_bodyCells
	get_bodyCells(
		document: RequestFormTypes.Document
	): { id: string; text: string }[] {
		return this.ledger.tableHeader.list.map((val, i) => {
			switch (val.id) {
				case "start-action":
					return { id: val.id, text: "" };
				case "request-id":
				case "plan-id":
					return { id: val.id, text: document.form[val.id] };
				case "department":
				case "office":
				case "division":
				case "product":
				case "salesPIC":
					return { id: val.id, text: document.form[val.id].text };
				case "techPIC":
					const techPIC = document.form[val.id].users
						.map((val) => val.text)
						.join(" , ");
					return { id: val.id, text: techPIC };
				default:
					return { id: "", text: "" };
			}
		});
	}
}
