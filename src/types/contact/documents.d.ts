export interface Message {
	date: Date;
	form: {
		name: string;
		email: string;
		subject: string;
		message: string;
	};
}
