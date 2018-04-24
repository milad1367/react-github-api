import React, { Component } from 'react';
import Axios from 'axios';

class IssuesList extends Component {
    constructor(props) {
        super(props);
        this.state = { issues : [] }
    }
    componentDidMount() {
        const GithubOpenIssuesUrl = "https://api.github.com/repos/angular/angular/issues?state=open";
        Axios.get(GithubOpenIssuesUrl)
         .then(res=> {
             this.setState({ issues : res.data });
         })
         .then(() => console.log(this.state.issues));
    }
    render() {
        return (
            <div>
               <ul> 
                   <li> one </li>
               </ul>
            </div>
        )
    }
}

export default IssuesList