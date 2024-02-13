/**
 *
 * @param inputData in Objects
 * @returns  Errors
 * @Example usage:
 * @const errors = validateInputData(inputData);
 * @if (errors.length) {
 * @  setErrors(errors);
 * @ }
 */

export const validateInputData = (inputData = {}) => {
  const errorArr = [];

  if (!inputData) return { message: "give me a object data" };

  const checkForEmptyString = (value) =>
    value === "" || value === null || value === undefined;

  const checkObjectProperties = (obj) => {
    for (const prop of Object.keys(obj)) {
      if (checkForEmptyString(obj[prop])) {
        errorArr.push(prop);
      }
    }
  };

  for (const key of Object.keys(inputData)) {
    if (checkForEmptyString(inputData[key])) {
      errorArr.push(key);
    }

    if (typeof inputData[key] === "object") {
      // console.log("Object if ", inputData[key]);

      for (const key1 of Object.keys(inputData[key])) {
        //   console.log("key1 ", key1);

        if (checkForEmptyString(inputData[key][key1])) {
          errorArr.push(key1);
        }
      }

      if (
        typeof inputData[key] === "object" &&
        !Array.isArray(inputData[key])
      ) {
        checkObjectProperties(inputData[key]);
      }

      if (
        Array.isArray(inputData[key]) &&
        inputData[key].some((element) => checkForEmptyString(element))
      ) {
        errorArr.push(key);
      }
    }
  }

  //   console.log("errorArr ", errorArr);
  return errorArr;
};
