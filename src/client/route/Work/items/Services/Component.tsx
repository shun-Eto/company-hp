import * as React from "react";

//	components
import * as OrigDividier from "@src/client/assets/items/OrigDividers/Component";

//	materials
import {
	Avatar,
	ButtonBase,
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
import Img_Service_Sopherre from "@src/client/assets/images/work-service-sopherre.png";
import Img_Service_Sophic from "@src/client/assets/images/work-service-sophic.png";
import Img_Service_LedgerAble from "@src/client/assets/images/work-service-ledgerAble.png";
import Img_Service_Redger from "@src/client/assets/images/work-service-redger.png";
import Img_Service_Web from "@src/client/assets/images/work-service-web.png";
import Img_Service_Education from "@src/client/assets/images/work-service-education.png";

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
		appStore?: string;
		playStore?: string;
		gitHub?: string;
		pathname?: string;
		description?: string;
		"contact-pathname"?: string;
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
			id: "sopherre",
			form: {
				icon: Img_Service_Sopherre,
				name: { jp: "Sopherre", en: "Sopherre" },
				appStore: "https://www.apple.com/jp/app-store/",
				playStore: "https://play.google.com/store?hl=ja&gl=US",
				pathname: "https://www.sopherre.com/",
				description:
					"教育革新プラットフォーム。\nユーザビリティとコンテンツのクオリティを重視し改善を繰り返しています。\n",
			},
		},
		{
			id: "sophic",
			form: {
				icon: Img_Service_Sophic,
				name: { jp: "Sophic", en: "Sophic" },
				appStore: "https://www.apple.com/jp/app-store/",
				playStore: "https://play.google.com/store?hl=ja&gl=US",
				pathname: "https://sophic.sopherre.com/",
				description:
					"カードゲームを通して論理的思考を鍛える！\n子供から大人まで幅広い人に楽しんでもらえる仕様になっております。",
			},
		},
		{
			id: "Redger",
			form: {
				icon: Img_Service_Redger,
				name: { jp: "Redger", en: "Redger" },
				description:
					"工数管理等、業務効率化システムの開発。\nダッシュボードやグラフィクスを多分に使い、他にはないオリジナルの付加価値を提供します。",
			},
		},
		{
			id: "corporate",
			form: {
				icon: Img_Service_Web,
				name: {
					jp: "Webサイト製作",
					en: "Web Site",
				},
				gitHub: "https://github.com/shun-Eto/company-hp",
				description:
					"モダンなUI/UXのを意識し、永く利用され続けるサイトの作成・保守管理。\nコーポレイト作成等、幅広いWebサイトの製作を行っています。",
				"contact-pathname": "/contact?subject=web",
			},
		},
		{
			id: "education",
			form: {
				icon: Img_Service_Education,
				name: {
					jp: "学習支援活動",
					en: "Education Support",
				},
				description:
					"学校や企業に対し、プログラミング学習の支援活動を行っております。",
				"contact-pathname": "/contact?subject=education",
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

					<OrigDividier.Mesh
						color={origStyle.colorPicker("gray-300")}
						style={{ margin: "4px 0 8px" }}
					/>

					{/* pathname */}
					{form.pathname && (
						<FormItem
							faIcon={{ icon: ["fas", "link"] }}
							label="Link"
							type="link"
							value={form.pathname}
						/>
					)}

					{/* description */}
					{form.description && (
						<FormItem
							faIcon={{ icon: ["fas", "signature"] }}
							label="Description"
							value={form.description}
							type="description"
						/>
					)}

					{/* actions */}
					<div className={classes["form-actions"]}>
						{form.playStore && (
							<ActionItem
								faIcon={{ icon: ["fab", "google-play"] }}
								pathname={form.playStore}
								type={"playStore"}
							/>
						)}

						{form.appStore && (
							<ActionItem
								faIcon={{ icon: ["fab", "app-store"] }}
								pathname={form.appStore}
								type={"appStore"}
							/>
						)}

						{form.gitHub && (
							<ActionItem
								faIcon={{ icon: ["fab", "github"] }}
								pathname={form.gitHub}
								type={"gitHub"}
							/>
						)}
					</div>

					{/* contact */}
					{form["contact-pathname"] && (
						<div className={classes["form-contactPath"]}>
							<OrigPathLink lang={lang} pathname={form["contact-pathname"]} />
						</div>
					)}
				</div>
			</Paper>
		</Grid>
	);
};

/*-*-*-*-* ActionItem *-*-*-*-*/
interface ActionItemProps {
	faIcon: FontAwesomeIconProps;
	pathname: string;
	type?: string;
}
const ActionItem = (props: ActionItemProps) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { pathname, faIcon, type } = props;
	//	styles
	const classes = useStyles.ActionItem({ type });

	/*-*-*-*-* handlers *-*-*-*-*/
	const handleOnClick = () => {
		const elm_a = document.createElement("a");
		elm_a.setAttribute("target", "_blank");
		elm_a.setAttribute("href", pathname);
		elm_a.click();
	};

	/*-*-*-*-* render *-*-*-*-*/
	return (
		<ButtonBase
			className={classes.ActionItem}
			//	handlers
			onClick={handleOnClick}
		>
			<Paper className={classes.Paper}>
				<FontAwesomeIcon {...faIcon} fixedWidth className={classes.faIcon} />
			</Paper>
		</ButtonBase>
	);
};

/*-*-*-*-* FormItem *-*-*-*-*/
interface FormItemProps {
	label: string;
	faIcon: FontAwesomeIconProps;
	type?: "link" | "description";
	value?: string;
}
const FormItem: React.FC<FormItemProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { label, type, value } = props;
	const classes = useStyles.FormItem({});

	/*-*-*-*-* handlers *-*-*-*-*/
	const handleOnClick_link = () => {
		if (value && type === "link") {
			const elem_a = document.createElement("a");
			elem_a.setAttribute("target", "_blank");
			elem_a.setAttribute("href", value);
			elem_a.click();
		}
	};

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
					{type === "link" ? (
						<Link
							className={classes["item-children-link"]}
							onClick={handleOnClick_link}
						>
							{value}
						</Link>
					) : (
						props.children
					)}
				</div>
			</div>

			{type === "description" && (
				<Typography className={classes["item-description"]}>{value}</Typography>
			)}

			<Divider className={classes["item-divider"]} />
		</React.Fragment>
	);
};

/*-*-*-*-* OrigLink *-*-*-*-*/
interface OrigPathLinkProps {
	lang: keyof EnvTypes.Languages;
	pathname: string;
}
const OrigPathLink: React.FC<OrigPathLinkProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang, pathname } = props;
	const label: EnvTypes.Languages = {
		jp: "お問い合わせはこちら",
		en: "This is the contact details.",
	};
	const classes = useStyles.OrigPathLink({});

	/*-*-*-*-* render *-*-*-*-*/
	return (
		<Link className={classes.Link} href={pathname}>
			<FontAwesomeIcon
				icon={["fas", "angle-right"]}
				className={classes.faIcon}
			/>
			{label[lang]}
		</Link>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default Component;
