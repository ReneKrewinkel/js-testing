import { functionOne, functionTwo, functionThree } from './helperFunctions'

// This is the main function that calls several other functions
export const mainFunction = async () => {
  try {
    const resultOne = await functionOne();
    const resultTwo = await functionTwo();
    const resultThree = await functionThree();

    return {
      resultOne,
      resultTwo,
      resultThree,
    };
  } catch (error) {
    throw new Error('Something went wrong in the main function');
  }
}
