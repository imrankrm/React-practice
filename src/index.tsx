import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// import 'bootstrap/dist/css/bootstrap.css';

// import registerServiceWorker from './registerServiceWorker';

import { AppContainer } from "react-hot-loader";

import { BrowserRouter } from "react-router-dom";

const renderApp = (Component: typeof App) => {
    ReactDOM.render(
        <AppContainer>
            <BrowserRouter>
                <Component />
            </BrowserRouter>
        </AppContainer>,
        document.getElementById('root') as HTMLElement
    );
};

renderApp(App);
// registerServiceWorker();
