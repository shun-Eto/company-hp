//  types
import * as EnvTypes from "@src/types/environment";

interface ListItem {
	label: EnvTypes.Languages | string;
	value: string;
}

//  default class
export default class {
	/*-*-*-*-* properties *-*-*-*-*/
	config = {};

	/*-*-*-*-* methods *-*-*-*-*/
}

//  programing
export const programings: ListItem[] = [
	{ label: "C", value: "" },
	{ label: "C++", value: "c++" },
	{ label: "Java", value: "java" },
	{ label: "Javascript", value: "javascript" },
	{ label: "Typescript", value: "typescript" },
	{ label: "C#", value: "c#" },
	{ label: "PHP", value: "php" },
	{ label: "HTML", value: "html" },
	{ label: "CSS", value: "css" },
	{ label: "VBA", value: "vba" },
	{ label: "Ruby", value: "ruby" },
	{ label: "Perl", value: "perl" },
	{ label: "Python", value: "python" },
	{ label: "Swift", value: "swift" },
	{ label: { jp: "その他", en: "other" }, value: "other" },
];

//  tags
export const tags: ListItem[] = [
	{ label: { jp: "小学校", en: "Primary School" }, value: "primary school" },
	{
		label: { jp: "中学校", en: "Junior High School" },
		value: "junior high school",
	},
	{ label: { jp: "高校", en: "High School" }, value: "high school" },
	{ label: { jp: "大学", en: "University" }, value: "university" },
	{ label: { jp: "大学院", en: "Graduate School" }, value: "Graduate school" },
];

//  subjects
export const subjects: ListItem[] = [
	{
		label: { jp: "イラスト", en: "Illustration" },
		value: "illustration",
	},
];

//  categories
export const categories: ListItem[] = [
	{ label: { jp: "プログラミング", en: "Programming" }, value: "programing" },
	{ label: { jp: "教育", en: "Education" }, value: "education" },
	{ label: { jp: "美術", en: "Art" }, value: "art" },
];
