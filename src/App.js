import React, { Component } from 'react';

import Contact from './components/Contact';
import Cover from './components/Cover';
import Demo from './components/Demo';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header';
import Indicators from './components/Indicators';
import Info from './components/Info';
import Popup from './components/Popup';



import '././scss/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
				<Popup />
				<Header />
				<main>
					<Cover />
					<Info />
					<Indicators />
					<Demo />
					<Faq />
					<Contact />
				</main>
				<Footer />
      </div>
    );
  }
}

export default App;
