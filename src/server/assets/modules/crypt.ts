import crypto from "crypto";

export default class {
	/*-*-*-*-* properties *-*-*-*-*/
	config = {
		algorithm: "aes-256-ctr",
		IV_LENGTH: 16,
		SALT: process.env.CRYPT_SALT || "",
		PASSWORD: process.env.CRYPT_PASSWORD || "",
	};

	/*-*-*-*-* methods *-*-*-*-*/
	//	encrypt
	encrypt(text: string): string {
		const iv = crypto.randomBytes(this.config.IV_LENGTH);
		const key = crypto.scryptSync(this.config.PASSWORD, this.config.SALT, 32);
		const cipher = crypto.createCipheriv(this.config.algorithm, key, iv);

		let encrypted = cipher.update(text);
		encrypted = Buffer.concat([encrypted, cipher.final()]);
		return iv.toString("hex") + ":" + encrypted.toString("hex");
	}

	//	decrypt
	decrypt(text: string): string {
		const textParts = text.split(":");
		const arrayBuffer = textParts.shift();
		if (!arrayBuffer) return "";
		const iv = Buffer.from(arrayBuffer, "hex");
		const key = crypto.scryptSync(this.config.PASSWORD, this.config.SALT, 32);
		const encryptedText = Buffer.from(textParts.join(":"), "hex");

		const decipher = crypto.createDecipheriv(this.config.algorithm, key, iv);
		let decrypted = decipher.update(encryptedText);
		decrypted = Buffer.concat([decrypted, decipher.final()]);
		return decrypted.toString();
	}
}
