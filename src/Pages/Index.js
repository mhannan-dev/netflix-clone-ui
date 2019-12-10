import React, {Component} from 'react';
import Header from '../Components/Header.js';
import Footer from '../Components/Footer.js';
import TabComponent from "../Components/TabComponent";


class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <TabComponent />
                <Footer />
            </div>
        );
    }
}

export default Main;
