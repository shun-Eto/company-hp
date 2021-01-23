import * as React from "react";

//	components
import * as OrigDividier from "@src/client/assets/items/OrigDividers/Component";

//	materials
import {
	Avatar,
	Container,
	Divider,
	FormLabel,
	Grid,
	Link,
	Paper,
	Typography,
} from "@material-ui/core";
import {
	FontAwesomeIcon,
	FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

//	assets
import Img_Member_Eto from "@src/client/assets/images/aboutUs-member-eto.png";

//	modules
import * as OrigModule from "@src/client/assets/modules/origModule";
import * as OrigStyleModule from "@src/client/assets/styles/origStyles";

//	styles
import * as useStyles from "./_useStyles";

//	types
import * as EnvTypes from "@src/types/environment";

const origClass = new OrigModule.default();
const origStyle = new OrigStyleModule.default();

/*-*-*-*-* component props *-*-*-*-*/
interface ComponentProps {
	lang: keyof EnvTypes.Languages;
}
type Props = ComponentProps;
interface Member {
	id: string;
	form: {
		icon?: string;
		name?: EnvTypes.Languages;
		position?: EnvTypes.Languages;
		email?: string;
		birthday?: Date;
		description?: string;
		hobbies?: EnvTypes.Languages[];
	};
}
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang } = props;
	//	states
	//	styles
	const classes = useStyles.Item({});
	const memberItems: Member[] = [
		{
			id: "eto",
			form: {
				icon: Img_Member_Eto,
				name: { jp: "江藤 駿", en: "Eto Shun" },
				position: { jp: "代表執行役員 社長 | CTO", en: "President | CTO" },
				email: "shun.prog0830@gmail.com",
				birthday: new Date(1993, 8 - 1, 30),
				hobbies: [
					{ jp: "サッカー", en: "Soccer" },
					{ jp: "ピアノ", en: "Piano" },
					{ jp: "読書", en: "Reading Book" },
					{ jp: "麻雀", en: "Mahjong" },
				],
			},
		},
		{
			id: "eto",
			form: {
				icon: Img_Member_Eto,
				name: { jp: "江藤 駿", en: "Eto Shun" },
				position: { jp: "代表執行役員 社長 | CTO", en: "President | CTO" },
				email: "shun.prog0830@gmail.com",
				birthday: new Date(1993, 8 - 1, 30),
				hobbies: [
					{ jp: "サッカー", en: "Soccer" },
					{ jp: "ピアノ", en: "Piano" },
					{ jp: "読書", en: "Reading Book" },
					{ jp: "麻雀", en: "Mahjong" },
				],
			},
		},
		{
			id: "eto",
			form: {
				icon: Img_Member_Eto,
				name: { jp: "江藤 駿", en: "Eto Shun" },
				position: { jp: "代表執行役員 社長 | CTO", en: "President | CTO" },
				email: "shun.prog0830@gmail.com",
				birthday: new Date(1993, 8 - 1, 30),
				hobbies: [
					{ jp: "サッカー", en: "Soccer" },
					{ jp: "ピアノ", en: "Piano" },
					{ jp: "読書", en: "Reading Book" },
					{ jp: "麻雀", en: "Mahjong" },
				],
			},
		},
	];

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<Container maxWidth="md" className={classes.Item}>
			<Grid container spacing={4} justify="center">
				{memberItems.map((item, i) => (
					<MemberItem key={i} lang={lang} item={item} />
				))}
			</Grid>
		</Container>
	);
};

/*-*-*-*-* MemberItem *-*-*-*-*/
interface MemberItemProps {
	lang: keyof EnvTypes.Languages;
	item: Member;
}
const MemberItem: React.FC<MemberItemProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang, item } = props;
	const { form } = item;
	const name = React.useMemo(() => form.name?.[lang], [item]);
	const position = React.useMemo(() => form.position?.[lang], [item]);
	const birthday = React.useMemo(() => {
		if (!form.birthday) return "";
		const yearsOld = origClass.get_yearsOld(form.birthday);
		const birth = origClass.format_Date(form.birthday, "YYYY年MM月DD日", lang);
		return `${birth} ( ${yearsOld} )`;
	}, [item]);
	const email = React.useMemo(() => form.email, [item]);
	//	styles
	const classes = useStyles.MemberItem({});

	/*-*-*-*-* render *-*-*-*-*/
	return (
		<Grid xs={12} item sm={6}>
			<Paper className={classes.MemberItem} elevation={5}>
				{/*-*-*-*-* icon *-*-*-*-*/}
				<div className={classes.icon}>
					<Paper elevation={3}>
						<Avatar
							variant="rounded"
							className={classes["icon-img"]}
							src={form.icon}
						/>
					</Paper>
				</div>

				{/*-*-*-*-* form *-*-*-*-*/}
				<div className={classes.form}>
					{/* name */}
					{form.name && (
						<Typography className={classes["form-name"]}>{name}</Typography>
					)}

					{/* position */}
					{form.position && (
						<Typography className={classes["form-position"]}>
							{position}
						</Typography>
					)}

					<OrigDividier.Mesh
						color={origStyle.colorPicker("gray-300")}
						style={{ margin: "4px 0 8px" }}
					/>

					{/* birthday */}
					{form.birthday && (
						<MemberFormItem
							label={"Birthday"}
							faIcon={{ icon: ["fas", "birthday-cake"] }}
						>
							<Typography className={classes["form-text"]}>
								{birthday}
							</Typography>
						</MemberFormItem>
					)}

					{/* email */}
					{form.email && (
						<MemberFormItem
							label={"Email"}
							faIcon={{ icon: ["fas", "envelope"] }}
							type="email"
							value={email}
						>
							<Typography className={classes["form-text"]}>{email}</Typography>
						</MemberFormItem>
					)}

					{/* hobbies */}
					{form.hobbies && (
						<MemberFormItem label="Hobby" faIcon={{ icon: ["fas", "dice"] }}>
							{form.hobbies.map((val, i) => (
								<FormLabel key={i} className={classes["form-hobby"]}>
									{val[lang]}
								</FormLabel>
							))}
						</MemberFormItem>
					)}
				</div>
			</Paper>
		</Grid>
	);
};

interface MemberFormItemProps {
	label: string;
	faIcon: FontAwesomeIconProps;
	type?: "email" | "tel";
	value?: string;
}
const MemberFormItem: React.FC<MemberFormItemProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { label, type, value } = props;
	const classes = useStyles.MemberFormItem({});

	const href = React.useMemo(() => {
		if (type === "email" && value) return `mailto:${value}`;
		if (type === "tel" && value) return `tel:${value}`;
		return null;
	}, [type]);

	/*-*-*-*-* render *-*-*-*-*/
	return (
		<React.Fragment>
			<div className={classes.item}>
				<FontAwesomeIcon
					{...props.faIcon}
					className={classes["item-faIcon"]}
					size="sm"
					fixedWidth
				/>
				<FormLabel className={classes["item-label"]}>{label}</FormLabel>
				<FontAwesomeIcon
					className={classes["item-faIcon"]}
					icon={["fas", "caret-right"]}
					size="sm"
					fixedWidth
				/>

				{/* children */}
				<div className={classes["item-children"]}>
					{href ? (
						<Link
							href={href}
							type={type}
							className={classes["item-children-link"]}
						>
							{value}
						</Link>
					) : (
						props.children
					)}
				</div>
			</div>

			<Divider className={classes["item-divider"]} />
		</React.Fragment>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default Component;
