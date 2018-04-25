import React, { Component } from 'react';
import Axios from 'axios';
import Markdown from 'markdown-to-jsx';
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
                      {<Markdown>{item.title}</Markdown>} 
                 </li>         
            )          
        }
        else {
             titles = "loading ... ";

        }
        return (
            <ul>
                {titles}
            </ul>
        )
    }
}

export default IssuesList