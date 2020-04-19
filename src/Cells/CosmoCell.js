import React, {Component} from 'react';

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

  calculateColor() {

    // rr
    if (this.props.res[0][0] === 0 && this.props.res[0][1] === 0) {
      // rryy??
      if (this.props.res[1][0] === 0 && this.props.res[1][1] === 0) {
        return 'cosmo-white';
      }
      // rrYY??
      else if (this.props.res[1][0] === 1 && this.props.res[1][1] === 1) {
        return 'cosmo-yellow';
      }
      // rrYy
      else {
        // rrYySS
        if (this.props.res[2][0] === 1 && this.props.res[2][1] === 1) {
          return 'cosmo-white';
        }
        // rrYySs or rrYyss
        else {
          return 'cosmo-yellow'
        }
      }
    }

    // RR
    else if (this.props.res[0][0] === 1 && this.props.res[0][1] === 1) {
      // RRyy??
      if (this.props.res[1][0] === 0 && this.props.res[1][1] === 0) {
        return 'cosmo-red';
      }
      // RRYY
      else if (this.props.res[1][0] === 1 && this.props.res[1][1] === 1) {
        // RRYYSS
        if (this.props.res[2][0] === 1 && this.props.res[2][1] === 1) {
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
        if(this.props.res[2][0] === 1 && this.props.res[2][1] === 1) {
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
      if (this.props.res[0][0] === 0 && this.props.res[0][1] === 0) {
        // Rryy??
        if (this.props.res[1][0] === 0 && this.props.res[1][1] === 0) {
          return 'cosmo-pink';
        }
        // RrYY??
        else if (this.props.res[1][0] === 1 && this.props.res[1][1] === 1) {
          return 'cosmo-orange';
        }
        // RrYy
        else {
          // RrYySS
          if (this.props.res[2][0] === 1 && this.props.res[2][1] === 1) {
            return 'cosmo-pink';
          }
          // RrYySs or RrYyss
          else {
            return 'cosmo-orange'
          }
        }
      }
    }
  }

  render(){
    return (
      <td>
        <div className={"cell " + (this.calculateColor())}>
          <span>
            {this.rGeneResult(this.props.res[0][0],this.props.res[0][1])}{this.yGeneResult(this.props.res[1][0],this.props.res[1][1])}
            {this.sGeneResult(this.props.res[2][0],this.props.res[2][1])}
          </span>
        </div>
      </td>
    );
  }
}

export default CosmoCell;