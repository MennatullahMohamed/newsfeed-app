export const THEME_CHANGE = "THEME_CHANGE";
export const switchMode = (mode: string) => {
    return {
        type: THEME_CHANGE,
        payload: mode,
    };
};