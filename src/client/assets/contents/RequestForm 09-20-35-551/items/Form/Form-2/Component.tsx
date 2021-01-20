import * as React from "react";
import ReactDatePicker from "react-datepicker";

//	components
import * as OrigDatePickers from "@src/client/assets/items/OrigDatePickers/Component";
import * as OrigStamps from "@src/client/assets/items/OrigStamps/Component";

//	materials
import {
	Checkbox,
	createStyles,
	FormControl,
	FormControlLabel,
	InputBase,
	InputLabel,
	MenuItem,
	Select,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TextField,
	TextFieldProps,
	Theme,
	Typography,
	withStyles,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Autocomplete } from "@material-ui/lab";

//	modules
import * as RequestFormModule from "@src/client/assets/contents/RequestForm/modules/selfModule";

//	styles
import * as useStyles from "./_useStyles";

//	types
import * as EnvTypes from "@src/types/environment";
import { colorPicker } from "@src/client/assets/styles/origStyles";
import { basicStyles } from "@src/client/assets/styles/basicStyles";

//	classes
const reqFormClass = new RequestFormModule.default();

/*-*-*-*-* component props *-*-*-*-*/
interface ComponentProps {
	lang: keyof EnvTypes.Languages;
}
type Props = ComponentProps;
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang } = props;
	//	states
	const requestArticles = reqFormClass.ledger.tableBody.reqArticles;
	//	styles
	const classes = useStyles.Item({});

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div className={classes.Item}>
			<Table className={classes["Item-table"]}>
				{/* head */}
				<TableHead className={classes["Item-tableHead"]}>
					<TableRow>
						<TableCell style={{ width: 115, padding: 0 }}></TableCell>
						<TableCell style={{ width: 175, padding: 0 }}></TableCell>
						<TableCell style={{ width: 97, padding: 0 }}></TableCell>
						<TableCell style={{ width: 97, padding: 0 }}></TableCell>
						<TableCell style={{ width: 97, padding: 0 }}></TableCell>
						<TableCell style={{ width: 109, padding: 0 }}></TableCell>
						<TableCell style={{ width: 97, padding: 0 }}></TableCell>
						<TableCell style={{ width: 97, padding: 0 }}></TableCell>
					</TableRow>
				</TableHead>

				{/* body */}
				<TableBody>
					{/* row */}
					<TableRow>
						<StyledCell rowSpan={1} colSpan={1}>
							<SmallTypography>設計分類</SmallTypography>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={5}>
							<SmallTypography>設計分類</SmallTypography>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={2}>
							<StyledCheckbox label={"折込設計"} />
						</StyledCell>
					</TableRow>

					{/* row */}
					<TableRow>
						<StyledCell rowSpan={2} colSpan={1}>
							<SmallTypography>依頼項目</SmallTypography>
						</StyledCell>
						<StyledCell rowSpan={2} colSpan={1}>
							<SmallTypography>備考</SmallTypography>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={3}>
							<SmallTypography>納期(依頼元着)</SmallTypography>
						</StyledCell>
						<StyledCell
							rowSpan={1}
							colSpan={1}
							style={{ borderRight: "unset" }}
						>
							<SmallTypography>振替単価</SmallTypography>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={2} style={{ borderLeft: "unset" }}>
							<StyledTextField />
						</StyledCell>
					</TableRow>

					{/* row */}
					<TableRow>
						<StyledCell rowSpan={1} colSpan={1}>
							<SmallTypography>希望</SmallTypography>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={1}>
							<SmallTypography>協議</SmallTypography>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={1}>
							<SmallTypography>実納期</SmallTypography>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={1}>
							<SmallTypography>工数</SmallTypography>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={2}>
							<SmallTypography>金額</SmallTypography>
						</StyledCell>
					</TableRow>

					{/* request articles */}
					{requestArticles.map((article, i) => (
						<RequestArticle key={i} lang={lang} label={article.label[lang]} />
					))}

					{/* row */}
					<TableRow>
						<StyledCell
							rowSpan={5}
							colSpan={4}
							style={{ borderRight: `unset` }}
						>
							<Typography className={classes["spMention-label"]}>
								【 特記事項 】
							</Typography>
							<TextField
								fullWidth
								rows={9}
								multiline
								variant="outlined"
								rowsMax={9}
							/>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={1}>
							<div className={classes["outsourceName-name"]}>
								<OutsourceList />
							</div>
							<OrigInput label="外注単価" />
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={1}>
							<div className={classes.outsourceHour}>
								<div className={classes["outsourceHour-month"]}>
									<MonthSelect label={"検収月"} />
								</div>
								<div className={classes["outsourceHour-hour"]}>
									<OrigInput label={"工数"} />
								</div>
							</div>
							<OrigInput label={"社内工数"} InputProps={{ readOnly: true }} />
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={2}>
							<div className={classes["outsourceMoney-money"]}>
								<OrigInput />
							</div>
							<div className={classes["outsourceMoney-tax"]}>
								( 税率 :
								<OrigInput style={{ margin: "0 4px" }} />)
							</div>
						</StyledCell>
					</TableRow>

					{/* row */}
					<TableRow>
						<StyledCell rowSpan={1} colSpan={1}>
							<SmallTypography>チェック</SmallTypography>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={1}>
							<div className={classes.checkHour}>
								<div className={classes["checkHour-PIC"]}>
									<PICAuthcomplete />
								</div>
								<div className={classes["checkHour-hour"]}>
									<OrigInput label={"工数"} />
								</div>
							</div>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={2}>
							<OrigInput />
						</StyledCell>
					</TableRow>

					{/* row */}
					<TableRow>
						<StyledCell rowSpan={1} colSpan={1}>
							<SmallTypography>合計</SmallTypography>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={1}>
							<div className={classes.checkHour}>
								<div className={classes["checkHour-PIC"]}>
									<MonthSelect label="振替月" />
								</div>
								<div className={classes["checkHour-hour"]}>
									<OrigInput label={"工数"} />
								</div>
							</div>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={2}>
							<OrigInput />
						</StyledCell>
					</TableRow>

					{/* row */}
					<TableRow>
						<StyledCell
							rowSpan={2}
							colSpan={1}
							style={{ borderLeft: "unset" }}
						/>
						<StyledCell rowSpan={1} colSpan={1}>
							<SmallTypography>承認</SmallTypography>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={1}>
							<SmallTypography>チェック</SmallTypography>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={1}>
							<SmallTypography>担当</SmallTypography>
						</StyledCell>
					</TableRow>

					{/* row */}
					<TableRow>
						<StyledCell rowSpan={1} colSpan={1} style={{ height: 100 }}>
							<OrigStamps.Square
								width={70}
								labels={{ start: "防音技", center: "19/12/01", end: "江藤" }}
							/>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={1}>
							<OrigStamps.Square
								width={70}
								labels={{ start: "防音技", center: "19/12/01", end: "江藤" }}
							/>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={1}>
							<OrigStamps.Square
								width={70}
								labels={{ start: "防音技", center: "19/12/01", end: "江藤" }}
							/>
						</StyledCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	);
};

