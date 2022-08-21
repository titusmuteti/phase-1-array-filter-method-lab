
//First test
function findMatching (driver, attribute) {
    return driver.filter(function(drivers){
        return drivers.toLowerCase() === attribute.toLowerCase()
    })
}

//Second test
function fuzzyMatch(driver, attribute) {
    return driver.filter(function(drivers){
        return drivers[0] === attribute[0]
    })
}

//Third test
function matchName(driver, attribute) {
    return driver.filter(function(drivers){
        return drivers.name === attribute
    })
}
