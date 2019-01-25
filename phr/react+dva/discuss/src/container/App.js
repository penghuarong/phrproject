import React, { Component } from 'react';
import RouterLink from "../router/index.jsx";
// import Head from "../components/head/head.jsx";
import "../fonts/iconfont.css";
import "../css/index.css";
import "../js/flexible.js";
class App extends Component {
    render() {
        return ( 
            <div className="App">
            <div className="wrapper">
                {/* <Head></Head> */}
                <section>
                    <RouterLink></RouterLink>
                </section>
            </div>
            </div>
        );
    }
}

export default App;