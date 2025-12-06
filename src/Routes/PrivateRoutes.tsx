import { Children } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useContextViews } from "src/Contexts/Views/contextViews";
import { PageNotFound } from "src/Pages/TelasSistemas/NotFound/NotFound";
import { UrlConfig } from "src/shared/Utils/paths";

export const PrivateRoutes = () => {
	const { ...routesAll } = useContextViews();

	const { pathname } = useLocation();

	return (
		<>
			<Routes>
				{Object.values(routesAll).map((arrayValues) => {
					return Children.toArray(
						arrayValues.map((routes) => {
							return (
								routes.isView && (
									<Route element={routes.element} path={routes.route.url} />
								)
							);
						}),
					);
				})}

				{pathname === "/" && (
					<Route element={<Navigate to={UrlConfig.dashboard.url} />} path="*" />
				)}

				{pathname === "/login" && (
					<Route element={<Navigate to={UrlConfig.dashboard.url} />} path="*" />
				)}

				<Route element={<PageNotFound />} path="*" />
			</Routes>
		</>
	);
};
