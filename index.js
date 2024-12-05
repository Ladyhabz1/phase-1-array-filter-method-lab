// Code your solution here
function findMatching(drivers, name) {
    // Compare names while ignoring case
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
    // Compare only the starting letters
    return drivers.filter(driver => driver.startsWith(letters));
}

function matchName(drivers, name) {
    // Match against the name property in objects
    return drivers.filter(driver => driver.name === name);
}