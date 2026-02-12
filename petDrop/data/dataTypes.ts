export interface Account {
    id: string,
    username: string,
    email: string,
    password: string,
    sharedUsers: string[],
    usersSharedWith: string[],
    pets: Pet[],
    sharedPets: Pet[],
    image: string,
    expoPushToken: string
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
    notifications: Notification[],
    range: number
}

export interface SponsorMedication {
    id: string,
    name: string,
    instructions: string[],
    videoLink: string
}

export interface Sponsor {
    id: string,
    name: string,
    description: string,
    image: string
}

export interface Notification {
    id: string,
    ownerUsername: string,
    title: string,
    body: string,
    data: Record<string, any>,
    nextRuns: Date[]; // next times it will be sent
    finalRuns: Date[]; // final times it will be sent
    repeatInterval: string; // "daily", "weekly", "monthly", or "" for one-time
}

export interface DateObj {
    startDate: string,
    endDate: string, // possibly "undefined", but use empty string instead of undefined value
    recurrances: number
}

export interface IOPMeasurement {
    id: string;
    value: string;
    timestamp: Date;
}

export interface IOPMeasurementSession {
    petId: string;
    startDate: Date;
    numberOfDays: number;
    timesOfDay: Date[];
    inputMode: 'range' | 'manual';
    measurements: IOPMeasurement[];
    isComplete: boolean;
}

// global default values to avoid having to repeatedly create these in various files
export const emptyAccount: Account = { id: '', username: '', email: '', password: '', sharedUsers: [], usersSharedWith: [], pets: [], sharedPets: [], image: '', expoPushToken: '' }
export const emptyPet: Pet = { id: '', name: '', image: '', age: 0, breed: '', address: '', vet: '', vetPhone: '', medications: [] };
export const emptyNotification: Notification = { id: '', ownerUsername: '', title: 'Reminder to Administer Medication', body: `It's time to give petName their medName!`, data: {}, nextRuns: [], finalRuns: [], repeatInterval: '' };
export const emptyMed: Medication = { id: '', name: '', color: '', description: '', notifications: [], range: 4 };
export const emptySponsorMed: SponsorMedication = { id: '', name: '', instructions: [], videoLink: '' };
export const emptySponsor: Sponsor = { id: '', name: '', description: '', image: '' };