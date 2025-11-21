// Base URL configuration - Update this when changing networks
// Use 'localhost' or '127.0.0.1' if running backend and frontend on same machine
// Use your computer's IP address if testing on phone/emulator
const BASE_URL = 'http://localhost:8080';

// ACCOUNT
export const ADD_ACCOUNT = `${BASE_URL}/add-account`;
export const UPDATE_ACCOUNT = `${BASE_URL}/update-account`;
export const GET_ALL_ACCOUNTS = `${BASE_URL}/get-all-accounts`;
export const GET_ACCOUNT_BY_USERNAME = `${BASE_URL}/get-account-by-username/`;
export const GET_ACCOUNT_BY_EMAIL = `${BASE_URL}/get-account-by-email/`;
export const GET_ACCOUNT_BY_ID = `${BASE_URL}/get-account-by-id/`;
export const VALIDATE_SIGNUP = `${BASE_URL}/validate-signup`;
// PETS
export const ADD_PET = `${BASE_URL}/add-pet`;
export const UPDATE_PET = `${BASE_URL}/update-pet`;
export const GET_ALL_PETS = `${BASE_URL}/get-all-pets`;
export const GET_PET_BY_ID = `${BASE_URL}/get-pet/`;
export const DELETE_PET_BY_ID = `${BASE_URL}/delete-pet/`;
// MEDICATIONS
export const ADD_MEDICATION = `${BASE_URL}/add-medication/`;
export const CREATE_NOTIFS_FOR_MED = `${BASE_URL}/create-notifications-for-medication/`;
export const EDIT_NOTIFS_FOR_MED = `${BASE_URL}/edit-notifications-for-medication/`;
export const DELETE_NOTIFS_FROM_MED = `${BASE_URL}/delete-notifications-from-medication/`;
export const UPDATE_MED_NOT_NOTIFS = `${BASE_URL}/update-medication-not-notifications`;
export const UPDATE_MED_CREATE_NOTIFS = `${BASE_URL}/update-medication-create-notifications`;
export const UPDATE_MED_AND_NOTIFS = `${BASE_URL}/update-medication-and-notifications`;
export const UPDATE_MED_DELETE_NOTIFS = `${BASE_URL}/update-medication-delete-notifications`;
export const GET_ALL_MEDICATIONS = `${BASE_URL}/get-all-medications`;
export const GET_MEDICATION_BY_ID = `${BASE_URL}/get-medication/`;
export const DELETE_MEDICATION = `${BASE_URL}/delete-medication/`;
// SPONSOR MEDICATIONS
export const GET_ALL_SPONSOR_MEDICATIONS = `${BASE_URL}/get-all-sponsor-medications`;
export const GET_SPONSOR_MEDICATION_BY_ID = `${BASE_URL}/get-sponsor-medication-by-id/`;
export const GET_SPONSOR_MEDICATION_BY_NAME = `${BASE_URL}/get-sponsor-medication-by-name/`;
// NOTIFICATIONS
export const ADD_NOTIF = `${BASE_URL}/add-notification`;
export const UPDATE_NOTIF = `${BASE_URL}/update-notification`;
export const DELETE_NOTIF = `${BASE_URL}/delete-notification/`;
// AUTH - PASSWORD RESET
export const FORGOT_PASSWORD = `${BASE_URL}/api/auth/password/forgot`;
export const RESET_PASSWORD = `${BASE_URL}/api/auth/password/reset`;
// SPONSORS
export const ADD_SPONSOR = `${BASE_URL}/add-sponsor`;
export const UPDATE_SPONSOR = `${BASE_URL}/update-sponsor`;
export const GET_ALL_SPONSORS = `${BASE_URL}/get-all-sponsors`;
export const GET_SPONSOR_BY_ID = `${BASE_URL}/get-sponsor-by-id/`;
export const GET_SPONSOR_BY_NAME = `${BASE_URL}/get-sponsor-by-name/`;
export const DELETE_SPONSOR = `${BASE_URL}/delete-sponsor/`;
// IOP MEASUREMENT
export const SEND_IOP_MEASUREMENT = `${BASE_URL}/send-iop-measurement`;

// http function with parameters for url and request body
import { Alert } from 'react-native';

export const httpRequest = async (
    url: string,
    method: string,
    body: string,
    showAlert: boolean = true
): Promise<Response> => {
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: body,
        });

        if (showAlert) {
            if (response.ok) {
                Alert.alert('Success', 'Request completed successfully');
            } else {
                Alert.alert('Error', `Request failed (${response.status})`);
            }
        }

        return response;
    } catch (error) {
        if (showAlert) {
            Alert.alert('Error', 'Network error. Please try again.');
        }
        throw error;
    }
}