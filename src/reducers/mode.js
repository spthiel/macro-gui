const initialState = {
    showBranding: false,
    hasEverEnteredEditor: true
};

const reducer = function (state) {
    if (typeof state === 'undefined') state = initialState;
    return state;
};

export {
    reducer as default,
    initialState as modeInitialState,
};
