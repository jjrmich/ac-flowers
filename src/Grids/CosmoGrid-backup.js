import React, { Component } from 'react';
import CosmoCell from '../Cells/CosmoCell';

class CosmoGrid extends Component {
  constructor(props) {
    console.log('props.x: ' + props.x);
    super(props);
    this.state = {
      // setting the state with props here
      // means those state values don't change
      // on re-render
      x1: props.x[0],
      x2: props.x[1],
      x3: props.x[2],
      y1: props.y[0],
      y2: props.y[1],
      y3: props.y[2],
    }
  }

  createGrid = () => {
    // console.log(this.state);
    let grid = [];

    for (var a = 0; a < 2; a++) {
      for (var b = 0; b < 2; b++) {
        for (var c = 0; c < 2; c++) {

          let row = [];

          for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 2; j++) {
              for (var k = 0; k < 2; k++) {
                row.push(
                  <CosmoCell
                    key={k + j*2 + i*4} 
                    res={[
                      [this.state.x1[i],this.state.y1[a]],
                      [this.state.x2[j],this.state.y2[b]],
                      [this.state.x3[k],this.state.y3[c]]
                    ]}
                  />
                );
              }
            }
          }

          grid.push(<tr key={c + b*2 + a*4}>{row}</tr>);

        }
      }
    }

    return grid;

  }

  render() {
    console.log('x1: ' + this.state.x1);
    return (
      <table>
        <tbody>{this.createGrid()}</tbody>
      </table>
    )
  }
}

export default CosmoGrid;