import { settings } from "./settings";

export const getVoluntaryById = (id: number) => {
    return settings.VOLUNTARIES.find(voluntary => voluntary.id === id);
}