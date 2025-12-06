import React from "react";
import { Campaign, Email, Home, People, WhatsApp } from "@mui/icons-material";

export const NAVIGATION_ICONS: Record<string, React.ReactNode> = {
	"/dashboard": React.createElement(Home, { sx: { fontSize: 20 } }),
	"/contacts": React.createElement(People, { sx: { fontSize: 20 } }),
	"/whatsapp": React.createElement(WhatsApp, { sx: { fontSize: 20 } }),
	"/groupLeads": React.createElement(People, { sx: { fontSize: 20 } }),
	"/campaign": React.createElement(Campaign, { sx: { fontSize: 20 } }),
	"/email-templates": React.createElement(Email, { sx: { fontSize: 20 } }),
};

export const getIconForRoute = (url: string): React.ReactNode | null => {
	return NAVIGATION_ICONS[url] || null;
};
