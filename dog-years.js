function dogYears(planet,age) {
    if (planet === 'mercury') {
        return age*0.2408467;
    }
    if (planet === 'venus') {
        return age*0.61519726;
    }
    if (planet === 'mars') {
        return age*1.8808158;
    }
    if (planet === 'jupiter') {
        return age*11.862615;
    }
    if (planet === 'saturn') {
        return age*29.447498;
    }
    if (planet === 'uranus') {
        return age*84.016846;
    }
    if (planet === 'neptune') {
        return age*164.79132;
    }
    return age;
  }