/*-*-*-*-* MonthSelect *-*-*-*-*/
interface MonthSelectProps {
	label: string;
}
const MonthSelect: React.FC<MonthSelectProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { label } = props;
	//	styles
	const classes = useStyles.MonthSelect({});

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<FormControl fullWidth variant="outlined">
			<InputLabel variant="outlined" className={classes["label"]}>
				{label}
			</InputLabel>
			<Select
				variant="outlined"
				label={label}
				classes={{ root: classes["select"], icon: classes.icon }}
			>
				<MenuItem value="test">test</MenuItem>
			</Select>
		</FormControl>
	);
};

/*-*-*-*-* OutsourceList *-*-*-*-*/
const OutsourceList: React.FC = () => {
	/*-*-*-*-* properties *-*-*-*-*/
	const classes = useStyles.OutsourceList({});

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<FormControl fullWidth variant="outlined">
			<InputLabel variant="outlined" className={classes["label"]}>
				外注
			</InputLabel>
			<Select
				variant="outlined"
				label="外注"
				classes={{ root: classes["select"] }}
			>
				<MenuItem value="test">test</MenuItem>
			</Select>
		</FormControl>
	);
};

/*-*-*-*-* RequestArticle *-*-*-*-*/
interface RequestArticleProps {
	lang: keyof EnvTypes.Languages;
	label: string;
}
const RequestArticle: React.FC<RequestArticleProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang, label } = props;
	//	states
	//	styles
	const classes = useStyles.RequestArticle({});

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<TableRow>
			<StyledCell rowSpan={1} colSpan={1} style={{ padding: "0 2px" }}>
				<StyledCheckbox label={label} />
			</StyledCell>
			<StyledCell rowSpan={1} colSpan={1}>
				<StyledTextField multiline rows={2} rowsMax={2} />
			</StyledCell>
			<StyledCell rowSpan={1} colSpan={1}>
				<OrigDatePickers.Basic
					lang={lang}
					theme={{ fontSize: basicStyles["fontSize-xs"] }}
				/>
			</StyledCell>
			<StyledCell rowSpan={1} colSpan={1}>
				<OrigDatePickers.Basic
					lang={lang}
					theme={{ fontSize: basicStyles["fontSize-xs"] }}
				/>
			</StyledCell>
			<StyledCell rowSpan={1} colSpan={1}>
				<OrigDatePickers.Basic
					lang={lang}
					theme={{ fontSize: basicStyles["fontSize-xs"] }}
				/>
			</StyledCell>
			<StyledCell rowSpan={1} colSpan={1}>
				<div className={classes["articleHour"]}>
					<div className={classes["articleHour-hour"]}>
						<PICAuthcomplete />
					</div>
					<div className={classes["articleHour-PIC"]}>
						<OrigInput />
					</div>
				</div>
			</StyledCell>
			<StyledCell rowSpan={1} colSpan={2}>
				<OrigInput />
			</StyledCell>
		</TableRow>
	);
};

