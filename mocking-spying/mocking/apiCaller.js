// apiCaller.js
import { fetchDataFromAPI } from './fetchDataFromAPI' // Import the API function

// This is the function that calls the async function
export const  fetchData = async () => {
    try {
      const result = await fetchDataFromAPI()
      result.description = "Hello"
      result.status = { code: 418, message: "I'm a teapot"}
      /// doe van alles en nog wat...
      return result
    } catch (error) {
      throw new Error('Failed to fetch data')
    }
  }
