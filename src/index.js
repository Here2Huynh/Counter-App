import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import counterReducer from './store/reducers/counter'
import resultReducer from './store/reducers/result'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

let rootReducer = combineReducers({
    ctr: counterReducer, 
    res: resultReducer
})

const logger = store => {
    return next => {
        return action => {
            console.log('[ Middleware ] Dispatching ' , action)
            const result = next(action)
            console.log('[ Middleware ] get next state', store.getState())
            return result
        }
    }
}

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 

const store = createStore(rootReducer,  composeEnchancers(applyMiddleware(logger, thunk)))
// apply middle is an enchancer, can apply multiple middlewares in which they get executed in order 

ReactDOM.render(<Provider store={store}>
    <App /></Provider>, document.getElementById('root'));
registerServiceWorker();
