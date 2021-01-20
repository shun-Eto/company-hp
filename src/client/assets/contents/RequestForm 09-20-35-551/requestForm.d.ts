export interface Document {
	id: string;
	date: Date;
	form: Form;
}
interface Form {
	formType: FormType;
	"request-id": string; //	依頼番号
	"plan-id": string; //	設計番号

	department: { id: string; text: string }; //	部・支店
	office: { id: string; text: string }; //	室・営業所
	division: { id: string; text: string }; //	処理区分
	"division-mention": string; //	処理区分特記
	product: { id: string; text: string }; //	商品
	salesPIC: User; //	営業担当者
	techPIC: TechPIC; //	技術担当者
	"owner-1": { id?: string; text: string }; //	発注者
	"owner-2": { id?: string; text: string }; //
	"owner-3": { id?: string; text: string }; //	発注者
	contractor: { id?: string; text: string }; //	受注者
	PIC: { id?: string; text: string }; //	窓口
	SpMention: string; //	特記事項
	unitMoeny: number; //	振替単価

	//	外注
	outsource: Outsource;

	//	チェック担当者
	checkPIC: CheckPIC;

	//	依頼項目
	reqArticles: ReqArticles;

	//	設計条件
	planConditions: PlanConditions; //	設計条件

	//	合計
	total: Total;
}

/*-*-*-*-*  *-*-*-*-*/
interface ReqArticle {
	active: boolean;
	mention: string; //	備考
	date_1: RFDate; //	希望納期
	date_2: RFDate; //	協議納期
	date_3: RFDate; // 	実納期
	hour: Hour; //	工数
	money: Money; //	金額
	PIC: User; //	担当者
}
interface ReqArticles {
	calcuDocu: ReqArticle; //	構造計算書
	designedDrawing: ReqArticle; //	設計図
	approvedDrawing: ReqArticle; //	承認図
	mechanicDrawing: ReqArticle; //	加工図
	locationDrawing: ReqArticle; //	割付図
	specificExamin: ReqArticle; //	仕様確認検討
	soundExamin: ReqArticle; //	音響効果検討
	productSpecific: ReqArticle; //	製品仕様書
	techDescription: ReqArticle; //	技術説明同行
	fieldSurvey: ReqArticle; //	現地調査
	others: ReqArticle; //	その他
	development: ReqArticle; //	設計開発
	construction: ReqArticle; //	工務
}
interface PlanCondition {
	id: string;
	text: string;
}
interface PlanConditions {
	panelType: PlanCondition[]; //	パネル種類
	wallHeight: PlanCondition[]; // 壁高さ
	steelShape: PlanCondition[]; //	支柱形状
	windLoad: PlanCondition[]; //	風荷重
	baseType: PlanCondition[]; //	基礎種類
	CoStrength: PlanCondition[]; //	コンクリート強度
	soilCondition: PlanCondition[]; //	土質条件
	memo: string; //	打ち合わせメモ
}
interface User {
	id: string;
	text: string;
}
type RFDate = Date | null;
type Hour = number | null;
type Money = number | null;
interface Outsource {
	id: string;
	text: string;
	unitMoney: Money;
	hour: Hour;
	money: Money;

	acceptedMonth: RFDate;
	tax: number;
	innerHour: Hour;
	innerMoney: Money;
	innerMonth: RFDate;
}
interface TechPIC {
	users: User[];
	hour: Hour;
	money: Money;
}
interface CheckPIC {
	user: User;
	hour: Hour;
	money: Money;
}
interface Total {
	hour: Hour;
	money: Money;
}
type FormType = "new" | "continue";
