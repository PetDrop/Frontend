// ACCOUNT
export const ADD_ACCOUNT = 'http://localhost:8080/add-account';
export const UPDATE_ACCOUNT = 'http://localhost:8080/update-account';
export const GET_ALL_ACCOUNTS = 'http://localhost:8080/get-all-accounts';
export const GET_ACCOUNT_BY_USERNAME = 'http://localhost:8080/get-account-by-username/';
export const GET_ACCOUNT_BY_EMAIL = 'http://localhost:8080/get-account-by-email/';
export const GET_ACCOUNT_BY_ID = 'http://localhost:8080/get-account-by-id/';
// PETS
export const ADD_PET = 'http://localhost:8080/add-pet';
export const UPDATE_PET = 'http://localhost:8080/update-pet';
export const GET_ALL_PETS = 'http://localhost:8080/get-all-pets';
export const GET_PET_BY_ID = 'http://localhost:8080/get-pet/';
export const DELETE_PET_BY_ID = 'http://localhost:8080/delete-pet/';
// MEDICATIONS
export const ADD_MEDICATION = 'http://localhost:8080/add-medication/';
export const CREATE_NOTIFS_FOR_MED = 'http://localhost:8080/create-notifications-for-medication/';
export const EDIT_NOTIFS_FOR_MED = 'http://localhost:8080/edit-notifications-for-medication/';
export const DELETE_NOTIFS_FROM_MED = 'http://localhost:8080/delete-notifications-from-medication/';
export const UPDATE_MED_NOT_NOTIFS = 'http://localhost:8080/update-medication-not-notifications';
export const UPDATE_MED_CREATE_NOTIFS = 'http://localhost:8080/update-medication-create-notifications';
export const UPDATE_MED_AND_NOTIFS = 'http://localhost:8080/update-medication-and-notifications';
export const UPDATE_MED_DELETE_NOTIFS = 'http://localhost:8080/update-medication-delete-notifications';
export const GET_ALL_MEDICATIONS = 'http://localhost:8080/get-all-medications';
export const GET_MEDICATION_BY_ID = 'http://localhost:8080/get-medication/';
export const DELETE_MEDICATION = 'http://localhost:8080/delete-medication/';
// SPONSOR MEDICATIONS
export const GET_ALL_SPONSOR_MEDICATIONS = 'http://localhost:8080/get-all-sponsor-medications';
export const GET_SPONSOR_MEDICATION_BY_ID = 'http://localhost:8080/get-sponsor-medication-by-id/';
export const GET_SPONSOR_MEDICATION_BY_NAME = 'http://localhost:8080/get-sponsor-medication-by-name/';
// NOTIFICATIONS
export const ADD_NOTIF = 'http://localhost:8080/add-notification';
export const UPDATE_NOTIF = 'http://localhost:8080/update-notification';
export const DELETE_NOTIF = 'http://localhost:8080/delete-notification/';

// http function with parameters for url and request body
export const httpRequest = async (url: string, method: string, body: string): Promise<Response> => {
    return await fetch(url, {
        method: method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: body,
    });
}