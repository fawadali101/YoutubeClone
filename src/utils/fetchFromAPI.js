import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '03f6a79b54msh199551d98864bd5p132e9djsndab94db2ec70', 
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async(url)=>{
  const {data} = await axios.get(`${BASE_URL}/${url}`, options)

  return data
}