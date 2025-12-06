import { Box, Typography } from "@mui/material";
import { CardCore } from "src/Pages/components/CardCore/CardCore";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

interface TimelineData {
	date: string;
	value: number;
}

interface EngagementTimelineProps {
	timeline: TimelineData[];
}

export const EngagementTimeline = ({ timeline }: EngagementTimelineProps) => {
	return (
		<CardCore sxStyle={{ margin: "0", padding: "24px" }}>
			<Box sx={{ mb: "16px" }}>
				<Typography variant="h6" sx={{ fontWeight: 600, mb: "4px" }}>
					Timeline de Engajamento
				</Typography>
				<Typography variant="body2" sx={{ color: "text.secondary" }}>
					Atividade de e-mail ao longo do tempo
				</Typography>
			</Box>

			<Box sx={{ height: "300px" }}>
				<ResponsiveContainer width="100%" height="100%">
					<LineChart data={timeline}>
						<CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
						<XAxis dataKey="date" stroke="#666" fontSize={12} />
						<YAxis
							stroke="#666"
							fontSize={12}
							domain={[0, 1]}
							ticks={[0, 0.25, 0.5, 0.75, 1]}
						/>
						<Tooltip
							contentStyle={{
								backgroundColor: "#fff",
								border: "1px solid #ccc",
								borderRadius: "8px",
								boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
							}}
						/>
						<Line
							type="monotone"
							dataKey="value"
							stroke="#2196F3"
							strokeWidth={3}
							dot={{ fill: "#2196F3", strokeWidth: 2, r: 6 }}
							activeDot={{ r: 8, stroke: "#2196F3", strokeWidth: 2 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</Box>
		</CardCore>
	);
};
