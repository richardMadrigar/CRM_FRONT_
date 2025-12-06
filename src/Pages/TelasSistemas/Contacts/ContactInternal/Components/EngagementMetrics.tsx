import { Box, Typography, Grid, Paper } from "@mui/material";
import { CardCore } from "src/Pages/components/CardCore/CardCore";
import { TrendingUp } from "@mui/icons-material";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

interface EngagementMetricsProps {
	metrics: {
		sent: number;
		opened: number;
		delivered: number;
		clicked: number;
	};
}

export const EngagementMetrics = ({ metrics }: EngagementMetricsProps) => {
	const data = [
		{ name: "Enviados", value: metrics.sent, color: "#9E9E9E" },
		{ name: "Abertos", value: metrics.opened, color: "#FF9800" },
		{ name: "Entregues", value: metrics.delivered, color: "#4CAF50" },
		{ name: "Clicados", value: metrics.clicked, color: "#2196F3" },
	];

	const renderCustomizedLabel = ({
		cx,
		cy,
		midAngle,
		innerRadius,
		outerRadius,
		percent,
	}: any) => {
		if (percent === 0) return null;

		const RADIAN = Math.PI / 180;
		const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
		const x = cx + radius * Math.cos(-midAngle * RADIAN);
		const y = cy + radius * Math.sin(-midAngle * RADIAN);

		return (
			<text
				x={x}
				y={y}
				fill="white"
				textAnchor={x > cx ? "middle" : "middle"}
				dominantBaseline="central"
				fontSize={12}
				fontWeight="bold"
			>
				{`${(percent * 100).toFixed(0)}%`}
			</text>
		);
	};

	return (
		<CardCore sxStyle={{ margin: "0", height: "100%", padding: "24px" }}>
			<Box sx={{ display: "flex", alignItems: "center", mb: "16px" }}>
				<TrendingUp sx={{ mr: "8px", color: "primary.main" }} />
				<Typography variant="h6" sx={{ fontWeight: 600 }}>
					Métricas de Engajamento
				</Typography>
			</Box>

			<Box sx={{ height: "200px", mb: "16px" }}>
				<ResponsiveContainer width="100%" height="100%">
					<PieChart>
						<Pie
							data={data}
							cx="50%"
							cy="50%"
							innerRadius={40}
							outerRadius={80}
							paddingAngle={2}
							dataKey="value"
							label={renderCustomizedLabel}
						>
							{data.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={entry.color} />
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
			</Box>

			<Box>
				<Grid container spacing={1}>
					{data.map((item, index) => (
						<Grid item xs={6} key={index}>
							<Box sx={{ display: "flex", alignItems: "center", mb: "4px" }}>
								<Box
									sx={{
										width: 12,
										height: 12,
										borderRadius: "50%",
										backgroundColor: item.color,
										mr: "8px",
									}}
								/>
								<Typography variant="body2" sx={{ fontWeight: 500 }}>
									{item.name}:
								</Typography>
								<Typography variant="body2" sx={{ ml: "4px" }}>
									{item.value}
								</Typography>
							</Box>
						</Grid>
					))}
				</Grid>
			</Box>
		</CardCore>
	);
};
