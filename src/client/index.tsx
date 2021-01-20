import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import Store from "./redux/store";
import { createBrowserHistory, createHashHistory } from "history";
import { SnackbarProvider } from "notistack";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

//	components
import Root from "./route/_Root/_index";

//	styles
import "./styles.css";
import * as OrigStylesModule from "@src/client/assets/styles/origStyles";

//	FontAwesomeIcon
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fab, fas, far);

//	react datepicker
import "react-datepicker/dist/react-datepicker.css";

const history = (() => {
	if (window.location.href.includes(".html")) {
		return createHashHistory();
	} else {
		return createBrowserHistory();
	}
})();

//	classes
const origStylesClass = new OrigStylesModule.default();

ReactDOM.render(
	<Provider store={Store}>
		<SnackbarProvider maxSnack={3}>
			<ThemeProvider
				theme={createMuiTheme({
					palette: {
						secondary: { main: origStylesClass.colorPicker("brown-800") },
					},
				})}
			>
				<Router history={history}>
					<Root />
				</Router>
			</ThemeProvider>
		</SnackbarProvider>
	</Provider>,
	document.getElementById("root") as HTMLElement
);
