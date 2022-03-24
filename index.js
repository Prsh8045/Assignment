import React, {} from 'react';
import ReactDOM from 'react-dom';
 
class ToggleButton extends 
React.Component {
  constructor(props){
    super(props);
    this.handleClick.bind(this);
    this.state={
      isMarco:false}
    }

    handleClick(){
      this.setState(state=>({
        isMarco:!this.state.isMarco
         }));
    }
    render(){
      return(
        <>
          {this.state.isMarco ? <h1>Polo</h1>:<h1>Marco</h1>}
          <button onClick={this.handleClick}>{this.state.isMarco? "Marco": "Polo"}</button>
        </>
      );
    }
  }
  ReactDOM.render(
    <ToggleButton/>,
    document.getElementById('root')

  );
