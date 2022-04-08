<script context="module">
	export async function load({ fetch }) {
		const res = await fetch(`https://yts.mx/api/v2/list_movies.json`);
		const data = await res.json();
		if (res.ok) {
			return {
				props: { popular: data.data }
			};
		}
	}
</script>

<script>
	import Card from '../components/Card.svelte';
	export let popular;
</script>

<div class="body-content bg-cover bg-slate-400 p-20">
	<div class="grid grid-cols-4 gap-3 ">
		{#each popular.movies as movie}
			<Card {movie} />
		{/each}
	</div>
</div>

<style>
	.body-content {
		background-image: linear-gradient(180deg, rgba(29, 29, 29, 0.82), #241d1d),
			url(/static/jpg/avengers.jpg);
		background-color: #241d1d;
	}
</style>
