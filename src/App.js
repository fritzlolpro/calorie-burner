import React, { Component } from 'react';

import Header from './components/Header/Header';
import DisplayPlate from './components/DisplayPlate/DisplayPlate';
import Input from './components/Input/Input'
import Dropdown from './components/Dropdown/Dropdown'
import Table from './components/Table/Table'
import Footer from './components/Footer/Footer'

import exercises from './exerciseData/exercises.json'
import './App.css';

const times = [10, 15, 30, 45, 60]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: null,
      activityTime: 10,
      searchedActivities: [],
    };
  }

  onInputChange  = (e) => {
    this.setState({searchTerm: e.target.value}, () => {this.setActivityMatches()})
  }

  onDropdownChange = (e) => {
    this.setState({activityTime: e.target.value})
  }

  setActivityMatches = () => {
    const {searchTerm} = this.state;
    if (searchTerm === null || searchTerm.length < 1) {
      this.setState({searchedActivities:[]})
    } else {
      this.setState({searchedActivities: exercises.data.filter(exercise => exercise.exercise.toLowerCase().includes(searchTerm.toLowerCase())).slice(0,3)})
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <DisplayPlate>
            <Input placeholder="Activity name" onChange={this.onInputChange} />
            <Dropdown onChange={this.onDropdownChange} values={times}/>
            <Table values={this.state.searchedActivities} time={this.state.activityTime} serchString={this.state.searchTerm}/>
        </DisplayPlate>
      <Footer/>
      </div>
    );
  }
}

export default App;
