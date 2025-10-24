import { Account } from '../data/dataTypes';

// Helper function to convert date strings to Date objects
export const convertDateStringsToDates = (account: Account): Account => {
    const convertedAccount = { ...account };
    
    // Convert dates in pets (with null checks)
    convertedAccount.pets = (account.pets || []).map(pet => ({
        ...pet,
        medications: (pet.medications || []).map(med => ({
            ...med,
            notifications: (med.notifications || []).map(notif => ({
                ...notif,
                nextRuns: (notif.nextRuns || []).map(date => typeof date === 'string' ? new Date(date) : date),
                finalRuns: (notif.finalRuns || []).map(date => typeof date === 'string' ? new Date(date) : date)
            }))
        }))
    }));
    
    // Convert dates in shared pets (with null checks)
    convertedAccount.sharedPets = (account.sharedPets || []).map(pet => ({
        ...pet,
        medications: (pet.medications || []).map(med => ({
            ...med,
            notifications: (med.notifications || []).map(notif => ({
                ...notif,
                nextRuns: (notif.nextRuns || []).map(date => typeof date === 'string' ? new Date(date) : date),
                finalRuns: (notif.finalRuns || []).map(date => typeof date === 'string' ? new Date(date) : date)
            }))
        }))
    }));
    
    return convertedAccount;
};
