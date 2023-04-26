//   const item = await res.json();
//   return { artwork };
// }

// my fetch function
// export async function load({fetch}) {  
//     const page = Math.floor(Math.random() * 10000) + 1; //
//      const url = 'https://api.artic.edu/api/v1/artworks?fields=image_id,title,artist_title,date_display,medium_display&page=' + page + '&limit=12'; //

//     const rand_num = Math.floor(math.random() * 10000) + 1;

//     const url = "https://www.themealdb.com/api/json/v1/1/random.php" + rand_num + "&limit=12";
//     const url = "https://www.themealdb.com/api/json/v1/1/random.php";

//     const f_rq = await fetch(url);
    
//     const f_res = await f_rq.json();
  
//     console.log(f_res);

//     const food = f_res.data;
  
//     return {
//       food
//     }
// }

export async function load({fetch}) {  
  const url = "https://www.themealdb.com/api/json/v1/1/random.php";
  try { //using try catch block for troubleshooting;
      const f_rq = await fetch(url);
      const f_res = await f_rq.json();
      // console.log(f_res); //troubleshooting;
      const food = f_res.data;
      return {
          food
      };
  } catch (error) {
      console.log(error);
      return {
          food: []
      };
  }
}
