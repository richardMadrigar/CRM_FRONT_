import { createRoot } from "react-dom/client";

import { App } from "./App";
import { LayoutMainProviderContext } from "./Contexts/MainLayoutContext";
import { AppThemeProvider } from "./Contexts/ThemeContextConfig";
import { AppContextProvider } from "./ProviderContext";

import "moment/locale/pt-br";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
	<LayoutMainProviderContext>
		<AppContextProvider>
			<AppThemeProvider>
				<App />
			</AppThemeProvider>
		</AppContextProvider>
	</LayoutMainProviderContext>,
);
