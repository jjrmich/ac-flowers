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
      y1: 1,
      y2: 0,
      s1: 1,
      s2: 0,
    }
  }

  handleRChange = changeEvent => {
    this.setState({
      rSelected: changeEvent.target.value,
      r1: changeEvent.target.value !== '0' ? 1 : 0,
      r2: changeEvent.target.value === '2' ? 1 : 0,
    });
  }

  handleYChange = changeEvent => {
    this.setState({
      ySelected: changeEvent.target.value,
      y1: changeEvent.target.value !== '0' ? 1 : 0,
      y2: changeEvent.target.value === '2' ? 1 : 0,
    });
  }

  handleSChange = changeEvent => {
    this.setState({
      sSelected: changeEvent.target.value,
      s1: changeEvent.target.value !== '0' ? 1 : 0,
      s2: changeEvent.target.value === '2' ? 1 : 0,
    });
  }

  render() {
    let newX = [[this.state.r1,this.state.r2],[this.state.y1,this.state.y2],[this.state.s1,this.state.s2]];
    return (
      <>
        <form>

          <div className='row'>
            <div className='col-2'>
              <input
                type="radio"
                name="r-select"
                id="RR"
                value="2"
                checked={this.state.rSelected === '2'}
                onChange={this.handleRChange}
              />
              <label htmlFor="RR">RR</label>
            </div>
            <div className='col-2'>
              <input
                type="radio"
                name="r-select"
                id="Rr"
                value="1"
                checked={this.state.rSelected === '1'}
                onChange={this.handleRChange}
              />
              <label htmlFor="Rr">Rr</label>
            </div>
            <div className='col-2'>
              <input
                type="radio"
                name="r-select"
                id="rr"
                value="0"
                checked={this.state.rSelected === '0'}
                onChange={this.handleRChange}
              />
              <label htmlFor="rr">rr</label>
            </div>
          </div>
          
          <div className='row'>
            <div className='col-2'>
              <input
                type="radio"
                name="y-select"
                id="YY"
                value="2"
                checked={this.state.ySelected === '2'}
                onChange={this.handleYChange}
              />
              <label htmlFor="YY">YY</label>
            </div>
            <div className='col-2'>
              <input
                type="radio"
                name="y-select"
                id="Yy"
                value="1"
                checked={this.state.ySelected === '1'}
                onChange={this.handleYChange}
              />
              <label htmlFor="Yy">Yy</label>
            </div>
            <div className='col-2'>
              <input
                type="radio"
                name="y-select"
                id="yy"
                value="0"
                checked={this.state.ySelected === '0'}
                onChange={this.handleYChange}
              />
              <label htmlFor="yy">yy</label>
            </div>
          </div>

          <div className='row'>
            <div className='col-2'>
              <input
                type="radio"
                name="s-select"
                id="SS"
                value="2"
                checked={this.state.sSelected === '2'}
                onChange={this.handleSChange}
              />
              <label htmlFor="SS">SS</label>
            </div>
            <div className='col-2'>
              <input
                type="radio"
                name="s-select"
                id="Ss"
                value="1"
                checked={this.state.sSelected === '1'}
                onChange={this.handleSChange}
              />
              <label htmlFor="Ss">Ss</label>
            </div>
            <div className='col-2'>
              <input
                type="radio"
                name="s-select"
                id="ss"
                value="0"
                checked={this.state.sSelected === '0'}
                onChange={this.handleSChange}
              />
              <label htmlFor="ss">ss</label>
            </div>
          </div>

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