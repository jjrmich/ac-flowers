import React, { Component } from 'react';
import CosmoGrid from '../Grids/CosmoGrid';

class Cosmos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xrSelected: '1',
      xySelected: '1',
      xsSelected: '1',
      xr1: 1,
      xr2: 0,
      xy1: 1,
      xy2: 0,
      xs1: 1,
      xs2: 0,
      yrSelected: '1',
      yySelected: '1',
      ysSelected: '0',
      yr1: 1,
      yr2: 0,
      yy1: 1,
      yy2: 0,
      ys1: 0,
      ys2: 0,
    }
  }

  calculateColor(r1, r2, y1, y2, s1, s2) {

    // rr
    if (r1 === 0 && r2 === 0) {
      // rryy??
      if (y1 === 0 && y2 === 0) {
        return 'cosmo-white';
      }
      // rrYY??
      else if (y1 === 1 && y2 === 1) {
        return 'cosmo-yellow';
      }
      // rrYy
      else {
        // rrYySS
        if (s1 === 1 && s2 === 1) {
          return 'cosmo-white';
        }
        // rrYySs or rrYyss
        else {
          return 'cosmo-yellow'
        }
      }
    }

    // RR
    else if (r1 === 1 && r2 === 1) {
      // RRyy??
      if (y1 === 0 && y2 === 0) {
        return 'cosmo-red';
      }
      // RRYY
      else if (y1 === 1 && y2 === 1) {
        // RRYYSS
        if (s1 === 1 && s2 === 1) {
          return 'cosmo-red';
        }
        // RRYYSs or RRYYss
        else {
          return 'cosmo-black';
        }
      }
      // RRYy
      else {
        // RRYySS
        if(s1 === 1 && s2 === 1) {
          return 'cosmo-red';
        }
        // RRYySs or RRYYss
        else {
          return 'cosmo-orange';
        }
      }
    }

    // Rr
    else {
      // Rryy??
      if (y1 === 0 && y2 === 0) {
        return 'cosmo-pink';
      }
      // RrYY??
      else if (y1 === 1 && y2 === 1) {
        return 'cosmo-orange';
      }
      // RrYy
      else {
        // RrYySS
        if (s1 === 1 && s2 === 1) {
          return 'cosmo-pink';
        }
        // RrYySs or RrYyss
        else {
          return 'cosmo-orange'
        }
      }
    }
  }

  handleXrChange = changeEvent => {
    this.setState({
      xrSelected: changeEvent.target.value,
      xr1: changeEvent.target.value !== '0' ? 1 : 0,
      xr2: changeEvent.target.value === '2' ? 1 : 0,
    });
  }

  handleXyChange = changeEvent => {
    this.setState({
      xySelected: changeEvent.target.value,
      xy1: changeEvent.target.value !== '0' ? 1 : 0,
      xy2: changeEvent.target.value === '2' ? 1 : 0,
    });
  }

  handleXsChange = changeEvent => {
    this.setState({
      xsSelected: changeEvent.target.value,
      xs1: changeEvent.target.value !== '0' ? 1 : 0,
      xs2: changeEvent.target.value === '2' ? 1 : 0,
    });
  }

  handleYrChange = changeEvent => {
    this.setState({
      yrSelected: changeEvent.target.value,
      yr1: changeEvent.target.value !== '0' ? 1 : 0,
      yr2: changeEvent.target.value === '2' ? 1 : 0,
    });
  }

  handleYyChange = changeEvent => {
    this.setState({
      yySelected: changeEvent.target.value,
      yy1: changeEvent.target.value !== '0' ? 1 : 0,
      yy2: changeEvent.target.value === '2' ? 1 : 0,
    });
  }

  handleYsChange = changeEvent => {
    this.setState({
      ysSelected: changeEvent.target.value,
      ys1: changeEvent.target.value !== '0' ? 1 : 0,
      ys2: changeEvent.target.value === '2' ? 1 : 0,
    });
  }

  render() {
    let newX = [[this.state.xr1,this.state.xr2],[this.state.xy1,this.state.xy2],[this.state.xs1,this.state.xs2]];
    let newY = [[this.state.yr1,this.state.yr2],[this.state.yy1,this.state.yy2],[this.state.ys1,this.state.ys2]];
    return (
      <>
        <div className='row py-5'>
          <div className='col-3'>
            <form className='top-form'>
              <div className={'current-color ' + this.calculateColor(this.state.yr1,this.state.yr2,this.state.yy1,this.state.yy2,this.state.ys1,this.state.ys2)}>
              </div>
                <div className='row'>
                <div className='col-4'>
                  <input
                    type="radio"
                    name="r-select"
                    id="RR"
                    value="2"
                    checked={this.state.yrSelected === '2'}
                    onChange={this.handleYrChange}
                  />
                  <label htmlFor="RR">RR</label>
                </div>
                <div className='col-4'>
                  <input
                    type="radio"
                    name="r-select"
                    id="Rr"
                    value="1"
                    checked={this.state.yrSelected === '1'}
                    onChange={this.handleYrChange}
                  />
                  <label htmlFor="Rr">Rr</label>
                </div>
                <div className='col-4'>
                  <input
                    type="radio"
                    name="r-select"
                    id="rr"
                    value="0"
                    checked={this.state.yrSelected === '0'}
                    onChange={this.handleYrChange}
                  />
                  <label htmlFor="rr">rr</label>
                </div>
              </div>

                <div className='row'>
                <div className='col-4'>
                  <input
                    type="radio"
                    name="y-select"
                    id="YY"
                    value="2"
                    checked={this.state.yySelected === '2'}
                    onChange={this.handleYyChange}
                  />
                  <label htmlFor="YY">YY</label>
                </div>
                <div className='col-4'>
                  <input
                    type="radio"
                    name="y-select"
                    id="Yy"
                    value="1"
                    checked={this.state.yySelected === '1'}
                    onChange={this.handleYyChange}
                  />
                  <label htmlFor="Yy">Yy</label>
                </div>
                <div className='col-4'>
                  <input
                    type="radio"
                    name="y-select"
                    id="yy"
                    value="0"
                    checked={this.state.yySelected === '0'}
                    onChange={this.handleYyChange}
                  />
                  <label htmlFor="yy">yy</label>
                </div>
              </div>

                <div className='row'>
                <div className='col-4'>
                  <input
                    type="radio"
                    name="s-select"
                    id="SS"
                    value="2"
                    checked={this.state.ysSelected === '2'}
                    onChange={this.handleYsChange}
                  />
                  <label htmlFor="SS">SS</label>
                </div>
                <div className='col-4'>
                  <input
                    type="radio"
                    name="s-select"
                    id="Ss"
                    value="1"
                    checked={this.state.ysSelected === '1'}
                    onChange={this.handleYsChange}
                  />
                  <label htmlFor="Ss">Ss</label>
                </div>
                <div className='col-4'>
                  <input
                    type="radio"
                    name="s-select"
                    id="ss"
                    value="0"
                    checked={this.state.ysSelected === '0'}
                    onChange={this.handleYsChange}
                  />
                  <label htmlFor="ss">ss</label>
                </div>
              </div>

            </form>
              <form>
                <div className={'current-color ' + this.calculateColor(this.state.xr1,this.state.xr2,this.state.xy1,this.state.xy2,this.state.xs1,this.state.xs2)}></div>
                <div className='row'>
                  <div className='col-4'>
                    <input
                      type="radio"
                      name="r-select"
                      id="RR"
                      value="2"
                      checked={this.state.xrSelected === '2'}
                      onChange={this.handleXrChange}
                    />
                    <label htmlFor="RR">RR</label>
                  </div>
                  <div className='col-4'>
                    <input
                      type="radio"
                      name="r-select"
                      id="Rr"
                      value="1"
                      checked={this.state.xrSelected === '1'}
                      onChange={this.handleXrChange}
                    />
                    <label htmlFor="Rr">Rr</label>
                  </div>
                  <div className='col-4'>
                    <input
                      type="radio"
                      name="r-select"
                      id="rr"
                      value="0"
                      checked={this.state.xrSelected === '0'}
                      onChange={this.handleXrChange}
                    />
                    <label htmlFor="rr">rr</label>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-4'>
                    <input
                      type="radio"
                      name="y-select"
                      id="YY"
                      value="2"
                      checked={this.state.xySelected === '2'}
                      onChange={this.handleXyChange}
                    />
                    <label htmlFor="YY">YY</label>
                  </div>
                  <div className='col-4'>
                    <input
                      type="radio"
                      name="y-select"
                      id="Yy"
                      value="1"
                      checked={this.state.xySelected === '1'}
                      onChange={this.handleXyChange}
                    />
                    <label htmlFor="Yy">Yy</label>
                  </div>
                  <div className='col-4'>
                    <input
                      type="radio"
                      name="y-select"
                      id="yy"
                      value="0"
                      checked={this.state.xySelected === '0'}
                      onChange={this.handleXyChange}
                    />
                    <label htmlFor="yy">yy</label>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-4'>
                    <input
                      type="radio"
                      name="s-select"
                      id="SS"
                      value="2"
                      checked={this.state.xsSelected === '2'}
                      onChange={this.handleXsChange}
                    />
                    <label htmlFor="SS">SS</label>
                  </div>
                  <div className='col-4'>
                    <input
                      type="radio"
                      name="s-select"
                      id="Ss"
                      value="1"
                      checked={this.state.xsSelected === '1'}
                      onChange={this.handleXsChange}
                    />
                    <label htmlFor="Ss">Ss</label>
                  </div>
                  <div className='col-4'>
                    <input
                      type="radio"
                      name="s-select"
                      id="ss"
                      value="0"
                      checked={this.state.xsSelected === '0'}
                      onChange={this.handleXsChange}
                    />
                    <label htmlFor="ss">ss</label>
                  </div>
                </div>

                </form>
          </div>
          <div className='col-9'>
            <div>
              <CosmoGrid
                x={newX}
                y={newY}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Cosmos;