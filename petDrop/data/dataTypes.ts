export interface Account {
    id: string,
    username: string,
    email: string,
    password: string,
    phone: string,
    address: string,
    emergencyContacts: string[],
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
    pet: Pet
}