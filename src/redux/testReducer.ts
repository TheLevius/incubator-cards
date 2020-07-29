const TEST_CONSTANT = 'testReducer/TEST-CONSTANT';

const initialState = {
    test
};
type InitialStateType = typeof initialState;

export const testReducer = (state: InitialStateType = initialState, action:ActionType):InitialStateType => {
    switch (action.type) {

        default: return state;
    }
}

export const action:{type: string} = {
    type: TEST_CONSTANT
}
export type ActionType = typeof action;

export default testReducer;