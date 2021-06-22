import React from 'react';
const Results = (props) => {
    const { allTabs, currentTabIndex } = props;

    return (
        <div classname="results">
            { allTabs[currentTabIndex].content }
        </div>
    )
}

export default Results;
