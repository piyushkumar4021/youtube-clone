import axios from 'axios';

const regionCode = navigator.language.split('-')[1];

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    regionCode,
    key: 'AIzaSyAU8UzK7-baTmxk-Qtg0zb2RqZahTXrD5I',
  },
});
