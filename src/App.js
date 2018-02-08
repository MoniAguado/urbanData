import React, { Component } from 'react';
import Info from './components/Info';
import '././scss/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
				<header>
					<nav></nav>

					<img />
				</header>
				<main>
					<section className="cover"></section>
					<Info />
					<section className="indicators"></section>
					<section className="demo">

					</section>
					<section className="faqs"></section>
				</main>
				<footer>
					<img />
				</footer>
      </div>
    );
  }
}

export default App;
