import * as React from "react";

//	components
import * as OrigStamps from "@src/client/assets/items/OrigStamps/Component";

//	materials
import {
	Checkbox,
	createStyles,
	FormControlLabel,
	FormGroup,
	Hidden,
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

//	styles
import * as useStyles from "./_useStyles";

//	types
import * as EnvTypes from "@src/types/environment";
import { colorPicker } from "@src/client/assets/styles/origStyles";
import { basicStyles } from "@src/client/assets/styles/basicStyles";

/*-*-*-*-* component props *-*-*-*-*/
interface ComponentProps {
	lang: keyof EnvTypes.Languages;
}
type Props = ComponentProps;
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const {} = props;
	//	states
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
					<TableRow style={{ height: 0, minHeight: 0, padding: 0 }}>
						<TableCell style={{ width: 104, padding: 0 }}></TableCell>
						<TableCell style={{ width: 104, padding: 0 }}></TableCell>
						<TableCell style={{ width: 104, padding: 0 }}></TableCell>
						<TableCell style={{ width: 104, padding: 0 }}></TableCell>
						<TableCell style={{ width: 104, padding: 0 }}></TableCell>
						<TableCell style={{ width: 52, padding: 0 }}></TableCell>
						<TableCell style={{ width: 104, padding: 0 }}></TableCell>
						<TableCell style={{ width: 104, padding: 0 }}></TableCell>
						<TableCell style={{ width: 104, padding: 0 }}></TableCell>
					</TableRow>
				</TableHead>

				<TableBody className={classes["Item-tableBody"]}>
					{/* row */}
					<TableRow>
						<StyledCell rowSpan={2} colSpan={1}>
							<SmallTypography>設計番号</SmallTypography>
						</StyledCell>
						<StyledCell rowSpan={2} colSpan={3}>
							<StyledTextField />
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={1}>
							<SmallTypography>受付</SmallTypography>
						</StyledCell>
						<StyledCell rowSpan={7} colSpan={1}>
							<Typography>
								発<br />注<br />者
							</Typography>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={1}>
							<SmallTypography>発信日</SmallTypography>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={2}>
							<StyledTextField />
						</StyledCell>
					</TableRow>

					{/* row */}
					<TableRow>
						<StyledCell rowSpan={2} colSpan={1}>
							<OrigStamps.Square
								width={70}
								labels={{ start: "防音技", center: "19/12/22", end: "江藤" }}
							/>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={1}>
							<SmallTypography>依頼番号</SmallTypography>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={2}>
							<StyledTextField />
						</StyledCell>
					</TableRow>

					{/* row */}
					<TableRow>
						<StyledCell rowSpan={1} colSpan={4}>
							<Typography style={{ padding: "12px 0px" }}>
								防音技術部 防音技術室 室長宛
							</Typography>
						</StyledCell>
						<StyledCell rowSpan={2} colSpan={3}>
							<Typography>防音技術部</Typography>
							<Typography>防音技術室</Typography>
						</StyledCell>
					</TableRow>

					{/* row */}
					<TableRow>
						<StyledCell rowSpan={1} colSpan={3}>
							<SmallTypography>処理区分</SmallTypography>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={1}>
							<SmallTypography>処理区分判断</SmallTypography>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={1}>
							<SmallTypography>内容確認</SmallTypography>
						</StyledCell>
					</TableRow>

					{/* row */}
					<TableRow>
						<StyledCell
							rowSpan={2}
							colSpan={3}
							style={{ height: 82, padding: "0 8px" }}
						>
							<FormGroup row style={{ justifyContent: "center" }}>
								<StyledCheckbox label={"受注検討"} />
								<StyledCheckbox label={"設計開発"} />
								<StyledCheckbox label={"工務"} />
							</FormGroup>
							<StyledTextField multiline rowsMax={2} />
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={1}>
							<SmallTypography>(部署長)</SmallTypography>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={1}>
							<SmallTypography>(担当者)</SmallTypography>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={1}>
							<SmallTypography>承認</SmallTypography>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={1}>
							<SmallTypography>審議</SmallTypography>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={1}>
							<SmallTypography>作成</SmallTypography>
						</StyledCell>
					</TableRow>

					{/* row */}
					<TableRow>
						<StyledCell rowSpan={2} colSpan={1}>
							<OrigStamps.Square
								width={70}
								labels={{ start: "防音技", center: "19/12/22", end: "江藤" }}
							/>
						</StyledCell>
						<StyledCell rowSpan={2} colSpan={1}>
							<OrigStamps.Square
								width={70}
								labels={{ start: "防音技", center: "19/12/22", end: "江藤" }}
							/>
						</StyledCell>
						<StyledCell rowSpan={2} colSpan={1}>
							<OrigStamps.Square
								width={70}
								labels={{ start: "防音技", center: "19/12/22", end: "江藤" }}
							/>
						</StyledCell>
						<StyledCell rowSpan={2} colSpan={1}>
							<OrigStamps.Square
								width={70}
								labels={{ start: "防音技", center: "19/12/22", end: "江藤" }}
							/>
						</StyledCell>
						<StyledCell rowSpan={2} colSpan={1}>
							<OrigStamps.Square
								width={70}
								labels={{ start: "防音技", center: "19/12/22", end: "江藤" }}
							/>
						</StyledCell>
					</TableRow>

					{/* row */}
					<TableRow>
						<StyledCell rowSpan={1} colSpan={1}>
							<SmallTypography>商品</SmallTypography>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={2}>
							<StyledTextField />
						</StyledCell>
					</TableRow>

					{/* row */}
					<TableRow>
						<StyledCell rowSpan={1} colSpan={1}>
							<SmallTypography>発注者</SmallTypography>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={8}>
							<StyledTextField />
						</StyledCell>
					</TableRow>

					{/* row */}
					<TableRow>
						<StyledCell rowSpan={1} colSpan={1}>
							<SmallTypography>工事名</SmallTypography>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={8}>
							<StyledTextField />
						</StyledCell>
					</TableRow>

					{/* row */}
					<TableRow>
						<StyledCell rowSpan={1} colSpan={1}>
							<SmallTypography>受注者</SmallTypography>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={8}>
							<StyledTextField />
						</StyledCell>
					</TableRow>

					{/* row */}
					<TableRow>
						<StyledCell rowSpan={1} colSpan={1}>
							<SmallTypography>窓口</SmallTypography>
						</StyledCell>
						<StyledCell rowSpan={1} colSpan={8}>
							<StyledTextField />
						</StyledCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	);
};

const StyledCell = withStyles((theme: Theme) =>
	createStyles({
		root: {
			padding: theme.spacing(0.3, 0.5),
			textAlign: "center",
			border: `solid 1px ${colorPicker("gray")}`,
		},
	})
)(TableCell);

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

const SmallTypography = withStyles((theme: Theme) =>
	createStyles({
		root: {
			fontSize: basicStyles["fontSize-sm"],
		},
	})
)(Typography);

interface StyledCheckboxProps {
	label: string;
}
const StyledCheckbox: React.FC<StyledCheckboxProps> = (props) => {
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
