import React from "react";
import HornedBeast from "./hornedbeasts";
import "./Main.css";
import data from "./data.json";
import Filter from "./filter.js";


class Main extends React.Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      dataForMap2: data,
    };
  }
  filterBeasts = (event) => {
    
    event.preventDefault();    
    
    let newArr = [];

    let newData = Number(event.target.value);
    if (!(isNaN(newData))) {
      newArr = data.filter((item) => {
        if (item.horns === newData) {
          return 1;
        } 
      });

     

    }  else  {
      newArr = data;
    }
    this.setState({
      dataForMap2: newArr,
    });
  };



  render() {
    return (
      <>
          <Filter filterBeasts={this.filterBeasts}/>
          <hr></hr>
          <div id="con">
        {this.state.dataForMap2.map((item, i) => {
          return (
            <HornedBeast
              key={i}
              title={item.title}
              imageUrl={item.image_url}
              description={item.description}
              showModal={this.props.showModal}
              // horns={this.props.horns}
            />
          );
        })}
        </div>

      </>
    );
  }
}

export default Main;