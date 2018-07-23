import React from 'react';
import {
    HashRouter as Router,
    Route,
} from 'react-router-dom';

import './css/index.css'
import './css/base.css'
import './css/m.css'

import Header from './components/header/header'
import Home from './components/home/home'
import Share from './components/share/share'
import List from './components/list/list'
import About from './components/about/about'
import Gbook from './components/gbook/gbook'
import Info from './components/info/info'

import {connect} from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    {this.props.counter}
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/share" component={Share}/>
                        <Route exact path="/list" component={List}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/Gbook" component={Gbook}/>
                        <Route exact path="/Info" component={Info}/>
                    </div>
                </div>
            </Router>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        counter:state.counter
    }
}
export default connect(mapStateToProps)(App);