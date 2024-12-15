// Code your solution here
function findMatching(drivers, name){
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === name.toLowerCase()
    })
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase().startsWith(letters.toLowerCase())
    })
}
function matchName(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.name.toLowerCase() === name.toLowerCase();
    })
}