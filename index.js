// Write your solution in this file!
const driver = {}
function updateDriverWithKeyAndValue(driver, key, value) {
  newDriver = Object.assign({}, driver);
  driver[key] = value;
  return newDriver
}