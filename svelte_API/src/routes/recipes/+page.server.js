//   const item = await res.json();
//   return { artwork };
// }

// my fetch function
export async function load({ fetch }) {  
    const page = Math.floor(Math.random() * 10000) + 1;
  
    const url = 'https://api.artic.edu/api/v1/artworks?fields=image_id,title,artist_title,date_display,medium_display&page=' + page + '&limit=12';
  
    const artReq = await fetch(url);
    
    const artRes = await artReq.json();
  
    const artworks = artRes.data;
  
    return {
      artworks
    }
  
  }