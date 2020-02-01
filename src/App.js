import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import Answer from './components/Answer';

class  App extends Component {
  state = {term:'',images:[],page:''};
  constructor(props) {
    super(props);
    this.state = {term:'',images:[],page:''};
}

scroll=()=>{
  const element= document.querySelector('.jumbotron');
  element.scrollIntoView('instant','start');
}

pagePrev=()=>{
  
    let page=this.state.page;

    if(page===1) return null;
  
    page-=1;

    this.setState({
      page
    },()=>{
      this.queryApy();
    this.scroll();});
}

pageNext=()=>{
  let page=this.state.page;

  page+=1;

  this.setState({
    page
  },()=>{
    this.queryApy();
    this.scroll();
  }
  );
}

queryApy=()=>{
  const term=this.state.term;
  const page=this.state.page;
  const url=`https://pixabay.com/api/?key=5141530-24d02f0c92c4e2d1cab593e8e&q=${term}&per_page=30&page=${page}`;

  fetch(url).then(answer=>answer.json()).then(answer=>this.setState({images:answer.hits}))
  
  
}

  DataSearch=(term)=>{
    this.setState({term:term,page:1},()=>{this.queryApy(); })
  }

  render(){
  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center"> Search Image!!</p>
        <Search DataSearch={this.DataSearch }/>
      </div>
      <div className="row justify-content-center">
      <Answer images={this.state.images} term={this.state.term} pagePrev={this.pagePrev} pageNext={this.pageNext}/>
      </div>
    </div>
  );
}
}

export default App;
