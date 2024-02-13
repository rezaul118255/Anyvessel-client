function calculateAge(date) {
  const day = date?.day;
  const month = date?.month;
  const year = date?.year;
  const userDateOfBirth = new Date(`${day}, ${month}, ${year}`);
  const currentDate = new Date();

  // Calculate the age difference
  let ageDifference = currentDate.getFullYear() - userDateOfBirth.getFullYear();

  if (
    currentDate.getMonth() < userDateOfBirth.getMonth() ||
    (currentDate.getMonth() === userDateOfBirth.getMonth() &&
      currentDate.getDate() < userDateOfBirth.getDate())
  ) {
    ageDifference--;
  }

  // Return the age in the specified format
  return ageDifference;
}

export default calculateAge;
