import {applyMiddleware, createStore, Store} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './rootReducer';


// Create a configure store function of type `IAppState`
// export default function configureStore(): Store<IAppState, any> {
//     return createStore(rootReducer, undefined, applyMiddleware(thunk));
// }
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
