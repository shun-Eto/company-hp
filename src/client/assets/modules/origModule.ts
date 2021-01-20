import moment from "moment";

//	modules
import * as EnvModile from "@src/client/assets/modules/envModule";

//	styles

//	assets

//	types
import * as EnvTypes from "@src/types/environment";

//	classes
const envClass = new EnvModile.default();

interface Config {
	moment: { format: string };
	validation: {
		userId: OrigReg;
		password: OrigReg;
	};
	error: {
		401: Error;
	};
}
interface OrigReg {
	reg: RegExp;
	helperText: EnvTypes.Languages;
	description?: string;
	message: {
		success?: EnvTypes.Languages;
		failed?: EnvTypes.Languages;
	};
}
interface Error {
	message: EnvTypes.Languages;
}

/*-*-*-*-* OrigClass *-*-*-*-*/
export default class {
	config: Config = {
		moment: { format: "YYYY年MM月DD日 HH時mm分" },
		validation: {
			userId: {
				reg: new RegExp(`^(?=(^[a-zA-Z].*?[\\w]$))[\\w-]{3,15}$`),
				description: "半角英数字_-が使用可能で、3~15文字",
				helperText: {
					jp:
						"半角英数字 , - , _ で3~15文字。( 最初は半角英字 , 最後は半角英数字 )",
					en: "",
				},
				message: {},
			},
			password: {
				reg: new RegExp(`^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\\d])[\\w-]{8,20}$`),
				description:
					"半角英数字_が使用可能で、8~20文字、最低でも半角英大文字、小文字、数字が１つ必要",
				helperText: {
					jp: "",
					en: "",
				},
				message: {},
			},
		},
		error: {
			401: {
				message: { jp: "認証が必要です。", en: "Authentication Required" },
			},
		},
	};

	/*-*-*-*-* methods *-*-*-*-*/
	//  format_Date
	format_Date(
		date: Date,
		format?:
			| "-YY年MM月DD日-HH時mm分"
			| "YYYY年MM月DD日 : HH時mm分 < JP >"
			| "YYYY年MM月DD日 : HH時mm分"
			| "YYYY年MM月DD日"
			| "YY年MM月DD日"
			| "YYYY年MM月"
			| "YY年MM月"
			| "MM月DD日"
			| "HH時mm分",
		lang?: "en" | "jp"
	): string {
		if (lang === "en") {
			return moment(date).format("Do MMMM YYYY");
		} else {
			if (!format) {
				return moment(date).format(this.config.moment.format);
			} else {
				return moment(date).format(format);
			}
		}
	}

	//	arrayShuffle
	arrayShuffle<T>(array: T[]): T[] {
		let initArray = array;
		let count = array.length;

		//	Fisher–Yates shuffle
		while (count) {
			var j = Math.floor(Math.random() * count);
			var t = initArray[--count];
			initArray[count] = initArray[j];
			initArray[j] = t;
		}
		return initArray;
	}

	//	get_userIconPath
	get_userIconPath(id: string) {
		return `${envClass.config.DOMAIN_API}/users/icon?id=${id}`;
	}

	//	array_indexSort
	arraySort_index(array: any[], index1: number, index2: number) {
		if (array.length < index1 || array.length < index2 || index1 === index2)
			return array;

		return array.reduce((pre, cur, index) => {
			if (index === index1) {
				return [...pre, array[index2]];
			} else if (index === index2) {
				return [...pre, array[index1]];
			} else {
				return [...pre, cur];
			}
		}, []);
	}

	//	fetchApi
	fetchApi<B, R>(body: B, pathname: string, reqInit?: RequestInit): Promise<R> {
		return new Promise((resolve, reject) => {
			//	fetch propertis
			const fetchURL = `${envClass.config.DOMAIN_API}${pathname}`;
			const fetchInit: RequestInit = {
				method: "post",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify(body),

				...reqInit,
			};

			//	fetch
			fetch(fetchURL, fetchInit)
				.then((res) => {
					if (res.status !== 200) throw new Error();
					return res.json();
				})
				.then((val) => {
					return resolve(val);
				})
				.catch((err) => {
					return reject(err);
				});
		});
	}

	//	fetchSopherre
	fetchSopherre<B, R>(
		body: B,
		pathname: string,
		reqInit?: RequestInit
	): Promise<R> {
		return new Promise((resolve, reject) => {
			//	fetch propertis
			const fetchURL = `${envClass.config.DOMAIN_SERVER_SOPHERRE}${pathname}`;
			const fetchInit: RequestInit = {
				method: "post",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify(body),
				...reqInit,
			};

			//	fetch
			fetch(fetchURL, fetchInit)
				.then((res) => {
					if (res.status !== 200) throw new Error();
					return res.json();
				})
				.then((val) => {
					return resolve(val);
				})
				.catch((err) => {
					return reject(err);
				});
		});
	}

	//	get_characterWidth
	get_characterWidth(str: string): "full" | "half" {
		var chr = str.charCodeAt(0);
		if (
			(chr >= 0x00 && chr < 0x81) ||
			chr === 0xf8f0 ||
			(chr >= 0xff61 && chr < 0xffa0) ||
			(chr >= 0xf8f1 && chr < 0xf8f4)
		) {
			//半角文字の場合は1を加算
			return "half";
		} else {
			//それ以外の文字の場合は2を加算
			return "full";
		}
	}

	//	get_textArray
	get_textArray(
		text: string,
		row_maxTextLength?: number
	): { text: string; count: number }[] {
		const maxTextLength = row_maxTextLength ? row_maxTextLength : 22;
		return [...text.split("")].reduce(
			(preV: { text: string; count: number }[], curV: string, curI) => {
				const target = preV[preV.length - 1];
				const textType = this.get_characterWidth(curV);
				const textLength = textType === "full" ? 2 : 1;
				if (target.count + textLength <= maxTextLength) {
					return preV.map((val, i) => {
						if (i === preV.length - 1) {
							return {
								text: `${val.text}${curV}`,
								count: val.count + textLength,
							};
						} else {
							return val;
						}
					});
				} else if (preV.length > 2) {
					return [
						...preV.map((val, i) => {
							if (i === preV.length - 1) {
								return { ...val, text: val.text + "..." };
							} else {
								return val;
							}
						}),
						{ text: curV, count: textLength },
					];
				} else {
					return [...preV, { text: curV, count: textLength }];
				}
			},
			[{ text: "", count: 0 }]
		);
	}
}
