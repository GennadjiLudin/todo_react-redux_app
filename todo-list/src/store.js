import {createStore, compose, applyMiddleware} from 'redux';
import { save } from 'redux-localstorage-simple';
import rootReducer from './reducers/rootReducer';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

        const configureStore = preloadedState => (
            createStore(
                rootReducer,
                preloadedState,
                composeEnhancers(
                    applyMiddleware(save({namespace: 'todo-list'}))
                ),
            )
        );

        const store = configureStore({});

        export default store;