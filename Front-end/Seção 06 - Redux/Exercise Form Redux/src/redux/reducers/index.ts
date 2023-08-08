import { AnyAction, combineReducers } from 'redux';

const INITIAL_STATE_PERSONAL_FORM = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  uf: '',
};

const INITIAL_STATE_PROFISSIONAL_FORM = {
  resume: '',
  role: '',
  description: '',
};

const reducerPersonalForm = (state = INITIAL_STATE_PERSONAL_FORM, action: AnyAction) => {
  switch (action.type) {
    case 'setPersonalForm':
      return action.payload;
    default: return state;
  }
};

const reducerProfessionalForm = (
  state = INITIAL_STATE_PROFISSIONAL_FORM,
  action: AnyAction,
) => {
  switch (action.type) {
    case 'setProfessionalForm':
      return action.payload;
    default: return state;
  }
};

const rootReducer = combineReducers({
  personalData: reducerPersonalForm,
  professionalData: reducerProfessionalForm,
});

export default rootReducer;
