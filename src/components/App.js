import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import styles from "./App.module.css"

const App = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <Main />
        </div>
    );
}

export default App;