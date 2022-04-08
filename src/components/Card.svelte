<script>
	import Cardpic from '/static/jpg/contractor.jpg';
	export let movie;
	console.log(movie);
</script>

<div class="body-content-row py-3.5">
	<div class="card">
		<div class="h-50 w-50">
			<a href="/details" class="border-1">
				<div class="content_img">
					<img src={movie?.large_cover_image} alt={'card picture'} />

					<div class="hover-text">
						<div class="rating">{movie?.rating} / 10</div>
						<div class="genre">{movie?.genres}</div>
						<button class="btn btn-green">
							View Details
						</button>
					</div>
				</div>
			</a>
			<div class="body-content-text text-white">
				<p><b>{movie?.title}</b></p>
				<p>{movie?.year}</p>
			</div>
		</div>
	</div>

</div>

<style>
	.content_img {
		position: relative;
	}
	.hover-text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: black;
		height: 100%;
		color: white;
		margin-bottom: 5px;
		font-family: sans-serif;
		opacity: 0;
		visibility: hidden;
		-webkit-transition: visibility 0s, opacity 0.5s linear;
		transition: visibility 0s, opacity 0.5s linear;
		text-align: center;
	}

	.content_img:hover .hover-text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		visibility: visible;
		opacity: 0.7;
	}
</style>
