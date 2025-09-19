export enum medState {
    'NO_ACTION' = 0, // no popups showing and no action needing to be done
    'MED_CREATED_NOTIF_NOTHING' = 1, // med was created but notifs empty
    'MED_CREATED_NOTIF_CREATED' = 2, // med was created and notifs added
    'MED_EDITED_NOTIF_NOTHING' = 3, // med was edited but no action done with notifs
    'MED_EDITED_NOTIF_EDITED' = 4, // med was edited and notifs was edited
    'MED_EDITED_NOTIF_DELETED' = 5, // med was edited and notifs now empty
    'MED_DELETED' = 6, // med was deleted, so notifs will be too if they exist
    'SHOW_POPUP' = 7, // popup(s) showing and no actions performed yet
};