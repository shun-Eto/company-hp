import * as React from "react";

//	components

//	materials
import { Container, Divider, Grid, Paper, Typography } from "@material-ui/core";
import {} from "@fortawesome/react-fontawesome";

//	styles
import * as useStyles from "./_useStyles";

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* component props *-*-*-*-*/
interface ComponentProps {
	lang: keyof EnvTypes.Languages;
}
type Props = ComponentProps;
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang } = props;
	//	states
	const anchor = React.useRef<HTMLDivElement>(null);
	//	styles
	const classes = useStyles.Item({});
	//	items
	const infoItems: EnvTypes.MenuItem[] = [
		{
			id: "company-name",
			value: "company-name",
			label: { jp: "社名", en: "Company Name" },
			children: (
				<Typography className={classes["children-text"]}>
					Sopherre株式会社 [ Sopherre, Inc. ]
				</Typography>
			),
		},
		{
			id: "address",
			value: "address",
			label: { jp: "所在地", en: "Address" },
			children: (
				<Typography className={classes["children-text"]}>
					143-001 東京都品川区大井3-19-13-203
				</Typography>
			),
		},
		{
			id: "representative",
			value: "representative",
			label: { jp: "代表者", en: "Representative" },
			children: (
				<Typography className={classes["children-text"]}>
					江藤 駿 [ Eto Shun ]
				</Typography>
			),
		},
		{
			id: "foundation",
			value: "foundation",
			label: { jp: "設立", en: "Foundation" },
			children: (
				<Typography className={classes["children-text"]}>
					2019年11月11日
				</Typography>
			),
		},
		{
			id: "capital",
			value: "capital",
			label: { jp: "資本金", en: "Capital" },
			children: (
				<Typography className={classes["children-text"]}>
					10,000,000 円 ( 2021年2月末現在 )
				</Typography>
			),
		},
		{
			id: "business-portfolio",
			value: "business-portfolio",
			label: { jp: "事業内容", en: "Business Portfolio" },
			children: (
				<div className={classes["children-wrapper"]}>
					<Typography className={classes["children-text"]}>
						教育環境改善事業
					</Typography>
					<Typography className={classes["children-text"]}>
						学習支援事業
					</Typography>
					<Typography className={classes["children-text"]}>
						業務改善システム開発事業
					</Typography>
				</div>
			),
		},
	];

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<Container className={classes.Item} maxWidth="md" ref={anchor}>
			<Paper className={classes.Paper} elevation={6}>
				{infoItems.map((item, i) => (
					<InfoItem
						key={i}
						lang={lang}
						item={item}
						children={item.children}
					/>
				))}
			</Paper>
		</Container>
	);
};

/*-*-*-*-* InfoItem *-*-*-*-*/
interface InfoItemProps {
	lang: keyof EnvTypes.Languages;
	item: EnvTypes.MenuItem;
}
const InfoItem: React.FC<InfoItemProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { item, children, lang } = props;
	const classes = useStyles.InfoItem({});

	/*-*-*-*-* render *-*-*-*-*/
	return (
		<React.Fragment>
			<Grid container className={classes.InfoItem}>
				{/*-*-*-*-* label *-*-*-*-*/}
				<Grid item xs={3} className={classes.label}>
					<Typography className={classes["label-Typography"]}>
						{item.label[lang]}
					</Typography>
				</Grid>

				{/* text */}
				<Grid item xs={9} className={classes.text}>
					{children}
				</Grid>
			</Grid>
			<Divider />
		</React.Fragment>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default Component;
