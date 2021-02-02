import React, { Component } from 'react';
import ProgressBar from "./ProgressBar";

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "JavaScript", xp:1.5},
            {id: 2, value: "CSS", xp: 1.5},
            {id: 3, value: "PHP", xp: 0.5},
            {id: 4, value: "Solidity", xp: 1.5}
        ],
        frameworks: [
            {id: 1, value: "ReactJS", xp: 1.8},
            {id: 2, value: "Bootstrap", xp: 1.2},
            {id: 3, value: "SASS", xp: 1.5},
            {id: 4, value: "VueJS", xp: 0.8},
                ]
    }
    
    render() {
        let {languages, frameworks} = this.state;

        return (
            <div className="languagesFrameworks">
            <ProgressBar
            languages={languages}
            className="languagesDisplay"
            title="languages"
            />
            <ProgressBar
            languages={frameworks}
            title="frameworks & bibliotèques"
            className="frameworksDisplay"
            
            />
            </div>
        );
    }
}

export default Languages;