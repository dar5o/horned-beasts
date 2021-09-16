import React from "react";
import Form from "react-bootstrap/Form";

class Filter extends React.Component {

  render() {
    return (
      <>
      <h2 className='select'>Select the # of horns you want to see</h2>
      <Form.Control  className='select' onChange={this.props.filterBeasts} as="select" size="lg">
        <option value='All'>All</option>
        <option value='1'>1 Horn</option>
        <option value='2'>2 Horns</option>
        <option value='3'>3 Horns</option>
        <option value='100'>100 Horns</option>
      </Form.Control>
      <br />
      <hr />

    </>
    );
  }
}

export default Filter;