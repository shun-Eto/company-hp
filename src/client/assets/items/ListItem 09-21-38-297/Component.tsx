import * as React from "react";

//	components

//	item components
import Item_Badge from "../Badge/Component";

//	materials
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//	styles
import * as useStyles from "./_useStyles";

//	types
import * as EnvTypes from "@src/types/environment";
import { colorPicker } from "@src/client/assets/styles/origStyles";

/*-*-*-*-* StyledListItem *-*-*-*-*/
interface OrigListItemProps {
	lang: keyof EnvTypes.Languages;
	item: EnvTypes.MenuItem;
	//	handlers
	onClick_list?: () => void;
}
const OrigListItem: React.FC<OrigListItemProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { item, lang } = props;
	//	styles
	const classes = useStyles.OrigListItem({ origTheme: item.theme });
	//	memo
	const label = React.useMemo(() => {
		return item.label[lang];
	}, [item]);
	const abbr = React.useMemo(() => {
		if (!item.abbrevation) return "";
		return item.abbrevation[lang];
	}, [item]);

	/*-*-*-*-* handlers *-*-*-*-*/
	//	handleOnClick_listItem
	const handleOnClick_listItem = () => {
		if (props.onClick_list) props.onClick_list();
	};

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<ListItem
			button
			className={classes.ListItem}
			onClick={handleOnClick_listItem}
		>
			{item.faIcon && (
				<ListItemIcon className={classes["ListItem-icon"]}>
					<Item_Badge
						faIcon={item.faIcon}
						rightButton={{
							label: abbr,
							theme: item.theme,
						}}
					/>
				</ListItemIcon>
			)}
			<ListItemText className={classes["ListItem-text"]}>{label}</ListItemText>
		</ListItem>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default OrigListItem;
