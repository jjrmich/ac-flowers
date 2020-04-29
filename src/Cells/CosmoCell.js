import React, {Component} from 'react';
import { calculateCosmoColor } from '../helpers';

class CosmoCell extends Component {
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
      return 'yy'
    }
    else if (y1 === 1 && y2 === 1) {
      return 'YY'
    }
    else {
      return 'Yy'
    }
  }

  sGeneResult(s1, s2) {
    if (s1 === 0 && s2 === 0) {
      return 'ss'
    }
    else if (s1 === 1 && s2 === 1) {
      return 'SS'
    }
    else {
      return 'Ss'
    }
  }

  render(){
    return (
      <td>
        <div className={"cell " + (
          calculateCosmoColor(
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

export default CosmoCell;