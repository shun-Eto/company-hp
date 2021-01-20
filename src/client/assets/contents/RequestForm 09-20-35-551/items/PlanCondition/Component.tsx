import * as React from "react";

//	components

//	materials
import {
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
	Hidden,
	Input,
	MenuItem,
	OutlinedInput,
	TextField,
	Typography,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//	styles
import * as useStyles from "./_useStyles";

//	types
import * as EnvTypes from "@src/types/environment";
import { Autocomplete } from "@material-ui/lab";

/*-*-*-*-* component props *-*-*-*-*/
interface ComponentProps {
	lang: keyof EnvTypes.Languages;
	label: string;
	list?: EnvTypes.MenuItem[];
	type?: string | "memo";
}
type Props = ComponentProps;
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { label, lang, list, type } = props;
	//	states
	const [values, setValues] = React.useState<EnvTypes.MenuItem[]>([]);
	const [active, setActive] = React.useState(false);
	//	styles
	const classes = useStyles.Item({ active });

	/*-*-*-*-* handlers *-*-*-*-*/
	//	handelOnChange_input
	const handelOnChange_input = (
		e: React.ChangeEvent<{}>,
		value: (string | EnvTypes.MenuItem)[]
	) => {
		const formatedValue = value.reduce(
			(preV: EnvTypes.MenuItem[], curV: string | EnvTypes.MenuItem) => {
				//	item
				const item: EnvTypes.MenuItem = (() => {
					if (typeof curV === "string") {
						const label = { jp: curV, en: curV };
						return { id: "", value: curV, label };
					} else {
						return curV;
					}
				})();

				//	filter
				if (preV.some((val) => val.value === item.value)) {
					return [...preV];
				} else {
					return [...preV, item];
				}
			},
			[]
		);
		setValues(formatedValue);
	};

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div className={classes.Item}>
			{/*-*-*-*-* label *-*-*-*-*/}
			<Typography className={classes["Item_Label-label"]}>{label}</Typography>

			{/*-*-*-*-* input *-*-*-*-*/}
			{type !== "memo" && list ? (
				<Autocomplete
					freeSolo
					multiple
					fullWidth
					size="small"
					options={list}
					value={values}
					disableCloseOnSelect
					getOptionLabel={(option) => option.label[lang]}
					//	renders
					renderInput={(params) => (
						<TextField
							{...params}
							multiline
							variant="outlined"
							InputProps={{
								...params.InputProps,
								className: classes["Item_Input-input"],
							}}
							onFocus={() => setActive(true)}
							onBlur={() => setActive(false)}
						/>
					)}
					//	handlers
					onChange={(e, value) => handelOnChange_input(e, value)}
				/>
			) : (
				<TextField
					multiline
					rows={5}
					rowsMax={10}
					variant="outlined"
					fullWidth
					InputProps={{
						className: classes["Item_Input-input"],
					}}
				/>
			)}
		</div>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default Component;
