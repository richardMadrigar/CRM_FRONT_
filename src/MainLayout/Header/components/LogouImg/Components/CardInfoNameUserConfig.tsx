import { Link } from "react-router-dom";
import { Chip, Tooltip } from "@mui/material";
import { CardHeaderCore } from "src/Pages/components/CardCore/Components/CardHeaderCore";

interface ICardTopTable {
	title: string;
	subTitle?: string;
	titleChip: string;
	urlConfigPerfil: string;
	titleTooltip?: string;
}

export const CardInfoNameUserConfig = ({
	title,
	subTitle,
	titleChip,
	titleTooltip,
	urlConfigPerfil,
}: ICardTopTable) => {
	return (
		<CardHeaderCore
			buttonAdd={[
				<Link key={1} to={urlConfigPerfil}>
					<Tooltip arrow title={titleTooltip || ""}>
						<Chip
							color="primary"
							label={titleChip}
							size="medium"
							sx={{
								cursor: "pointer",
								padding: "6px",
								"&: hover ": {
									transition: "0.3s ease",
									transform: " scale(1.035)",
								},
							}}
							variant="outlined"
						/>
					</Tooltip>
				</Link>,
			]}
			limitCharacter={22}
			subTitle={subTitle}
			sxStyle={{ margin: 0 }}
			title={title}
		/>
	);
};
