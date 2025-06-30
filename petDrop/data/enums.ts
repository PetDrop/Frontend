export enum medState {
    'NO_ACTION' = 0, // no popups showing and no action needing to be done
    'MED_CREATED' = 1, // med was created, so rem was either created or not (check if undefined)
    'MED_EDITED_REM_NOTHING' = 2, // med was edited but no action done with rem
    'MED_EDITED_REM_CREATED' = 3, // med was edited and rem was created
    'MED_EDITED_REM_EDITED' = 4, // med was edited and rem was edited
    'MED_EDITED_REM_DELETED' = 5, // med was edited and rem was deleted
    'MED_DELETED' = 6, // med was deleted, so rem will be too if it exists
    'SHOW_POPUP' = 7, // popup(s) showing and no actions performed yet
};

export enum remState {
    'NO_ACTION' = 0, // popup not showing and no action needing to be done
    'REM_CREATED' = 1, // need to update med
    'REM_EDITED' = 2, // no update to med needed
    'REM_DELETED' = 3, // need to update med
    'SHOW_POPUP' = 4, // popup showing but no action done yet
};


export enum datePicker {
  DISABLED = 0,
  SINGLE = 1,
  START_DATE = 2,
  END_DATE = 3
};