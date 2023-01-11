import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "../router/";
import Error from "../pages/Error";
import { BrowserRouter } from "react-router-dom";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				{publicRoutes.map((r) => (
					<Route element={<r.element />} path={r.path} key={r.path} />
				))}
				<Route path="/*" element={<Error message="Page not found!" />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
