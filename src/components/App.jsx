import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
// import '../styles/App-styles.css';

function App(){
    return (
    <div className='app-container'>
        <Header />
        <Note />
        <Footer />
    </div>
    )
}
export default App;