import React, { createContext, useContext, useState } from 'react';
import * as Notifications from 'expo-notifications';

type PushTokenContextType = {
    pushToken: string;
    setPushToken: React.Dispatch<React.SetStateAction<string>>;
    getFreshPushToken: () => Promise<string>;
};

const PushTokenContext = createContext<PushTokenContextType | undefined>(undefined);

export const PushTokenProvider = ({ children }: { children: React.ReactNode }) => {
    const [pushToken, setPushToken] = useState<string>('');

    const getFreshPushToken = async (): Promise<string> => {
        try {
            const token = await Notifications.getExpoPushTokenAsync();
            const tokenString = token.data;
            setPushToken(tokenString);
            return tokenString;
        } catch (error) {
            console.error('Failed to get push token:', error);
            return '';
        }
    };

    return (
        <PushTokenContext.Provider
            value={{
                pushToken,
                setPushToken,
                getFreshPushToken,
            }}
        >
            {children}
        </PushTokenContext.Provider>
    );
};

export const usePushToken = () => {
    const context = useContext(PushTokenContext);
    if (!context) {
        throw new Error('usePushToken must be used within a PushTokenProvider');
    }
    return context;
};
