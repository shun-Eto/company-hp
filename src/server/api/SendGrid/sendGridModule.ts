import sgMail from "@sendgrid/mail";

//	types
import * as SelfTypes from "./_types";

//	default class
export default class {
	/*-*-*-*-* properties *-*-*-*-*/
	config: SelfTypes.Config = {
		initMessage: {
			from: { email: "no_reply@sopherre.com", name: "Sopherre" },
			to: "sopherre@gmail.com",
			subject: "Nothing",
			html: "<strong>Nothing</strong>",
			text: "プレーンテキスト表示からHTML表示に変更してください。",
		},
		apikey: process.env.SENDGRID_API || "",
	};

	/********** sendMail **********/
	sendMail(message: sgMail.MailDataRequired): Promise<{ status: boolean }> {
		return new Promise((resolve, reject) => {
			sgMail.setApiKey(this.config.apikey);
			sgMail
				.send(message)
				.then((val) => {
					return resolve({ status: true });
				})
				.catch((err) => {
					console.log("Send Mail : Failed");
					return reject(err);
				});
		});
	}

	/********** Base64ToString **********/
	base64ToString(base64HTML: string): string {
		const fileData = base64HTML.split(",")[1];
		const buffer = Buffer.from(fileData, "base64");
		const decodedHTML = buffer.toString();

		return decodedHTML;
	}

	/********** format_html **********/
	format_html(args: {
		html: string;
		css: string;
		formats: { [key: string]: string };
	}): string {
		const { html, css, formats } = args;
		const IndexHTML_string = this.base64ToString(html);
		const indexCss_string = this.base64ToString(css);
		let formatedHtml = IndexHTML_string;

		//	変数の書き換え
		for (let key in formats) {
			formatedHtml = formatedHtml.replace(`$${key}`, formats[key]);
		}
		formatedHtml = formatedHtml.replace(
			`$cssStyle`,
			`<style type="text/css">${indexCss_string}</style>`
		);

		return formatedHtml;
	}
}
