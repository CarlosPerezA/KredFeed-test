import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import StartingForm from './forms/StartingForm';
import FirstForm from './forms/FirstForm';
import SecondForm from './forms/SecondForm';
import ThirdForm from './forms/ThirdForm';
import FourthForm from './forms/FourthForm';
import ResultExample from './forms/ResultExample';

const App = () => {
    createStore({
        data: {}
      });
    return(
        <StateMachineProvider>
            <Router>
                <Route exact path="/" component={StartingForm} />
                <Route exact path="/informacion-general" component={FirstForm} />
                <Route exact path="/domicilio" component={SecondForm} />
                <Route exact path="/representante-legal" component={ThirdForm} />
                <Route exact path="/datos-bancarios" component={FourthForm} />
                <Route exact path="/resultados" component={ResultExample} />
            </Router>
        </StateMachineProvider>
    );
}

export default App;