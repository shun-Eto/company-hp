import sgMail from "@sendgrid/mail";

export interface Config {
	initMessage: sgMail.MailDataRequired;
	apikey: string;
}
