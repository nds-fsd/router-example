
const initialState = {
    course: undefined,
    name: {},
    categories: [],
    count: 0,
};

const reduce = (state, action) => {
    const newState = {...state};

    switch(action.type) {
        case 'SET_CATEGORIES':
            newState.categories = action.payload;
            newState.count = state.count + 1;
            return newState;
        case 'SET_NAME':
            newState.name = action.name;
            return newState;
    }
}