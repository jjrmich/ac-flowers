export const calculateCosmoColor = (r1, r2, y1, y2, s1, s2) => {
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