//------------------ ENUMS ----------------------------
const ACTIONS = {
    UPDATE_OOMPA_STATE: 'UPDATE_OOMPA_STATE',
    UPDATE_PAGE: 'UPDATE_PAGE', 
    TOGGLE_ERROR: 'TOGGLE_ERROR',
    TOGGLE_IS_BOTTOM: 'TOGGLE_IS_BOTTOM',
    TOGGLE_IS_LOADING: 'TOGGLE_IS_LOADING'
}
//------------------ REDUCER -------------------------

const initialState = {
    oompas: [],
    page: 1,
    search: '',
    error: false, 
    isLoading: false, 
    isBottom: false
}

//------------------ REDUCER -------------------------

const oompaStateReducer = (state, {type, payload}) => {
    switch(type) {
        case ACTIONS.UPDATE_OOMPA_STATE: 
            return {
                ...state, oompas: [...state.oompas, ...payload]
            }
        case ACTIONS.UPDATE_PAGE: 
            return {
                ...state, page: payload
            }
        case ACTIONS.UPDATE_SEARCH: 
            return {
                ...state, search: payload
            }
        case ACTIONS.TOGGLE_ERROR: 
            return {
                ...state, error: !state.error
            }
        case ACTIONS.TOGGLE_IS_BOTTOM: 
            return {
                ...state, isBottom: payload
            }
        case ACTIONS.TOGGLE_IS_LOADING: 
            return {
                ...state, isLoading: !state.isLoading
            }
        default: 
            return state;
    }
}

//------------------ SYNC FUNCTIONS -------------------------

const handleScroll = (isLoading, dispatchOompaState) => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;

    if (scrollTop + window.innerHeight + 200 >= scrollHeight) {
       dispatchOompaState({type: ACTIONS.TOGGLE_IS_BOTTOM, payload: true});
    }
};

const handleOompaDetails = (id, history) => {
history.push(`/${id}`);
};

const searchOompa = (oompa, search) => {
    const toSearch =
        oompa.first_name + " " + oompa.last_name + oompa.profession;
    const regexp = new RegExp(search, "i");

    return regexp.test(toSearch);
};
    
// -------------------- ASYNC FUNCTIONS --------------
const getOompas = async (page, isBottom, error, dispatchOompaState) => {
    dispatchOompaState({type: ACTIONS.TOGGLE_IS_LOADING});

    try {
        const response = await fetch(
            `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=${page}`
          );
        const data = await response.json();
        dispatchOompaState({type: ACTIONS.UPDATE_OOMPA_STATE, payload: data.results});
        dispatchOompaState({type: ACTIONS.UPDATE_PAGE, payload: page + 1});
        error && dispatchOompaState({type: ACTIONS.TOGGLE_ERROR});
    }
    catch (error) {
        dispatchOompaState({type: ACTIONS.TOGGLE_ERROR});
    }
    finally {
        dispatchOompaState({type: ACTIONS.TOGGLE_IS_LOADING});
        isBottom && dispatchOompaState({type: ACTIONS.TOGGLE_IS_BOTTOM, payload: false});   
    }
  };


export {ACTIONS, initialState, oompaStateReducer, handleScroll, handleOompaDetails, getOompas, searchOompa};