import React, {Component} from 'react';
import {robots} from './robots';
import CardList from './CardList';
import SearchList from './SearchList';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots:robots,
			searchfield:''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield : event.target.value })
	}

	render() {
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		});

		return (
		<div className='tc'>
			<h1 className='f1'>Robo Friends</h1>
			<SearchList searchChange = {this.onSearchChange}/>
			<CardList robots={filteredRobots}/>
		</div>
	);
	}
}


export default App;