export const calculateCosmoColor = (r1, r2, y1, y2, s1, s2) => {
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

export const calculateLilyColor = (r1, r2, y1, y2, s1, s2) => {
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