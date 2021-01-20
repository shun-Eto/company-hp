import { Request } from "express";
import moment from "moment";
import * as Canvas from "canvas";

//	assets
import Thumbnail_Landscape_Blog from "@src/server/assets/images/tool/thumbnail-landscape-blog.png";
import Thumbnail_Landscape_Community from "@src/server/assets/images/tool/thumbnail-landscape-community.png";
import Thumbnail_Landscape_Question from "@src/server/assets/images/tool/thumbnail-landscape-question.png";

//	installed canvas fonts
const fontRoot = "./dist/fonts";
Canvas.registerFont(`${fontRoot}/sazanami-gothic.ttf`, {
	family: "sazanami-gothic",
});
Canvas.registerFont(`${fontRoot}/meiryo.ttc`, { family: "meiryo" });
Canvas.registerFont(`${fontRoot}/comic.otf`, { family: "comic" });

/*-*-*-*-* OrigClass *-*-*-*-*/
export default class {
	config = {
		moment: { format: "YYYY年MM月DD日 HH時mm分" },
	};

	/*-*-*-*-* methods *-*-*-*-*/
	get_requestLog(req: Request<{ [key: string]: string }>) {
		console.log(`[ ${req.method} ] : ${req.originalUrl}`);
	}

	//  format_Date
	format_Date(
		date: Date,
		format?:
			| "-YY年MM月DD日-HH時mm分"
			| "YYYY年MM月DD日 : HH時mm分 < JP >"
			| "YYYY年MM月DD日 : HH時mm分"
			| "YYYY年MM月DD日"
			| "HH時mm分"
	): string {
		if (!format) {
			return moment(date).format(this.config.moment.format);
		} else {
			return moment(date).format(format);
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

	//	get_thumbnail
	get_thumbnail(args: {
		text: string;
		img?: string;
		dataType?: "community" | "blog" | "question";
		format?: "landscape" | "profileHeader" | "twitter-card";
	}): Promise<{ src: string }> {
		return new Promise((resolve, reject) => {
			const { text, img, dataType, format } = args;

			//	Imageオブジェクトを生成
			var imgObject = new Canvas.Image();

			//	Canvasの生成
			const canvas = Canvas.createCanvas(500, 309);

			let rowTextLength = 22;

			imgObject.onload = () => {
				if (imgObject.src) console.log(imgObject.src.toString().substr(0, 50));

				//	textを出力する配列に変換
				const textArray = this.get_textArray(text, rowTextLength);

				//	image onload
				var ctx = canvas.getContext("2d");
				if (!ctx) return reject();

				//	draw image
				ctx.drawImage(imgObject, 0, 0, canvas.width, canvas.height);

				//	何行になるのか計算　=> max rows 3
				//	draw setting
				let fontSize = 40;
				let margin = 22;
				let unit_offsetY = fontSize + margin;
				let head_offset = 0;

				ctx.textAlign = "center";
				ctx.fillStyle = "rgb(83,70,69)";
				ctx.font = `${fontSize}px 'comic','meiryo-test','sazanami-gothic','sans-serif'`;

				//	draw text
				textArray.map((val, i) => {
					if (!ctx || i >= 3) return;
					const arrayLangth = textArray.length >= 3 ? 3 : textArray.length;
					const offsetNum = i - 0.5 * (arrayLangth - 1);
					const offsetY =
						canvas.height / 2 + unit_offsetY * offsetNum + head_offset;
					ctx.fillText(val.text, canvas.width / 2, offsetY);
				});

				//	set src
				if (canvas.toDataURL()) {
					return resolve({ src: canvas.toDataURL() });
				} else {
					return reject({});
				}
			};

			//	switch format
			switch (format) {
				case "landscape":
					canvas.width = 500;
					canvas.height = 309;
					rowTextLength = 22;
					break;
				case "profileHeader":
					canvas.width = 1000;
					canvas.height = 309;
					rowTextLength = 30;
					break;
				case "twitter-card":
					canvas.width = 600;
					canvas.height = 314;
					rowTextLength = 22;
					break;
				default:
					canvas.width = 500;
					canvas.height = 309;
					rowTextLength = 22;
					break;
			}

			//	switch dataType set src
			switch (dataType) {
				case "blog":
					imgObject.src = img ? img : Thumbnail_Landscape_Blog;
					break;
				case "community":
					imgObject.src = img ? img : Thumbnail_Landscape_Community;
					break;
				case "question":
					imgObject.src = img ? img : Thumbnail_Landscape_Question;
					break;
				default:
					imgObject.src = "";
					break;
			}
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

	//	get_base64ToContentType
	get_base64ToContentType(base64: string): string {
		return base64
			.toString()
			.slice(base64.indexOf(":") + 1, base64.indexOf(";"));
	}
	//	get_base64ToBuffer
	get_base64ToBuffer(base64: string): Buffer {
		return Buffer.from(base64.split(",")[1] || "", "base64");
	}
}
