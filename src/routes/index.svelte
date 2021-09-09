<script lang="ts">
  console.log('ok')
</script>

<header>
	<div class="flex items-center p-2 fixed z-50">
		<div id="sun-small" class="rounded-full"></div>
		<span class="ml-2 font-semibold font-gradient">Tom Délié</span>
	</div>
</header>
<main>
	<div class="h-screen w-full" style="z-index: -1;">
		<section id="cover-page" class="h-screen relative">
			<div id="sun" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
			<svg class="w-full absolute bottom-0" viewBox="0 0 1440 344" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M39.5137 115.681L0.5 109.5V343.5H1439.5V73.5L1402.49 62.5762L1351.47 73.4002L1286.95 55.473L1208.92 33.4867L1145.9 67.3117L1051.37 73.4002L977.84 46.6785L924.821 33.4867L876.805 55.473L827.287 33.4867L770.768 46.6785L723.751 21.648L665.231 16.236L617.214 55.473L554.693 78.1357L504.675 62.5762L427.648 40.9282L347.121 78.1357L261.091 46.6785L197.068 0L153.053 55.473L118.541 62.5762L39.5137 115.681Z" fill="url(#paint0_linear)"/>
				<defs>
				<linearGradient id="paint0_linear" x1="720" y1="0" x2="720.114" y2="344" gradientUnits="userSpaceOnUse">
				<stop stop-color="#3A0366"/>
				<stop offset="1" stop-color="#640366"/>
				</linearGradient>
				</defs>
			</svg>
				
			<svg class="w-full absolute bottom-0" viewBox="0 0 1440 322" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M34 110.964L0 73.5V322H1440V90.2008L1397 69.778L1349 59.5666L1304.5 69.778L1248.5 73.7009L1222.5 43.5687L1194 25.8689L1080 15.9979L1035 0L986 56.5032L905.5 62.6843L862.5 59.5666L835 73.7009L804 96.0168L768.5 104.837L748 87.1374L647.5 56.5032L615.5 69.778L493 11.2326L406.5 52.7975L355 62.6843L333 65.6934L251 99.9715L223 96.6681L118 116.41L98 105.518L71.5 99.9715L34 110.964Z" fill="#240145"/>
			</svg>
		</section>
	</div>

	<div id="section-2">
		<section class="container mx-auto h-screen">
			<h1 class="text-lg text-white">Color palette</h1>
			<div class="flex items-center">
				<div class="m-1 w-24 h-24 flex items-center justify-center" style="background-color: #661EE4;">#661EE4</div>
				<div class="m-1 w-24 h-24 flex items-center justify-center" style="background-color: #791DDD;">#791DDD</div>
				<div class="m-1 w-24 h-24 flex items-center justify-center" style="background-color: #8C1DD6;">#8C1DD6</div>
				<div class="m-1 w-24 h-24 flex items-center justify-center" style="background-color: #9F1CCF;">#9F1CCF</div>
				<div class="m-1 w-24 h-24 flex items-center justify-center" style="background-color: #B21CC9;">#B21CC9</div>
				<div class="m-1 w-24 h-24 flex items-center justify-center" style="background-color: #C41BC2;">#C41BC2</div>
				<div class="m-1 w-24 h-24 flex items-center justify-center" style="background-color: #D71ABB;">#D71ABB</div>
				<div class="m-1 w-24 h-24 flex items-center justify-center" style="background-color: #EA1AB4;">#EA1AB4</div>
				<div class="m-1 w-24 h-24 flex items-center justify-center" style="background-color: #FD19AD;">#FD19AD</div>
			</div>
		</section>
	</div>
</main>

<style>
	#section-2 {
		background: linear-gradient(180deg, #240145 0%, #231E48 10%);
	}
	
	.font-gradient {
		background: -webkit-linear-gradient(-90deg, #E4A11E -10%, #FD19AD 90%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	#cover-page {
		background: linear-gradient(360deg, #FD19AD 0%, #231E48 53.86%);
	}

  #sun {
		background: linear-gradient(180deg, #E4A11E -3.41%, #FD19AD 81.42%);
		width: 520px;
		height: 520px;
	}

	#sun-small {
		background: linear-gradient(180deg, #E4A11E -3.41%, #FD19AD 81.42%);
		width: 30px;
		height: 30px;
	}
</style>