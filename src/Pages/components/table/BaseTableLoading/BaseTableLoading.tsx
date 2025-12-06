import React, { FC, ReactNode, useEffect, useRef } from "react";
import {
	LinearProgress,
	TableContainer,
	Typography,
	SxProps,
	Table,
	alpha,
	Box,
} from "@mui/material";
import { useConfigPageContext } from "src/Contexts/configPagesContext/configPagesContext";
import { useStyles } from "../../ModalFilterCore/Index";
import { JoinPaginationAndSelect } from "../JoinPaginationAndSelect/JoinPaginationAndSelect";
import { TrNotList } from "../TrNotList/TrNotList";
import { HeaderTable } from "../HeaderTable/HeaderTable";
import { InputSearchPersonalized } from "../JoinPaginationAndSelect/InpuSearchPersonalized/InpuSearchPersonalized";
import { ModalInfoCore } from "../../ModalInfo/ModalInfo";
import { CardCore } from "../../CardCore/CardCore";

type ILoadingTable = {
	heightTable?: string;
	qtdList: number;
	isNotPagination?: boolean;
	THead?: ReactNode;
	filter?: ReactNode;
	setNameSearch?: React.Dispatch<React.SetStateAction<string>>;
	isLastChildren?: boolean;
	title?: string;
	modalInfo?: {
		children: ReactNode;
		title?: string;
	};

	cardAdd?: {
		title?: string;
		buttons?: ReactNode[];
		icon?: ReactNode;
	};
	Modals?: ReactNode;
	sxStyle?: SxProps;
	children: ReactNode;
};

export const TableCore: FC<ILoadingTable> = ({
	isNotPagination,
	isLastChildren,
	setNameSearch,
	heightTable,
	modalInfo,
	children,
	cardAdd,
	sxStyle,
	title,
	qtdList,
	filter,
	THead,
	Modals,
}) => {
	const { loadingTable, qtdRegisters, currentPage, setCurrentPage } =
		useConfigPageContext();

	const tabelaRef = useRef<HTMLTableElement>(null);

	useEffect(() => {
		if (Number(qtdList) === 0) {
			if (currentPage > 1) {
				setCurrentPage((item) => item - 1);
			}
		}
	}, [qtdRegisters]);

	const classes = useStyles();

	const handleGoLastChildren = () => {
		const tabela = tabelaRef.current as HTMLTableElement;

		tabela.scrollTop = tabela.scrollHeight - tabela.clientHeight;
	};

	useEffect(() => {
		if (isLastChildren && !loadingTable && qtdList) {
			handleGoLastChildren();
		}
	}, [loadingTable]);

	return (
		<Box sx={{ ...sxStyle }}>
			{Modals}

			<CardCore
				sx={{
					border: `1px solid ${alpha("#b6b6b6", 0.3)}`,
					position: "relative",
				}}
			>
				{loadingTable && (
					<Box
						style={{ width: "99.2%", position: "absolute", top: 0, left: 6 }}
					>
						<LinearProgress color="inherit" sx={{ borderRadius: "12px" }} />
					</Box>
				)}
				{cardAdd && (
					<Box
						sx={{
							padding: { xs: ".7rem", sm: "20px" },
							display: { sm: "flex" },
							alignItems: "center",
							justifyContent: "space-between",
							textAlign: "center",
						}}
					>
						{title && <Typography>{title}</Typography>}

						<Box
							sx={{
								display: "flex",
								flexDirection: "",
								textAlign: "center",
								alignItems: "center",
								flexWrap: "wrap",
							}}
						>
							{setNameSearch && (
								<InputSearchPersonalized setNameSearch={setNameSearch} />
							)}

							{filter && filter}
						</Box>

						<Box sx={{ display: "flex" }}>
							<Box mr={2}>
								{modalInfo?.children && (
									<ModalInfoCore title={modalInfo.title}>
										{modalInfo.children}
									</ModalInfoCore>
								)}
							</Box>

							<HeaderTable buttonAdd={cardAdd.buttons} />
						</Box>
					</Box>
				)}
				<TableContainer
					ref={tabelaRef}
					className={classes.customScrollbar}
					sx={{
						maxHeight: heightTable || "520px",
						borderRadius: "12px",
						overflow: "auto",
					}}
				>
					<Table>
						{THead && THead}

						<tbody>{children}</tbody>
					</Table>
					<TrNotList loadingTable={!loadingTable} qtdList={qtdList} />
				</TableContainer>

				{isNotPagination !== true && (
					<JoinPaginationAndSelect qtd_registros={qtdRegisters} />
				)}
			</CardCore>
		</Box>
	);
};
