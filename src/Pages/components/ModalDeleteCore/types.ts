export interface IModalDeleteCore {
	no: string;
	yes: string;
	modalOpen: boolean;
	onClickTrue: () => void;
	onClickFalse: () => void;
	loading?: boolean;
	titlePrimary?: string;
	titleSecondary?: string;
}
