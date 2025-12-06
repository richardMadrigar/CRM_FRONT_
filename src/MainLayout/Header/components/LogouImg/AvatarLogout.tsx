import { useState, MouseEvent } from "react";
import {
	ListItemIcon,
	IconButton,
	MenuItem,
	Divider,
	Tooltip,
	Avatar,
	Menu,
	Box,
} from "@mui/material";
import { useAuthContext } from "src/Contexts/AuthContext/authContext";
import { CardInfoNameUserConfig } from "src/MainLayout/Header/components/LogouImg/Components/CardInfoNameUserConfig";
import {
	HelpOutlineIcon,
	AddCardIcon,
	Logout,
} from "src/Pages/components/Icons/Icons";
import { LinkCore } from "src/Pages/components/LinkCore/LinkCore";
import { getToken } from "src/shared/setup/API/api";
import { UrlConfig } from "src/shared/Utils/paths";
import { handleIfLimitCharacter } from "src/shared/Utils/LimitText";

export const AvatarLogout = () => {
	const { setAuthorization, userPerfil, setUserPerfil } = useAuthContext();

	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const handleCloseUserMenu = () => setAnchorElUser(null);

	const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const logout = async () => {
		localStorage.removeItem(getToken);
		setAuthorization(false);
		setUserPerfil(undefined);
	};

	return (
		<>
			<Tooltip title="Abrir Menu">
				<Box
					onClick={handleOpenUserMenu}
					sx={{
						cursor: "pointer",
						display: "flex",
					}}
				>
					<IconButton>
						<Avatar
							sx={{
								bgcolor: (theme) => theme.palette.primary.main,
								fontSize: { xs: "1.2rem", sm: "1.4rem" },
								width: { xs: "30px", sm: "35px" },
								height: { xs: "30px", sm: "35px" },
							}}
						>
							{userPerfil?.name[0].toUpperCase()}
						</Avatar>
					</IconButton>
				</Box>
			</Tooltip>

			<Menu
				onClose={handleCloseUserMenu}
				keepMounted
				PaperProps={{
					style: { width: "320px", padding: "12px" },
				}}
				anchorEl={anchorElUser}
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
				transformOrigin={{ vertical: "top", horizontal: "right" }}
				open={Boolean(anchorElUser)}
				sx={{ mt: "48px" }}
			>
				<CardInfoNameUserConfig
					subTitle={handleIfLimitCharacter({
						LIMIT: 25,
						value: userPerfil?.email || "",
					})}
					title={userPerfil?.name || ""}
					titleChip="Perfil"
					titleTooltip="Configurar perfil"
					urlConfigPerfil={UrlConfig.profile.url}
				/>

				<Divider sx={{ margin: "12px 0 " }} />

				<Box
					sx={{
						"& > a > li": {
							border: `1px solid #919191`,
							borderRadius: "12px",
							transition: "background-color 0.3s",
						},
					}}
				>
					<LinkCore to="login">
						<MenuItem onClick={logout}>
							<ListItemIcon>
								<Logout fontSize="small" />
							</ListItemIcon>
							Sair
						</MenuItem>
					</LinkCore>
				</Box>
			</Menu>
		</>
	);
};
