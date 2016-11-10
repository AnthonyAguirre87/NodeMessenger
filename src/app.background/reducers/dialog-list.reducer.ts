import { ActionReducer, Action } from "@ngrx/Store";

import { DialogListInfo } from "../datamodels";

export class DialogListActions {
    static DIALOGS_LOADED = "DIALOGS_LOADED";
    static DIALOGS_UPDATED = "DIALOGS_UPDATED";
}

export const dialogListReducer: ActionReducer<DialogListInfo> = (state: DialogListInfo, action: Action): DialogListInfo => {
    switch (action.type) {
        case DialogListActions.DIALOGS_LOADED:
            return action.payload;
        case DialogListActions.DIALOGS_UPDATED:
            let dialogs = Object.assign({}, state, action.payload);
            dialogs.dialogs = state.dialogs.concat(action.payload.dialogs);
            return dialogs;
        default:
            return state;
    };
};