import React from "react";
import HornedBeast from "./hornedbeasts";
import "./Main.css";
import data from "./data.json";
class Main extends React.Component {
  //showModal = () => {
   // this.setState({
   //   show: true
 //   });
//  };
  render() {
    return (
      <>
        {data.map( (item, i) => {
          return (

            <HornedBeast
             key = {i}
              title={item.title}
              imageUrl={item.image_url}
              description={item.description}
              showModal={this.props.showModal}
            />
          );
        })}
      </>
    );
  }
}

export default Main; 