export enum medState {
    'NO_ACTION' = 0, // no popups showing and no action needing to be done
    'MED_NOTHING_NOTIF_CREATED' = 1, // no change to med, notif(s) added
    'MED_NOTHING_NOTIF_EDITED' = 2, // no change to med, notifs edited
    'MED_NOTHING_NOTIF_DELETED' = 3, // no change to med, all notifs deleted from med
    'MED_CREATED_NOTIF_NOTHING' = 10, // med created, notifs empty
    'MED_CREATED_NOTIF_CREATED' = 11, // med created, notif(s) added
    'MED_EDITED_NOTIF_NOTHING' = 20, // med edited, no action done with notifs
    'MED_EDITED_NOTIF_CREATED' = 21, // med edited, notif(s) added
    'MED_EDITED_NOTIF_EDITED' = 22, // med edited, notifs edited
    'MED_EDITED_NOTIF_DELETED' = 23, // med edited, notifs now empty
    'MED_DELETED' = 30, // med was deleted, so notif(s) will be too if they exist
    'SHOW_POPUP' = 4, // popup(s) showing and no actions performed yet
};

export enum notifState {
    'NO_ACTION' = 0,
    'SHOW_POPUP' = 1,
    'NOTIF_CREATED' = 2,
    'NOTIF_EDITED' = 3,
    'NOTIF_DELETED' = 4
};