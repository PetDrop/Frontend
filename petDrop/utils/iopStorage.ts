import AsyncStorage from '@react-native-async-storage/async-storage';
import { IOPMeasurementSession, IOPMeasurement } from '../data/dataTypes';

const IOP_SESSION_KEY_PREFIX = 'iop_session_';

const getSessionKey = (petId: string): string => {
    return `${IOP_SESSION_KEY_PREFIX}${petId}`;
};

export const saveIOPMeasurementSession = async (session: IOPMeasurementSession): Promise<void> => {
    try {
        const key = getSessionKey(session.petId);
        const sessionJson = JSON.stringify({
            ...session,
            startDate: session.startDate.toISOString(),
            timesOfDay: session.timesOfDay.map(d => d.toISOString()),
            measurements: session.measurements.map(m => ({
                ...m,
                timestamp: m.timestamp.toISOString()
            }))
        });
        await AsyncStorage.setItem(key, sessionJson);
    } catch (error) {
        console.error('Failed to save IOP measurement session:', error);
        throw error;
    }
};

export const getIOPMeasurementSession = async (petId: string): Promise<IOPMeasurementSession | null> => {
    try {
        const key = getSessionKey(petId);
        const sessionJson = await AsyncStorage.getItem(key);
        if (!sessionJson) {
            return null;
        }
        const session = JSON.parse(sessionJson);
        return {
            ...session,
            startDate: new Date(session.startDate),
            timesOfDay: session.timesOfDay.map((d: string) => new Date(d)),
            measurements: session.measurements.map((m: any) => ({
                ...m,
                timestamp: new Date(m.timestamp)
            }))
        };
    } catch (error) {
        console.error('Failed to get IOP measurement session:', error);
        return null;
    }
};

export const addMeasurementToSession = async (petId: string, measurement: IOPMeasurement): Promise<void> => {
    try {
        const session = await getIOPMeasurementSession(petId);
        if (!session) {
            throw new Error('No active session found for this pet');
        }
        session.measurements.push(measurement);
        await saveIOPMeasurementSession(session);
    } catch (error) {
        console.error('Failed to add measurement to session:', error);
        throw error;
    }
};

export const removeMeasurementFromSession = async (petId: string, measurementId: string): Promise<void> => {
    try {
        const session = await getIOPMeasurementSession(petId);
        if (!session) {
            throw new Error('No active session found for this pet');
        }
        session.measurements = session.measurements.filter(m => m.id !== measurementId);
        await saveIOPMeasurementSession(session);
    } catch (error) {
        console.error('Failed to remove measurement from session:', error);
        throw error;
    }
};

export const clearIOPMeasurementSession = async (petId: string): Promise<void> => {
    try {
        const key = getSessionKey(petId);
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.error('Failed to clear IOP measurement session:', error);
        throw error;
    }
};

