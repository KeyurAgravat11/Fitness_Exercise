export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'b09584228fmsh72e6de892eb4fb1p1bec35jsnb5d1ee269c1f',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};







// const options = {
//   method: 'GET',
//   url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
//   params: {
//     id: 'UCE_M8A5yxnLfW0KghEeajjw'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'b09584228fmsh72e6de892eb4fb1p1bec35jsnb5d1ee269c1f',
//     'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
//   }
// }
