/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
    };
  }

  increaseVotes = () => {
    this.setState({
      votes: this.state.votes + 1,
    });
  };

  render() {
    return (
      <>
        <Card style={{ width: "40rem" }}>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Img
            variant="top"
            src={this.props.imageUrl}
            alt="horned"
            title="horned"
          />
          <Card.Body>
          <Button onClick={this.increaseVotes}      variant="primary">
              Vote
            </Button>
            <Card.Text>❤ number of votes ❤ = {this.state.votes}</Card.Text>
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default HornedBeast;