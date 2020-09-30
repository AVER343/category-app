import ErrorReducer from './error/error.reducers'
import FormReducer from './forms/forms.reducer'
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['forms']
};

const rootReducer = combineReducers({
    forms:FormReducer,
    errors:ErrorReducer
});

export default persistReducer(persistConfig, rootReducer);