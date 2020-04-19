import React, { Component } from 'react';
import CosmoCell from '../Cells/CosmoCell';

class CosmoGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // x1: props.x[0],
      // x2: props.x[1],
      // x3: props.x[2],
      // y1: props.y[0],
      // y2: props.y[1],
      // y3: props.y[2],
    }
  }

  geneConvert(r,y,s) {
    var rGene = 'r';
    var yGene = 'y';
    var sGene = 's';

    if (r === 1) {
      rGene = 'R';
    } 
    if (y === 1) {
      yGene = 'Y';
    } 
    if (s === 1) {
      sGene = 'S';
    } 

    return (<>{rGene}{yGene}{sGene}</>);
  }

  createGrid = () => {
    // console.log(this.state);
    let grid = [];

    let firstRow = [];
    firstRow.push(<th scope="col"></th>);
    for (var d = 0; d < 2; d++) {
      for (var e = 0; e < 2; e++) {
        for (var f = 0; f < 2; f++) {
          firstRow.push(<th scope="col">{this.geneConvert(this.props.x[0][d],this.props.x[1][e],this.props.x[2][f])}</th>);
        }
      }
    }
    grid.push(<tr>{firstRow}</tr>);

    for (var a = 0; a < 2; a++) {
      for (var b = 0; b < 2; b++) {
        for (var c = 0; c < 2; c++) {

          let row = [];
          row.push(<th scope="row">{this.geneConvert(this.props.y[0][a],this.props.y[1][b],this.props.y[2][c])}</th>);

          for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 2; j++) {
              for (var k = 0; k < 2; k++) {
                row.push(
                  <CosmoCell
                    key={k + j*2 + i*4} 
                    res={[
                      [this.props.x[0][i],this.props.y[0][a]],
                      [this.props.x[1][j],this.props.y[1][b]],
                      [this.props.x[2][k],this.props.y[2][c]]
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
    console.log('props.x[0]: ' + this.props.x[0]);
    return (
      <div className='row'>
        <table>
          <tbody>{this.createGrid()}</tbody>
        </table>
      </div>
    )
  }
}

export default CosmoGrid;