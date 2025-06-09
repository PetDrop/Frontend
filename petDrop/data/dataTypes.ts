export interface Account {
    id: string,
    username: string,
    email: string,
    password: string,
    sharedUsers: string[],
    pets: Pet[],
    reminders: Reminder[]
}

export interface Pet {
    id: string,
    name: string,
    image: string,
    age: number,
    breed: string,
    address: string,
    vet: string,
    vetPhone: string,
    medications: Medication[]
}

export interface Medication {
    id: string,
    name: string,
    color: string,
    description: string,
    dates: string[],
    range: number
}

export interface Reminder {
    id: string,
    medication: Medication,
    pet: Pet,
    notifications: string[]
}

// global default values to avoid having to repeatedly create these in various files
export const emptyPet: Pet = {id: '', name: '', image: '', age: 0, breed: '', address: '', vet: '', vetPhone: '', medications: []};
export const emptyMed: Medication = {id: '', name: '', color: '', description: '', dates: [], range: 0};
export const emptyReminder: Reminder = {id: '', medication: emptyMed, pet: emptyPet, notifications: []};
