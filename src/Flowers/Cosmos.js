import React, { Component } from 'react';
import CosmoGrid from '../Grids/CosmoGrid';

class Cosmos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rSelected: '1',
      ySelected: '1',
      sSelected: '1',
      r1: 1,
      r2: 0,
    }
  }

  handleRChange = changeEvent => {
    console.log(changeEvent.target.value);
    this.setState({
      rSelected: changeEvent.target.value,
      r1: changeEvent.target.value !== '0' ? 1 : 0,
      r2: changeEvent.target.value === '2' ? 1 : 0,
    });
    // console.log('r1: ' + this.state.r1);
    // console.log('r2: ' + this.state.r2);
  }

  render() {
    console.log('r1: ' + this.state.r1);
    console.log('r2: ' + this.state.r2);

    let newX = [[this.state.r1,this.state.r2],[1,0],[1,0]];
    return (
      <>
        <form>
          <input
            type="radio"
            name="r-select"
            id="RR"
            value="2"
            checked={this.state.rSelected === '2'}
            onChange={this.handleRChange}
          />
          <label htmlFor="RR">RR</label>

          <input
            type="radio"
            name="r-select"
            id="Rr"
            value="1"
            checked={this.state.rSelected === '1'}
            onChange={this.handleRChange}
          />
          <label htmlFor="Rr">Rr</label>

          <input
            type="radio"
            name="r-select"
            id="rr"
            value="0"
            checked={this.state.rSelected === '0'}
            onChange={this.handleRChange}
          />
          <label htmlFor="rr">rr</label>

        </form>
        <div>
          <CosmoGrid
            x={newX}
            y={[[1,0],[1,0],[0,0]]}
          />
        </div>
      </>
    )
  }
}

export default Cosmos;