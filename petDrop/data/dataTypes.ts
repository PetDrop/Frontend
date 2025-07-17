export interface Account {
    id: string,
    username: string,
    email: string,
    password: string,
    sharedUsers: string[],
    usersSharedWith: string[],
    pets: Pet[],
    sharedPets: Pet[]
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
    dates: DateObj[],
    reminder: Reminder,
    range: number
}

export interface SponsorMedication {
    id: string,
    name: string,
    instructions: string[],
    videoLink: string
}

export interface Reminder {
    id: string,
    notifications: string[]
}

export interface DateObj {
    startDate: string,
    endDate: string, // possibly "undefined", but use empty string instead of undefined value
    recurrances: number
}

// global default values to avoid having to repeatedly create these in various files
export const emptyPet: Pet = {id: '', name: '', image: '', age: 0, breed: '', address: '', vet: '', vetPhone: '', medications: []};
export const emptyReminder: Reminder = {id: '', notifications: []};
export const emptyMed: Medication = {id: '', name: '', color: '', description: '', dates: [], reminder: emptyReminder, range: 0};
