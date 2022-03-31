let yearinsec = 31557600; //time of a year in seconds on earth
const planets = {
    earth: 1,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
}
function dogYears(planet, dogsAge) {
    dogsAge /= yearinsec
    let orbitalperiod = planets[planet]
    dogsAge = dogsAge / orbitalperiod * 7 //convert to dog years (*7) for specific planet (period)
    return Math.round(dogsAge * 100) / 100; //round to 2 decimal places
}
console.log(dogYears('earth', 1000000000))