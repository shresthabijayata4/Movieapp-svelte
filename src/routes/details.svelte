<script>
	import Cardpic from '/static/jpg/contractor.jpg';
   import { Icon, ArrowUp, Filter } from "svelte-hero-icons";
</script>

<div class="about-details text-white grid grid-cols-3 gap-4">
	<div class="poster flex flex-col justify-center items-center">
		<img src={Cardpic} alt="poster" />
	</div>
	<div class="about-details_title">
		<h1>Alice</h1>
      <div class="about-details_data">
         <h1>2022</h1>
         <h1>Drama</h1>
      </div>
      <div class="about-details_available">
         <div>
            <p>Available in:</p>
            <ul>
               <li>720.WEB</li>
               <li>1080.WEB</li>
            </ul>
         </div>
         <div>WEB: same quality as BluRay, but ripped earlier from a streaming service</div>
      </div>
	</div>



	<div class="Similar-movies">
		<h1 class="text-center">Test123</h1>
	</div>
</div>

<style>
	.about-details {
		background-image: linear-gradient(180deg, rgba(29, 29, 29, 0.82), #241d1d),
			url(/static/jpg/avengers.jpg);
		background-color: #241d1d;
		padding: 5rem;
	}
</style>
