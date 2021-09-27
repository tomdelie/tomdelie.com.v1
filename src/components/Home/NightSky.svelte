<script lang="ts">
	const stars = new Array(50);
	const opacities = [
		'opacity-5',
		'opacity-10',
		'opacity-20',
		'opacity-25',
		'opacity-30',
		'opacity-40',
		'opacity-50',
		'opacity-60',
		'opacity-70'
	];
</script>

<svelte:window />
<div class="night-sky absolute top-0 left-0 h-full w-full">
  <div class="stars">
    {#each stars as star}
      <div
        class="
          { opacities[Math.floor(Math.random() * opacities.length)] }
        "
        style="{ `left: ${Math.floor(Math.random() * 100)}%; top: ${Math.floor(Math.random() * 70)}%;` }"
      />
    {/each}
  </div>
  <div class="shooting-stars">
    <div class="shooting-star flex items-center justify-center w-2 h-2 bg-white bg-opacity-25 rounded-full absolute transform -rotate-45" style="left: 10%;">
      <div class="relative w-1 h-1 bg-white bg-opacity-70 rounded-full"></div>
    </div>
    <div class="shooting-star flex items-center justify-center w-2 h-2 bg-white bg-opacity-25 rounded-full absolute transform -rotate-45" style="left: 25%;">
      <div class="relative w-1 h-1 bg-white rounded-full"></div>
    </div>
    <div class="shooting-star flex items-center justify-center w-2 h-2 bg-white bg-opacity-25 rounded-full absolute transform -rotate-45" style="left: 50%;">
      <div class="relative w-1 h-1 bg-white bg-opacity-70 rounded-full"></div>
    </div>
    <div class="shooting-star flex items-center justify-center w-2 h-2 bg-white bg-opacity-25 rounded-full absolute transform -rotate-45" style="left: 75%;">
      <div class="relative w-1 h-1 bg-white bg-opacity-70 rounded-full"></div>
    </div>
    <div class="shooting-star flex items-center justify-center w-2 h-2 bg-white bg-opacity-25 rounded-full absolute transform -rotate-45" style="left: 100%;">
      <div class="relative w-1 h-1 bg-white bg-opacity-70 rounded-full"></div>
    </div>
    <div class="shooting-star flex items-center justify-center w-2 h-2 bg-white bg-opacity-25 rounded-full absolute transform -rotate-45" style="left: 125%;">
      <div class="relative w-1 h-1 bg-white bg-opacity-70 rounded-full"></div>
    </div>
    <div class="shooting-star flex items-center justify-center w-2 h-2 bg-white bg-opacity-25 rounded-full absolute transform -rotate-45" style="left: 150%;">
      <div class="relative w-1 h-1 bg-white bg-opacity-70 rounded-full"></div>
    </div>
    <div class="shooting-star flex items-center justify-center w-2 h-2 bg-white bg-opacity-25 rounded-full absolute transform -rotate-45" style="left: 175%;">
      <div class="relative w-1 h-1 bg-white bg-opacity-70 rounded-full"></div>
    </div>
  </div>
</div>

<style lang="postcss">
	.night-sky > .stars > div {
		@apply absolute bg-white rounded-full w-0.5 h-0.5;
	}

  .night-sky > .shooting-stars > .shooting-star:nth-child(1) {
    animation: shooting-star 3.2s linear infinite;
    opacity: 40%;
  }

  .night-sky > .shooting-stars > .shooting-star:nth-child(2) {
    animation: shooting-star 4.7s linear infinite;
    opacity: 60%;
  }

  .night-sky > .shooting-stars > .shooting-star:nth-child(3) {
    animation: shooting-star 5.2s linear infinite;
    opacity: 80%;
  }

  .night-sky > .shooting-stars > .shooting-star:nth-child(4) {
    animation: shooting-star 4.1s linear infinite;
    opacity: 33%;
  }

  .night-sky > .shooting-stars > .shooting-star:nth-child(5) {
    animation: shooting-star 4.6s linear infinite;
    opacity: 65%;
  }

  .night-sky > .shooting-stars > .shooting-star:nth-child(6) {
    animation: shooting-star 4.1s linear infinite;
    opacity: 90%;
  }

  .night-sky > .shooting-stars > .shooting-star:nth-child(7) {
    animation: shooting-star 6.7s linear infinite;
    opacity: 30%;
  }

  .night-sky > .shooting-stars > .shooting-star:nth-child(8) {
    animation: shooting-star 5.2s linear infinite;
    opacity: 70%;
  }

  .night-sky > .shooting-stars > .shooting-star > div::before {
    @apply absolute w-40 h-0.5 top-1/2 transform -translate-y-1/2;
    background: linear-gradient(90deg, #fff, transparent);
    content: "";
  }

  @keyframes shooting-star {
    0% {
      transform: rotate(315deg) translateX(0);
    }
    100% {
      transform: rotate(315deg) translateX(-1500px);
    }
  }
</style>
