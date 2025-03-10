// fetchDataFromAPI.js

// This async function calls an external API
export const fetchDataFromAPI = async () => {
    console.log('actual function');
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return response.json()
  }
  
