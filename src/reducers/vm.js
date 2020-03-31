import VM from 'scratch-vm';

const SET_VM = 'scratch-gui/vm/SET_VM';
const defaultVM = new VM();
const initialState = defaultVM;

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    if (action.type === SET_VM) {
        return action.vm;
    }
    return state;
};

const setVM = function (vm) {
    return {
        type: SET_VM,
        vm: vm
    };
};

export {
    reducer as default,
    initialState as vmInitialState,
    setVM
};
