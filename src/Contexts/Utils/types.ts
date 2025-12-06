import { SetStateAction as Action, Dispatch } from "react";

import { IAutoCompleted } from "../types/ProdutoresContext.Types";

export interface IAutoCompletedAllContextProvider {
	setValueAutoCompInstancesWhats: Dispatch<Action<IAutoCompleted>>;
	valueAutoCompInstancesWhats: IAutoCompleted;
}