/*-*-*-*-* OrigInput *-*-*-*-*/
const OrigInput: React.FC<TextFieldProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const classes = useStyles.OrigInput({});

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<TextField
			{...props}
			fullWidth
			className={classes["text"]}
			variant="outlined"
			InputProps={{
				...props.InputProps,
				classes: {
					root: classes["text-root"],
					input: classes["text-input"],
				},
			}}
			InputLabelProps={{
				classes: { root: classes.label },
			}}
		/>
	);
};

/*-*-*-*-* PICAuthcomplete *-*-*-*-*/
const PICAuthcomplete: React.FC = () => {
	/*-*-*-*-* properties *-*-*-*-*/
	const techPICs = [
		{ id: "", text: "江藤" },
		{ id: "", text: "１２３" },
	];
	//	styles
	const classes = useStyles.PICAuthcomplete({});

	return (
		<Autocomplete
			freeSolo
			options={techPICs.map((option) => option.text)}
			className={classes["PIC"]}
			classes={{ popper: classes["popper"] }}
			renderInput={(params) => (
				<TextField
					{...params}
					label="担当者"
					variant="outlined"
					InputProps={{
						...params.InputProps,
						classes: {
							root: classes["PIC-root"],
							input: classes["PIC-input"],
						},
						endAdornment: undefined,
					}}
					InputLabelProps={{
						...params.InputLabelProps,
						classes: { root: classes["PIC-label"] },
					}}
				/>
			)}
		/>
	);
};

/*-*-*-*-* StyledCell *-*-*-*-*/
const StyledCell = withStyles((theme: Theme) =>
	createStyles({
		root: {
			padding: "2px 4px",
			textAlign: "center",
			border: `solid 1px ${colorPicker("gray")}`,
		},
	})
)(TableCell);

/*-*-*-*-* StyledTextField *-*-*-*-*/
const StyledTextField: React.FC<TextFieldProps> = (props) => {
	const classes = useStyles.StyledTextField({});
	return (
		<TextField
			{...props}
			variant="outlined"
			fullWidth
			inputProps={{ className: classes.input }}
			InputProps={{ classes: { multiline: classes.multiline } }}
		/>
	);
};

/*-*-*-*-* SmallTypography *-*-*-*-*/
const SmallTypography = withStyles((theme: Theme) =>
	createStyles({
		root: {
			fontSize: basicStyles["fontSize-sm"],
		},
	})
)(Typography);

/*-*-*-*-* StyledCheckbox *-*-*-*-*/
const StyledCheckbox: React.FC<{
	label: string;
}> = (props) => {
	const classes = useStyles.StyledCheckbox({});
	return (
		<FormControlLabel
			classes={{
				root: classes["FormControlLabel-root"],
				label: classes["FormControlLabel-label"],
			}}
			label={props.label}
			control={<Checkbox classes={{ root: classes.Checkbox }} size="small" />}
		/>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default Component;
