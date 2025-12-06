import { useAuthContext } from "src/Contexts/AuthContext/authContext";
import { Master } from "src/MainLayout/LayoutMain";
import { LoadingPage } from "src/Pages/components/LoadingAnimation/LoadingPage";

import { BasePagePublic } from "../Pages/TelasLogin/BasePagePublic";

export const RoutesMain = () => {
	const { authorization, loading } = useAuthContext();

	if (loading) return <LoadingPage />;

	return <>{authorization ? <Master /> : <BasePagePublic />}</>;
};
