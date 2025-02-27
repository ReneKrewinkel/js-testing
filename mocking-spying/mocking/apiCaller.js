// apiCaller.js
import { fetchDataFromAPI } from './fetchDataFromAPI' // Import the API function

// This is the function that calls the async function
export const  fetchData = async () => {
    try {
      const result = await fetchDataFromAPI()
      return result
    } catch (error) {
      throw new Error('Failed to fetch data')
    }
  }
