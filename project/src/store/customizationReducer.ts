// src/store/customizationReducer.ts

export interface CustomizationState {
  language: string;
}

const initialState: CustomizationState = {
  language: 'en',
};

interface Action {
  type: string;
  payload?: any;
}

const customizationReducer = (
  state = initialState,
  action: Action
): CustomizationState => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export default customizationReducer;
