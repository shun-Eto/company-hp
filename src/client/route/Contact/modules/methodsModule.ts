//  modules
import * as OrigModule from "@src/client/assets/modules/origModule";

//  types
import * as ContactMethodTypes from "@src/types/contact/methods";

//  classes
const origClass = new OrigModule.default();

export default class {
	/*-*-*-*-* Valudation *-*-*-*-*/
	validate_submit_message(
		body: ContactMethodTypes.Submit_Message_Body
	): { status: boolean; error: { [key: string]: string } } {
		const { name, email, subject, message } = body.form;
		return {
			status: true,
			error: { test: "test" },
		};
	}

	/*-*-*-*-* Submit *-*-*-*-*/
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
