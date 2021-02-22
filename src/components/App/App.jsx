import React from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';
import ResultsContainer from './ResultsContainer/ResultContainer';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    state = {
        expandedHeader: true,
        suggestedNames: [],
    };

    handleInputChange = (inputText) => {
        //name(inputText);
        this.setState({
            expandedHeader: !inputText,
            suggestedNames: inputText ? name(inputText) : [],
        });

    }

    render() {
        return (
            <div className="app-containter">
                <Header expandedHeader={this.state.expandedHeader} />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div >
        );

    }
}

export default App;