import React from 'react';
import AppNavigation from './navigation/AppNavigator';

// Redux
import { createStore, combineReducers } from 'redux';
import mealsReducer from './store/reducers/meals';
import videoReducer from './store/reducers/video';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  meals: mealsReducer,
  video: videoReducer
})
const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}