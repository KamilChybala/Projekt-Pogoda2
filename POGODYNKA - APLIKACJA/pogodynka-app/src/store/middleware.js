export const persistenceMiddleware = store => next => action => {
    const result = next(action);
    const state = store.getState();

    if (action.type.startsWith('settings/') || action.type.startsWith('favorites/')) {
        localStorage.setItem('weatherApp_unit', JSON.stringify(state.settings.unit));
        localStorage.setItem('weatherApp_favorites', JSON.stringify(state.favorites.items));
    }

    return result;
};
