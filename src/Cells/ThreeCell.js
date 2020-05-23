import React, {Component} from 'react';
import { calculateThreeColor } from '../helpers';

class ThreeCell extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  rGeneResult(r1, r2) {
    if (r1 === 0 && r2 === 0) {
      return 'rr'
    }
    else if (r1 === 1 && r2 === 1) {
      return 'RR'
    }
    else {
      return 'Rr'
    }
  }

  yGeneResult(y1, y2) {
    if (y1 === 0 && y2 === 0) {
      return this.props.geneName === 'row' ? 'oo' : 'yy'
    }
    else if (y1 === 1 && y2 === 1) {
      return this.props.geneName === 'row' ? 'OO' : 'YY'
    }
    else {
      return this.props.geneName === 'row' ? 'Oo' : 'Yy'
    }
  }

  sGeneResult(s1, s2) {
    if (s1 === 0 && s2 === 0) {
      return this.props.geneName === 'rys' ? 'ss' : 'ww'
    }
    else if (s1 === 1 && s2 === 1) {
      return this.props.geneName === 'rys' ? 'SS' : 'WW'
    }
    else {
      return this.props.geneName === 'rys' ? 'Ss' : 'Ww'
    }
  }

  render(){
    return (
      <td>
        <div className={"cell " + (
          calculateThreeColor(
            this.props.flowerName,
            this.props.res[0][0],
            this.props.res[0][1],
            this.props.res[1][0],
            this.props.res[1][1],
            this.props.res[2][0],
            this.props.res[2][1]
          )
        )}>
          <span>
            {this.rGeneResult(this.props.res[0][0],this.props.res[0][1])}
            {this.yGeneResult(this.props.res[1][0],this.props.res[1][1])}
            {this.sGeneResult(this.props.res[2][0],this.props.res[2][1])}
          </span>
        </div>
      </td>
    );
  }
}

export default ThreeCell;