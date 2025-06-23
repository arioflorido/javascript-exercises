function computeAge(yearOfBirth, yearOfDeath) {
  if (yearOfDeath === undefined) {
    const currentYear = new Date().getFullYear();
    return currentYear - yearOfBirth;
  }
  return yearOfDeath - yearOfBirth;
}

const findTheOldest = (people) => {
  let oldestAge = 0;
  let oldestPerson;
  people.forEach((person) => {
    const currentAge = computeAge(person.yearOfBirth, person.yearOfDeath);
    if (currentAge > oldestAge) {
      oldestPerson = person;
      oldestAge = currentAge;
    }
  });
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
