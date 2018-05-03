import React, { Component } from 'react';
import Axios from 'axios';
import Markdown from 'markdown-to-jsx';

class IssueDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { issue : {} }
  }
  componentDidMount() {
    const GithubOpenIssueUrl = `https://api.github.com/repos/facebook/react/issues/${this.props.match.params.id}`;
    Axios.get(GithubOpenIssueUrl)
     .then(res=> {
         this.setState({ issue : res.data });
     })
     .then(() => { console.log(this.state.issue)});
  }
  render(){
      let body,title;
      let issue = (this.state.issue) ? this.state.issue : "waiting ..." ;
      if( issue.body ) {
           body = issue.body;
           title = issue.title;
      }
      else {
          body = "wating";
          title = "title";
      }
      console.log(title);
      return (
          <div>
            <h1><Markdown>{title}</Markdown></h1>
            <Markdown>{body}</Markdown>
          </div>
      )
  }
}
export default IssueDetails