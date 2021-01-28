//  types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* Submit *-*-*-*-*/
//  Submit_Message
export interface Submit_Message_Body {
	lang: keyof EnvTypes.Languages;
	form: {
		name: string;
		email: string;
		subject: string;
		message: string;
	};
}
export interface Submit_Message_Return {
	status: EnvTypes.Status;
}
