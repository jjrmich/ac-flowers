import React, { Component } from 'react';
import ThreeCell from '../Cells/ThreeCell';

class ThreeGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  geneConvert(r,y,s,geneName) {
    var rGene = 'r';
    var yGene = geneName === 'row' ? 'o' : 'y';
    var sGene = geneName === 'rys' ? 's' : 'w';

    if (r === 1) {
      rGene = 'R';
    } 
    if (y === 1) {
      yGene = geneName === 'row' ? 'O' : 'Y';
    } 
    if (s === 1) {
      sGene = geneName === 'rys' ? 'S' : 'W';;
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
          firstRow.push(<th scope="col">{this.geneConvert(this.props.x[0][d],this.props.x[1][e],this.props.x[2][f],this.props.geneName)}</th>);
        }
      }
    }
    grid.push(<tr>{firstRow}</tr>);

    for (var a = 0; a < 2; a++) {
      for (var b = 0; b < 2; b++) {
        for (var c = 0; c < 2; c++) {

          let row = [];
          row.push(<th scope="row">{this.geneConvert(this.props.y[0][a],this.props.y[1][b],this.props.y[2][c],this.props.geneName)}</th>);

          for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 2; j++) {
              for (var k = 0; k < 2; k++) {
                row.push(
                  <ThreeCell
                    key={k + j*2 + i*4} 
                    res={[
                      [this.props.x[0][i],this.props.y[0][a]],
                      [this.props.x[1][j],this.props.y[1][b]],
                      [this.props.x[2][k],this.props.y[2][c]]
                    ]}
                    flowerName={this.props.flowerName}
                    geneName={this.props.geneName}
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
    return (
      <div className='row'>
        <table>
          <tbody>{this.createGrid()}</tbody>
        </table>
      </div>
    )
  }
}

export default ThreeGrid;