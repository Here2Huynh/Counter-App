import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers , applyMiddleware } from 'redux'
import counterReducer from './store/reducers/counter'
import resultReducer from './store/reducers/result'
import { Provider } from 'react-redux'

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

const store = createStore(rootReducer, applyMiddleware(logger))
// apply middle is an enchancer, can apply multiple middlewares in which they get executed in order 

ReactDOM.render(<Provider store={store}>
    <App /></Provider>, document.getElementById('root'));
registerServiceWorker();
