import React, {FC} from 'react';

import {Provider} from 'react-redux';

import {Store} from "redux";
import Chat from "./view/Chat";
import store from "./store/store";

interface IProps {
    store: Store;
}
const App: FC<IProps> = props => {
    return (
        <Provider store={store}>
            <Chat  title={"gh"}/>
        </Provider>
    );
};

export default App;
