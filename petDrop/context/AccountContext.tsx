import React, { createContext, useContext, useState } from 'react';
import { Account, emptyAccount, Pet, Medication, Notification } from '../data/dataTypes';

type AccountContextType = {
    account: Account;
    setAccount: React.Dispatch<React.SetStateAction<Account>>;
    updatePetMedications: (petId: string, newMeds: Medication[]) => void;
    updateMedication: (petId: string, updatedMed: Medication) => void;
    deleteMedication: (petId: string, medId: string) => void;
    updateNotifications: (petId: string, medId: string, newNotifs: Notification[]) => void;
};

const AccountContext = createContext<AccountContextType | undefined>(undefined);

export const AccountProvider = ({
    children,
    initialAccount,
}: {
    children: React.ReactNode;
    initialAccount: Account;
}) => {
    const [account, setAccount] = useState<Account>(initialAccount);

    /** Replace all medications for a pet */
    const updatePetMedications = (petId: string, newMeds: Medication[]) => {
        setAccount((prev) => ({
            ...prev,
            pets: prev.pets.map((p) =>
                p.id === petId ? { ...p, medications: newMeds } : p
            ),
            sharedPets: prev.sharedPets.map((p) =>
                p.id === petId ? { ...p, medications: newMeds } : p
            ),
        }));
    };

    /** Update a single medication (add or replace) */
    const updateMedication = (petId: string, updatedMed: Medication) => {
        setAccount((prev) => {
            const updateList = (pets: Pet[]) =>
                pets.map((p) =>
                    p.id === petId
                        ? {
                            ...p,
                            medications: p.medications.some((m) => m.id === updatedMed.id)
                                ? p.medications.map((m) =>
                                    m.id === updatedMed.id ? updatedMed : m
                                )
                                : [...p.medications, updatedMed],
                        }
                        : p
                );

            return {
                ...prev,
                pets: updateList(prev.pets),
                sharedPets: updateList(prev.sharedPets),
            };
        });
    };

    /** Delete a medication from a pet */
    const deleteMedication = (petId: string, medId: string) => {
        setAccount((prev) => {
            const filterList = (pets: Pet[]) =>
                pets.map((p) =>
                    p.id === petId
                        ? { ...p, medications: p.medications.filter((m) => m.id !== medId) }
                        : p
                );

            return {
                ...prev,
                pets: filterList(prev.pets),
                sharedPets: filterList(prev.sharedPets),
            };
        });
    };

    /** Update notifications inside a single medication */
    const updateNotifications = (petId: string, medId: string, newNotifs: Notification[]) => {
        setAccount((prev) => {
            const updateList = (pets: Pet[]) =>
                pets.map((p) =>
                    p.id === petId
                        ? {
                            ...p,
                            medications: p.medications.map((m) =>
                                m.id === medId ? { ...m, notifications: newNotifs } : m
                            ),
                        }
                        : p
                );

            return {
                ...prev,
                pets: updateList(prev.pets),
                sharedPets: updateList(prev.sharedPets),
            };
        });
    };

    return (
        <AccountContext.Provider
            value={{
                account,
                setAccount,
                updatePetMedications,
                updateMedication,
                deleteMedication,
                updateNotifications,
            }}
        >
            {children}
        </AccountContext.Provider>
    );
};

export const useAccount = () => {
    const context = useContext(AccountContext);
    if (!context) throw new Error('useAccount must be used within an AccountProvider');
    return context;
};
