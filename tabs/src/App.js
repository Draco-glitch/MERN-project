
import './App.css'
import React, { useState } from 'react';
import Tabs from './components/Tabs';
// eslint-disable-next-line no-unused-vars
import Results from './components/Result';

function App() {
  const tabsArray = [
    { label : "Tab 1", content : "Tabs 1 content is showing here"},
    { label: "Tab 2", content: "Tab 2 Content is showing here"},
    { label: "Tabs 3", content:"Tabs 3 content is showing here"},
    { label: "Tabs 4", content: "Tabs 4 content is showing here"},
  ];

  // eslint-disable-next-line no-unused-vars
  const [ allTabs, setAllTabs ] = useState(tabsArray);

  const [ currentTabIndex, setCurrentTabIndex ] = useState(0);

  return (
    <div classname="App">
      <Tabs 
      allTabs={ allTabs }
      currentTabIndex={ currentTabIndex }
      setCurrentTabIndex= { setCurrentTabIndex }
      />
      <results allTabs={ allTabs } currentTabIndex={ currentTabIndex } />
    </div>
  );
}

export default App;