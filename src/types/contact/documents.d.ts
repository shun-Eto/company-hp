export interface Message {
	id: string;
	date: {
		orig: Date;
		jp: string;
		en: string;
	};
	form: {
		name: string;
		email: string;
		subject: string;
		message: string;
	};
}
