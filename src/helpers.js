let calculateCosmoColor = (r1, r2, y1, y2, s1, s2) => {
  // rr
  if (r1 === 0 && r2 === 0) {
    // rryy??
    if (y1 === 0 && y2 === 0) {
      return 'flower-white';
    }
    // rrYY??
    else if (y1 === 1 && y2 === 1) {
      return 'flower-yellow';
    }
    // rrYy
    else {
      // rrYySS
      if (s1 === 1 && s2 === 1) {
        return 'flower-white';
      }
      // rrYySs or rrYyss
      else {
        return 'flower-yellow';
      }
    }
  }

  // RR
  else if (r1 === 1 && r2 === 1) {
    // RRyy??
    if (y1 === 0 && y2 === 0) {
      return 'flower-red';
    }
    // RRYY
    else if (y1 === 1 && y2 === 1) {
      // RRYYSS
      if (s1 === 1 && s2 === 1) {
        return 'flower-red';
      }
      // RRYYSs or RRYYss
      else {
        return 'flower-black';
      }
    }
    // RRYy
    else {
      // RRYySS
      if(s1 === 1 && s2 === 1) {
        return 'flower-red';
      }
      // RRYySs or RRYYss
      else {
        return 'flower-orange';
      }
    }
  }

  // Rr
  else {
    // Rryy??
    if (y1 === 0 && y2 === 0) {
      return 'flower-pink';
    }
    // RrYY??
    else if (y1 === 1 && y2 === 1) {
      return 'flower-orange';
    }
    // RrYy
    else {
      // RrYySS
      if (s1 === 1 && s2 === 1) {
        return 'flower-pink';
      }
      // RrYySs or RrYyss
      else {
        return 'flower-orange';
      }
    }
  }
}

let calculateLilyColor = (r1, r2, y1, y2, s1, s2) => {
  // rr
  if (r1 === 0 && r2 === 0) {
    // rryy??
    if (y1 === 0 && y2 === 0) {
      return 'flower-white';
    }
    // rrYY??
    else if (y1 === 1 && y2 === 1) {
      // rrYYSS
      if (s1 === 1 && s2 === 1) {
        return 'flower-white';
      }
      // rrYYSs or rrYYss
      else {
        return 'flower-yellow';
      }
    }
    // rrYy
    else {
      // rrYyss
      if (s1 === 0 && s2 === 0) {
        return 'flower-yellow';
      }
      // rrYySS or rrYySs
      else {
        return 'flower-white';
      }
    }
  }

  // RR
  else if (r1 === 1 && r2 === 1) {
    // RRYY
    if (y1 === 1 && y2 === 1) {
      // RRYYSS
      if (s1 === 1 && s2 === 1) {
        return 'flower-white';
      }
      // RRYYSs or RRYYss
      else {
        return 'flower-orange';
      }
    }
    // RRYy or RRyy
    else {
      // RRYyss or RRyyss
      if (s1 === 0 && s2 === 0) {
        return 'flower-black';
      }
      // RRYySS or RRyySS
      else if (s1 === 1 && s2 === 1) {
        return 'flower-pink';
      }
      // RRYySs or RRyySs
      else {
        return 'flower-red';
      }
    }
  }

  // Rr
  else {
    // Rryy
    if (y1 === 0 && y2 === 0) {
      // Rryyss
      if (s1 === 0 && s2 === 0) {
        return 'flower-red';
      }
      // RryySS
      else if (s1 === 1 && s2 === 1) {
        return 'flower-white';
      }
      // RryySs
      else {
        return 'flower-pink';
      }
    }
    // RrYY or RRYy
    else {
      // RrYYss or RrYyss
      if (s1 === 0 && s2 === 0) {
        return 'flower-orange';
      }
      // RrYYSS, RrYySS, RrYYSs, or RrYySs
      else {
        return 'flower-yellow';
      }
    }
  }
}

let calculatePansyColor = (r1, r2, y1, y2, w1, w2) => {
  // rr
  if (r1 === 0 && r2 === 0) {
    // rrYY
    if (y1 === 1 && y2 === 1) {
      return 'flower-yellow';
    }
    // rrYyww or rryyww
    else if (w1 === 0 && w2 === 0) {
      return 'flower-blue';
    }
    // rryyWW or rryyWw
    else if (y1 === 0 && y2 === 0) {
      return 'flower-white';
    }
    // rrYyWW or rrYyWw
    else {
      return 'flower-yellow';
    }
  }

  // RR
  else if (r1 === 1 && r2 === 1) {
    // RR[xx]ww
    if (w1 === 0 && w2 === 0) {
      return 'flower-purple';
    }
    // RRYYWW or RRYYWw
    else if (y1 === 1 && y2 === 1) {
      return 'flower-orange';
    }
    // RRyyWW, RRyyWw, RRYyWW, RRYyWw
    else {
      return 'flower-red';
    }
  }

  // Rr
  else {
    // RrYY
    if (y1 === 1 && y2 === 1) {
      return 'flower-yellow';
    }
    // Rryy
    else if (y1  === 0 && y2 === 0) {
      // Rryyww
      if (w1 === 0 && w2 === 0) {
        return 'flower-blue';
      }
      // RryyWW or RryyWw
      else {
        return 'flower-red';
      }
    }
    // RrYy
    else {
      return 'flower-orange';
    }
  }
}

export const calculateThreeColor = (flowerName, r1, r2, y1, y2, s1, s2) => {
  if(flowerName === 'cosmos') {
    return calculateCosmoColor(r1, r2, y1, y2, s1, s2);
  }
  else if(flowerName === 'lilies') {
    return calculateLilyColor(r1, r2, y1, y2, s1, s2);
  }
  else if(flowerName === 'pansies') {
    return calculatePansyColor(r1, r2, y1, y2, s1, s2);
  }
  else {
    console.log('invalid flowerName for calculateThreeColor function');
  }
}

export const geneNames = flowerName => {
  if (['cosmos', 'lilies', 'tulips'].includes(flowerName)) {
    return 'rys';
  }
  else if (['pansies', 'hyacinths', 'mums'].includes(flowerName)) {
    return 'ryw';
  }
  // should only be true for windflowers
  else {
    return 'row';
  }
}