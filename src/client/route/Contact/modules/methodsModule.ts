//  modules
import * as OrigModule from "@src/client/assets/modules/origModule";

//  types
import * as ContactMethodTypes from "@src/types/contact/methods";
import * as EnvTypes from "@src/types/environment";

//  classes
const origClass = new OrigModule.default();

export default class {
	/*-*-*-*-* properties *-*-*-*-*/
	regExp: {
		name: RegExp;
		email: RegExp;
		subject: RegExp;
		message: RegExp;
	};
	errorMessage: EnvTypes.Languages;
	//	default
	default = {
		maxCount: {
			name: 30,
			message: 300,
		},
		snackbar: {
			message: {
				success: {
					jp: "メッセージの送信を完了しました。",
					en: "The message sent successfully.",
				},
				error: {
					jp: "メッセージの送信に失敗しました。",
					en: "The message sent faild.",
				},
			},
		},
	};

	/*-*-*-*-* constructor *-*-*-*-*/
	constructor(
		name?: RegExp,
		subject?: RegExp,
		email?: RegExp,
		message?: RegExp,
		errorMessage?: EnvTypes.Languages
	) {
		this.regExp = {
			name: name || new RegExp(`^.{1,${this.default.maxCount.name}}$`),
			email:
				email || new RegExp(`\\w+([-+.]\\w)*@\\w+([-.]\\w)*.\\w+([-.]\\w)*`),
			subject: subject || new RegExp(`^.{1,100}$`),
			message:
				message ||
				new RegExp(`(.|\n|\r\n|\r){1,${this.default.maxCount.message}}$`),
		};
		this.errorMessage = errorMessage || {
			jp: "入力内容を確認してください。",
			en: "Please check input.",
		};
	}

	/*-*-*-*-* Valudation *-*-*-*-*/
	//	validation_submit_message
	validation_submit_message(
		body: ContactMethodTypes.Submit_Message_Body
	): EnvTypes.Status {
		const { name, message, subject, email } = body.form;
		const result_name = this.regExp.name.test(name);
		const result_email = this.regExp.email.test(email);
		const result_subject = this.regExp.subject.test(subject);
		const result_message = this.regExp.message.test(message);

		return {
			error: !result_name || !result_name || !result_subject || !result_message,
			errorList: {
				...(!result_name && { name: { ...this.errorMessage } }),
				...(!result_email && { email: { ...this.errorMessage } }),
				...(!result_subject && { subject: { ...this.errorMessage } }),
				...(!result_message && { message: { ...this.errorMessage } }),
			},
		};
	}

	/*-*-*-*-* Submit *-*-*-*-*/
	//	submit_message
	submit_message(
		body: ContactMethodTypes.Submit_Message_Body
	): Promise<ContactMethodTypes.Submit_Message_Return> {
		return new Promise((resolve, reject) => {
			const pathname = "/contact/submit/message";
			origClass
				.fetchCompany<
					ContactMethodTypes.Submit_Message_Body,
					ContactMethodTypes.Submit_Message_Return
				>(body, pathname)
				.then((val) => resolve(val))
				.catch((err) => reject(err));
		});
	}
}
