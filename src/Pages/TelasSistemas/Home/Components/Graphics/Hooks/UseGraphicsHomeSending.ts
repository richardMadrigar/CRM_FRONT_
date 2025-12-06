import { useMediaQuery, useTheme } from "@mui/material";
import moment from "moment";

import { useState } from "react";
import { useContextDashboardContext } from "src/Contexts/Dashboard/ContextDashboardBroker";
import { useLayoutMainContext } from "src/Contexts/MainLayoutContext";
import { api } from "src/shared/setup/API/api";

export const UseGraphicsHomeSending = () => {
	const { handleGetAlert } = useLayoutMainContext();
	const theme = useTheme();

	const { setValueGraphicSendMessages } = useContextDashboardContext();

	const [loading, setLoading] = useState(false);

	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	const dates = {
		endDate: moment().format("YYYY-MM-DD"),
		startDate: moment()
			.subtract(isMobile ? 7 : 15, "days")
			.format("YYYY-MM-DD"),
	};

	const handleSubmit = async () => {
		setLoading(true);

		return api
			.get(
				`/metrics/send-messages?startDate=${dates.startDate}&endDate=${dates.endDate}&interval=DAY`,
			)
			.then(({ data }) => {
				setValueGraphicSendMessages(data);
			})
			.catch((error) =>
				handleGetAlert({ message: error.response.data.message }),
			)
			.finally(() => setLoading(false));
	};

	return {
		handleSubmit,
		loading,
	};
};
