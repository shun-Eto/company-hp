import queryString from "query-string";

/*-*-*-*-* class *-*-*-*-*/
export default class {
	/*-*-*-*-* properties *-*-*-*-*/

	/*-*-*-*-* constructor *-*-*-*-*/
	constructor() {}

	/*-*-*-*-* methods *-*-*-*-*/
	//  get_vidoId
	get_vidoId(url: string): string | null {
		const videoUrl = new URL(url);
		const videoId = queryString.parse(videoUrl.search).v;
		if (videoId) {
			return videoId as string;
		} else {
			return null;
		}
	}
	//  get_thumbnail
	get_thumbnail(
		url: string,
		size?: "default" | "mq" | "hq" | "sd" | "max"
	): string | null {
		const videoId = this.get_vidoId(url);

		if (videoId) {
			switch (size) {
				case "default":
					return `http://img.youtube.com/vi/${videoId}/default.jpg`;
				case "mq":
					return `http://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
				case "hq":
					return `http://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
				case "sd":
					return `http://img.youtube.com/vi/${videoId}/sddefault.jpg`;
				case "max":
					return `http://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
				default:
					return `http://img.youtube.com/vi/${videoId}/default.jpg`;
			}
		} else {
			return null;
		}
	}
}
