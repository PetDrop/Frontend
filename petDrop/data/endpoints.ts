// replace 'localhost' with the ip address of your computer to hit these on expo go
// ACCOUNT
export const ADD_ACCOUNT = 'http://localhost:8080/addaccount';
export const UPDATE_ACCOUNT = 'http://localhost:8080/updateaccount';
export const UPDATE_ACCOUNT_USERNAME = 'http://localhost:8080/updateaccount/username/';
export const UPDATE_ACCOUNT_EMAIL = 'http://localhost:8080/updateaccount/email/';
export const UPDATE_ACCOUNT_PASSWORD = 'http://localhost:8080/updateaccount/password/';
export const UPDATE_ACCOUNT_SHARED_USERS = 'http://localhost:8080/updateaccount/sharedusers/';
export const UPDATE_ACCOUNT_PETS = 'http://localhost:8080/updateaccount/pets/';
export const UPDATE_ACCOUNT_REMINDERS = 'http://localhost:8080/updateaccount/reminders/';
export const GET_ALL_ACCOUNTS = 'http://localhost:8080/getallaccounts';
export const GET_ACCOUNT_BY_USERNAME = 'http://localhost:8080/getaccountbyusername/';
export const GET_ACCOUNT_BY_EMAIL = 'http://localhost:8080/getaccountbyemail/';
export const GET_ACCOUNT_BY_ID = 'http://localhost:8080/getaccountbyid/';
// PETS
export const ADD_PET = 'http://localhost:8080/addpet';
export const UPDATE_PET = 'http://localhost:8080/updatepet';
export const UPDATE_PET_NAME = 'http://localhost:8080/updatepet/name/';
export const UPDATE_PET_IMAGE = 'http://localhost:8080/updatepet/image/';
export const UPDATE_PET_AGE = 'http://localhost:8080/updatepet/age/';
export const UPDATE_PET_BREED = 'http://localhost:8080/updatepet/breed/';
export const UPDATE_PET_ADDRESS = 'http://localhost:8080/updatepet/address/';
export const UPDATE_PET_VET = 'http://localhost:8080/updatepet/vet/';
export const UPDATE_PET_VETPHONE = 'http://localhost:8080/updatepet/vetphone/';
export const UPDATE_PET_MEDICATIONS = 'http://localhost:8080/updatepet/medications/';
export const GET_ALL_PETS = 'http://localhost:8080/getallpets';
export const GET_PET_BY_ID = 'http://localhost:8080/getpetbyid/';
export const DELETE_PET_BY_ID = 'http://localhost:8080/deletepetbyid/';
// MEDICATIONS
export const ADD_MEDICATION = 'http://localhost:8080/addmedication';
export const UPDATE_MEDICATION = 'http://localhost:8080/updatemedication';
export const UPDATE_MEDICATION_NAME = 'http://localhost:8080/updatemedication/name/';
export const UPDATE_MEDICATION_COLOR = 'http://localhost:8080/updatemedication/color/';
export const UPDATE_MEDICATION_DESCRIPTION = 'http://localhost:8080/updatemedication/description/';
export const UPDATE_MEDICATION_DATES = 'http://localhost:8080/updatemedication/dates/';
export const UPDATE_MEDICATION_RANGE = 'http://localhost:8080/updatemedication/range/';
export const GET_ALL_MEDICATIONS = 'http://localhost:8080/getallmedications';
export const GET_MEDICATION_BY_ID = 'http://localhost:8080/getmedicationbyid/';
export const DELETE_MEDICATION_BY_ID = 'http://localhost:8080/deletemedicationbyid/';
// REMINDERS
export const ADD_REMINDER = 'http://localhost:8080/addreminder';
export const UPDATE_REMINDER = 'http://localhost:8080/updatereminder';
export const UPDATE_REMINDER_MEDICATION = 'http://localhost:8080/updatereminder/medication/';
export const UPDATE_REMINDER_PET = 'http://localhost:8080/updatereminder/pet/';
export const GET_ALL_REMINDERS = 'http://localhost:8080/getallreminders';
export const GET_REMINDER_BY_ID = 'http://localhost:8080/getreminderbyid/';
export const DELETE_REMINDER_BY_ID = 'http://localhost:8080/deletereminderbyid/';

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