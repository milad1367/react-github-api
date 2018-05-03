import React, { Component } from 'react';
import Axios from 'axios';
import Markdown from 'markdown-to-jsx';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class IssuesList extends Component {
    constructor(props) {
        super(props);
        this.state = { issues : [] }
    }
    componentDidMount() {
        const GithubOpenIssuesUrl = "https://api.github.com/repos/facebook/react/issues?state=open";
        Axios.get(GithubOpenIssuesUrl)
         .then(res=> {
             this.setState({ issues : res.data });
         })
         .then(() => { console.log(this.state.issues)});
    }
    render() {

        let titles;
        if (this.state.issues.length > 1 ) {
             titles = this.state.issues.map((item) => 
              
                 <li key = {item.id.toString()}>
                     <Link to={`issue/${item.number}`}>{<Markdown>{item.title}</Markdown>} </Link>
                 </li>         
            )          
        }
        else {
             titles = "loading ... ";

        }
        return (
            <div>
                <ul>
                    {titles}
                </ul>
            </div>
        )
    }
}

export default IssuesList

