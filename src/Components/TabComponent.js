import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import TabDoor from "./Tab_Navs/TabDoor";
import TabDevice from "./Tab_Navs/TabDevice";
import TabPrices from "./Tab_Navs/TabPrices";
import TabContentOne from "./TabContentOne";
import TabContentTwo from "./TabContentTwo";
import TabContentThree from "./TabContentThree";
import '../Css/TabNav.css'


class TabComponent extends Component {
    state = {
        tabIndex: 0
    };
    render() {
        return (
            <div>
                <Tabs className="tabs"
                      selectedIndex={ this.state.tabIndex }
                      onSelect={ tabIndex => this.setState({ tabIndex })}
                >
                    <TabList className="tab-nav-container">
                        <Tab className={`${this.state.tabIndex === 0 ? 'tab-selected active' : null }`}>
                            <TabDoor/>
                            <p className="lgScreen" style={{ marginBottom: '1.875rem' }}>
                                <strong>
                                    No commitments
                                    <br />
                                    Cancel online at anytime
                                </strong>
                            </p>
                            <span className="mdScreen" style={{ marginTop: '0.4rem' }}>
                Cancel
              </span>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 1 ? 'tab-selected active' : null }`}>
                            <TabDevice/>
                            <p className="lgScreen" style={{ marginTop: '-5.3125rem' }}>
                                <strong>Watch anywhere</strong>
                            </p>
                            <span className="mdScreen" style={{ marginTop: '-5.3125rem' }}>
                Devices
              </span>

                        </Tab>
                        <Tab className={`${this.state.tabIndex === 2 ? 'tab-selected active' : null }`}>
                            <TabPrices/>
                            <p>
                                <strong>Pick your price</strong>
                            </p>

                        </Tab>
                    </TabList>
                    <TabPanel>
                        <TabContentOne />
                    </TabPanel>
                    <TabPanel>
                        <TabContentTwo />
                    </TabPanel>
                    <TabPanel>
                        <TabContentThree />
                    </TabPanel>

                </Tabs>
            </div>
        );
    }
}

export default TabComponent;
