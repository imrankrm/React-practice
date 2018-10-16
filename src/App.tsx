import * as React from 'react';
import './App.css';
import Layout from "./app/ui/Layout/Layout";

import { Route, Switch } from "react-router-dom";

import WelcomePage from "./app/ui/WelcomePage";
import VetListPage from "./app/domain/vet/VetListPage/VetListPage";

const App = () => {
    return(
        <Layout>
            <Switch>
                <Route exact={true} path="/" component={WelcomePage} />
                <Route exact={true} path="/vets" component={VetListPage} />
            </Switch>
        </Layout>
    )
}

export default App;
