import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AutorBox from './componentes/Autor';
import LivroAdmin from './componentes/Livro';
import Home from './componentes/Home';
import './index.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/autor" component={AutorBox} />
                <Route path="/livro" component={LivroAdmin}/>
            </Switch>
        </App>
    </Router>

), document.getElementById('root'));
registerServiceWorker();