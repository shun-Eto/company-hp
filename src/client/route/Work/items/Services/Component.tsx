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
		appStore?: string;
		playStore?: string;
		gitHub?: string;
		pathname?: string;
		description?: string;
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
				icon: Img_Member_Eto,
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
				icon: Img_Member_Eto,
				name: { jp: "Sophic", en: "Sophic" },
				appStore: "https://www.apple.com/jp/app-store/",
				playStore: "https://play.google.com/store?hl=ja&gl=US",
				pathname: "https://sophic.sopherre.com/",
				description:
					"カードゲームを通して論理的思考を鍛える！\n子供から大人まで幅広い人に楽しんでもらえる仕様になっております。",
			},
		},
		{
			id: "ledgerAble",
			form: {
				icon: Img_Member_Eto,
				name: { jp: "LedgerAble", en: "LedgerAble" },
				description:
					"工数管理等、業務効率化システムの開発。\nダッシュボードやグラフィクスを多分に使い、他にはないオリジナルの付加価値を提供します。",
			},
		},
		{
			id: "corporate",
			form: {
				icon: Img_Member_Eto,
				name: {
					jp: "Webサイト作成",
					en: "Corporate / Web Site",
				},
				gitHub: "https://github.com/shun-Eto/company-hp",
				description:
					"モダンなUI/UXのを意識し、永く利用され続けるサイトの作成・保守管理。\nコーポレイト作成等、幅広いWebサイトの製作を行っています。",
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

					{form.pathname && (
						<FormItem
							faIcon={{ icon: ["fas", "link"] }}
							label="Link"
							type="link"
							value={form.pathname}
						/>
					)}

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
						<Link href={value} className={classes["item-children-link"]}>
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

/*-*-*-*-* default *-*-*-*-*/
export default Component;