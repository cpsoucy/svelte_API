<!-- <script>
    export let data;
    const {food} = data;
  </script>
  
  <article>
    {#each artworks as { title, artist_title, image_id, date_display, medium_display }}   //gallery;
    {#each food as {idMeal, strMealThumb}} //strMeal, strCategory,
    {#each food as {images, }}
    <figure>
      <img src="https://www.artic.edu/iiif/2/{image_id}/full/843,/0/default.jpg" alt="">   //gallery;

      <img src="https:\/\/www.themealdb.com\/images\/media\/meals\/{strMealThumb}" alt="random_recipe">

      <img src="https://www.themealdb.com/images/media/meals/1529444113.jpg" alt="random_recipe">

      <figcaption>Meal ID for this meal is: {idMeal}</figcaption>

      <figcaption><strong>{title}</strong> by {artist_title}<br>{date_display} | {medium_display}</figcaption> //gallery;
    </figure>
    {/each}
  </article> -->

<script>
  export let data;
  const { food } = data || {};
</script>

<article>
  {#each food as { idMeal, strMeal, strMealThumb, strCategory }}
    <figure>
      <img src="https://www.themealdb.com/images/media/meals/{strMealThumb}.jpg" alt="random_recipe"> <!-- first trying to get any random meal to output info; -->
      <!-- <img src="https://www.themealdb.com/images/media/meals/1529444113.jpg" alt="random_recipe"> -->
      <!-- <img src={strMealThumb} alt="random_recipe"> -->
      <!-- <figcaption>{strMeal} ({strCategory})</figcaption> -->
      <!-- <figcaption>Meal ID for this meal is: {idMeal}</figcaption> -->
    </figure>
  {/each}
</article>

<style>
  /* article {
    padding: 2em;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2em;
  } */
</style>