<script lang="ts">
  import Translation from '../../translations/fr';
  import NightSky from './NightSky.svelte';
  import WaveSeparator from '../WaveSeparator.svelte';
	const translation = Translation;
</script>

<svg shape-rendering="geometricPrecision" class="hidden hair z-10 w-full absolute left-0 opacity-80" width="1440" height="2996" viewBox="0 0 1440 2996" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_ddd)">
    <path d="M362.5 0.5C362.5 460 533.5 656.5 707 752.5C880.5 848.5 1382.5 709 1450 1156.5C1517.5 1604 1260 1792 823.5 1897.5C387 2003 -69.5 2228.5 -210.5 2519.5C-351.5 2810.5 -508.5 2881 -912 2969" stroke="white" stroke-width="2" stroke-linecap="round"/>
  </g>
  <g filter="url(#filter1_ddd)">
    <path d="M412 0C341.5 785 571 752 756.5 752C942 752 1407 691 1474.5 1138.5C1542 1586 1021 1786.8 563.5 1930.5C106 2074.2 -76 2276.5 -138 2484C-200 2691.5 -323 2872 -852.5 2991" stroke="white" stroke-width="3" stroke-linecap="round"/>
  </g>
  <defs>
  <filter id="filter0_ddd" x="-917" y="-4.5" width="2382.68" height="2978.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feOffset/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
  </filter>
  <filter id="filter1_ddd" x="-857.5" y="-5.00006" width="2342.94" height="3001" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feOffset/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
  </filter>
  </defs>
</svg>
<section class="h-screen w-full">
  <div id="cover-page" class="h-screen relative overflow-hidden">
    <NightSky />
    <svg
      class="cloud absolute top-52 left-20"
      width="315"
      height="160"
      viewBox="0 0 315 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.4343 75.5192C14.9343 84.5192 12.4343 110.519 12.4343 110.519C12.4343 110.519 2.87164 113 0.471636 121C-1.92837 129 4.97152 135.519 17.9716 138.519C30.9716 141.519 53.4343 138.519 53.4343 138.519C53.4343 138.519 64.9342 152.019 85.4343 155.519C105.934 159.019 129.934 155.519 129.934 155.519C129.934 155.519 151.934 162.519 177.434 159.019C202.934 155.519 222.934 145.519 222.934 145.519C222.934 145.519 252.577 148.098 278.434 141.519C299.521 136.154 314.934 129.019 314.934 108.019C314.934 96.5676 310.934 90.0192 298.934 86.0192C286.934 82.0191 278.434 86.0192 278.434 86.0192C278.434 86.0192 278.434 78.3317 271.434 73.5192C264.434 68.7067 256.934 69.5192 256.934 69.5192C256.934 69.5192 255.934 53.2919 242.934 45.0192C229.934 36.7465 214.434 40.5192 214.434 40.5192C214.434 40.5192 201.934 1.36916 142.434 0.0191745C114.548 -0.613532 93.9344 14.5193 80.9344 29.5192C66.5851 47.8003 62.4344 68.5192 62.4344 68.5192C62.4344 68.5192 49.9343 66.5192 32.4343 75.5192Z"
        fill="url(#paint1_linear)"
      />
      <defs>
        <linearGradient
          id="paint1_linear"
          x1="155.703"
          y1="0"
          x2="155.703"
          y2="159.999"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2F285B" stop-opacity="0.6" />
          <stop offset="0.489583" stop-color="#2F285B" stop-opacity="0.07" />
        </linearGradient>
      </defs>
    </svg>

    <svg
      class="cloud absolute top-10 left-1/4"
      width="461"
      height="212"
      viewBox="0 0 461 212"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M90.4651 83.0349C66.9194 90.4688 59.4839 114.01 59.4839 114.01C59.4839 114.01 37.6751 109.823 21.0672 117.727C8.50534 123.705 0 139.251 0 153.658C0 187.11 25.8669 194.167 34.6989 197.022C43.531 199.878 62.7988 201.305 79.2121 201.305C95.6254 201.305 123.305 197.022 123.305 197.022C123.305 197.022 166.988 211.375 206.237 211.97C245.486 212.565 291.872 204.161 291.872 204.161C291.872 204.161 313.994 207.73 342.539 204.161C371.084 200.592 389.638 189.884 389.638 189.884C389.638 189.884 461 194.544 461 128.878C461 102.965 446.75 82.8534 432.497 73.1229C410.632 58.1952 385.406 61.972 385.406 61.972C385.406 61.972 369.296 1.2613 303.616 0.0223015C237.935 -1.21669 219.347 49.582 219.347 49.582C219.347 49.582 184.648 42.1481 164.82 53.299C144.992 64.45 133.839 83.0349 133.839 83.0349C133.839 83.0349 114.011 75.6009 90.4651 83.0349Z"
        fill="url(#paint2_linear)"
      />
      <defs>
        <linearGradient
          id="paint2_linear"
          x1="230.5"
          y1="0"
          x2="230.5"
          y2="212"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2F285B" stop-opacity="0.6" />
          <stop offset="0.729167" stop-color="#2F285B" stop-opacity="0.05" />
        </linearGradient>
      </defs>
    </svg>

    <svg
      class="cloud absolute right-48 bottom-1/2"
      width="199"
      height="98"
      viewBox="0 0 199 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.2922 23.5092C28.7922 29.061 24.2922 42.5092 24.2922 42.5092C24.2922 42.5092 16.1102 41.2457 9.29218 45.5092C4.71213 48.3733 0.747572 55.5937 0.292185 59.0092C-0.841108 67.5092 0.792193 79.5092 14.7922 83.5092C28.7922 87.5092 34.2922 81.0092 34.2922 81.0092C34.2922 81.0092 43.2922 87.3729 52.2922 89.0092C61.2922 90.6456 72.2922 87.0092 72.2922 87.0092C72.2922 87.0092 83.2922 97.5092 104.292 97.5092C125.292 97.5092 135.792 87.0092 135.792 87.0092C135.792 87.0092 145.792 89.0092 153.292 89.0092C160.792 89.0092 169.292 84.0092 169.292 84.0092C169.292 84.0092 180.792 88.8959 188.292 84.9526C195.792 81.0092 199.792 73.0092 197.792 62.0092C195.792 51.0092 181.792 49.0092 181.792 49.0092C181.792 49.0092 180.292 40.5092 171.292 32.0092C162.292 23.5092 147.792 27.5092 147.792 27.5092C147.792 27.5092 136.792 0.509224 105.792 0.00922125C74.7922 -0.490782 62.7922 19.5092 62.7922 19.5092C62.7922 19.5092 51.7922 17.9575 40.2922 23.5092Z"
        fill="url(#paint3_linear)"
      />
      <defs>
        <linearGradient
          id="paint3_linear"
          x1="99.1522"
          y1="0"
          x2="99.1522"
          y2="97.5092"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2F285B" stop-opacity="0.6" />
          <stop offset="0.760417" stop-color="#2F285B" stop-opacity="0.05" />
        </linearGradient>
      </defs>
    </svg>

    <div
      id="sun"
      class="z-20 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 absolute bottom-28 left-1/2 transform -translate-x-1/2 rounded-full"
    />

    <svg class="z-30 absolute w-full bottom-0 hidden 2xl:block" viewBox="0 0 1440 379" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M964.871 194L887.13 141.121L901.897 188.841L926.218 210.766L941.853 255.477L990.929 306.206L1152.92 378H1440V306.206L1395.27 270.093L1382.24 230.542L1350.97 194L1369.64 169.925L1152.92 10L1208.52 121.346L1180.29 183.682L1208.52 261.495L1112.97 270.093L1078.22 230.542L964.871 194Z" fill="url(#mt1_paint)"/>
      <path d="M887.13 141.121L835.448 210.766L769.868 255.477L721.226 314.374L650 378H1152.92L990.929 306.206L941.853 255.477L926.218 210.766L901.897 188.841L887.13 141.121Z" fill="url(#mt1_paint)"/>
      <path d="M1152.92 10L964.871 194L1078.22 230.542L1112.97 270.093L1208.52 261.495L1180.29 183.682L1208.52 121.346L1152.92 10Z" fill="url(#mt1_paint)"/>
      <path d="M1440 107.589L1369.64 169.925L1350.97 194L1382.24 230.542L1395.27 270.093L1440 306.206V107.589Z" fill="url(#mt1_paint)"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M964.871 194L887.13 141.121L901.897 188.841L926.218 210.766L941.853 255.477L990.929 306.206L1152.92 378H1440V306.206L1395.27 270.093L1382.24 230.542L1350.97 194L1369.64 169.925L1152.92 10L1208.52 121.346L1180.29 183.682L1208.52 261.495L1112.97 270.093L1078.22 230.542L964.871 194Z" fill="#240145"/>
      <path d="M887.13 141.121L964.871 194M887.13 141.121L835.448 210.766L769.868 255.477L721.226 314.374L650 378H1152.92M887.13 141.121L901.897 188.841L926.218 210.766L941.853 255.477L990.929 306.206L1152.92 378M964.871 194L1152.92 10M964.871 194L1078.22 230.542L1112.97 270.093L1208.52 261.495L1180.29 183.682L1208.52 121.346L1152.92 10M1152.92 10L1369.64 169.925M1369.64 169.925L1440 107.589V306.206M1369.64 169.925L1350.97 194L1382.24 230.542L1395.27 270.093L1440 306.206M1152.92 378H1440V306.206" stroke="url(#mt2_paint)"/>
      <path d="M0 196.251L145.567 1L318.674 168.729L493.256 75.2576L718 378H1.47534L0 196.251Z" fill="url(#mt3_paint)"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 196.251V103.818L145.567 1L116.552 113.685L167.697 141.207L185.893 205.079L221.793 196.251L318.674 168.729L493.256 75.2576L452.438 173.402L517.353 253.891V304.262L718 378H0V196.251Z" fill="#240145"/>
      <path d="M145.567 1L318.674 168.729M145.567 1L116.552 113.685L167.697 141.207L185.893 205.079L221.793 196.251L318.674 168.729M145.567 1L0 103.818V196.251V378H718M318.674 168.729L493.256 75.2576M493.256 75.2576L718 378M493.256 75.2576L452.438 173.402L517.353 253.891V304.262L718 378" stroke="url(#mt4_paint)"/>
      <defs>
        <linearGradient id="mt1_paint" x1="1045" y1="-113.383" x2="1045" y2="378" gradientUnits="userSpaceOnUse">
          <stop stop-color="#8D087D"/>
          <stop offset="1" stop-color="#240145"/>
        </linearGradient>
        <linearGradient id="mt2_paint" x1="1045" y1="10" x2="1045" y2="378" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C73194"/>
          <stop offset="1" stop-color="#C73194" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="mt3_paint" x1="359" y1="-178.891" x2="359" y2="378" gradientUnits="userSpaceOnUse">
          <stop stop-color="#8D087D"/>
          <stop offset="1" stop-color="#26004A"/>
        </linearGradient>
        <linearGradient id="mt4_paint" x1="359" y1="1" x2="359" y2="378" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C73194"/>
          <stop offset="1" stop-color="#C73194" stop-opacity="0"/>
        </linearGradient>
      </defs>
    </svg>
      

    <svg class="mountain z-30 absolute w-full block 2xl:hidden" viewBox="0 0 1439 1020" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="375" width="1440" height="642" fill="#240145"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M965.871 194L888.13 141.121L902.897 188.841L927.218 210.766L942.853 255.477L991.929 306.206L1153.92 378H1441V306.206L1396.27 270.093L1383.24 230.542L1351.97 194L1370.64 169.925L1153.92 10L1209.52 121.346L1181.29 183.682L1209.52 261.495L1113.97 270.093L1079.22 230.542L965.871 194Z" fill="url(#r_mt1_paint)"/>
      <path d="M888.13 141.121L836.448 210.766L770.868 255.477L722.226 314.374L651 378H1153.92L991.929 306.206L942.853 255.477L927.218 210.766L902.897 188.841L888.13 141.121Z" fill="url(#r_mt1_paint)"/>
      <path d="M1153.92 10L965.871 194L1079.22 230.542L1113.97 270.093L1209.52 261.495L1181.29 183.682L1209.52 121.346L1153.92 10Z" fill="url(#r_mt1_paint)"/>
      <path d="M1441 107.589L1370.64 169.925L1351.97 194L1383.24 230.542L1396.27 270.093L1441 306.206V107.589Z" fill="url(#r_mt1_paint)"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M965.871 194L888.13 141.121L902.897 188.841L927.218 210.766L942.853 255.477L991.929 306.206L1153.92 378H1441V306.206L1396.27 270.093L1383.24 230.542L1351.97 194L1370.64 169.925L1153.92 10L1209.52 121.346L1181.29 183.682L1209.52 261.495L1113.97 270.093L1079.22 230.542L965.871 194Z" fill="#240145"/>
      <path d="M888.13 141.121L965.871 194M888.13 141.121L836.448 210.766L770.868 255.477L722.226 314.374L651 378H1153.92M888.13 141.121L902.897 188.841L927.218 210.766L942.853 255.477L991.929 306.206L1153.92 378M965.871 194L1153.92 10M965.871 194L1079.22 230.542L1113.97 270.093L1209.52 261.495L1181.29 183.682L1209.52 121.346L1153.92 10M1153.92 10L1370.64 169.925M1370.64 169.925L1441 107.589V306.206M1370.64 169.925L1351.97 194L1383.24 230.542L1396.27 270.093L1441 306.206M1153.92 378H1441V306.206" stroke="url(#r_mt2_paint)"/>
      <path d="M1 196.251L146.567 1L319.674 168.729L494.256 75.2576L719 378H2.47534L1 196.251Z" fill="url(#r_mt3_paint)"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1 196.251V103.818L146.567 1L117.552 113.685L168.697 141.207L186.893 205.079L222.793 196.251L319.674 168.729L494.256 75.2576L453.438 173.402L518.353 253.891V304.262L719 378H1V196.251Z" fill="#240145"/>
      <path d="M146.567 1L319.674 168.729M146.567 1L117.552 113.685L168.697 141.207L186.893 205.079L222.793 196.251L319.674 168.729M146.567 1L1 103.818V196.251V378H719M319.674 168.729L494.256 75.2576M494.256 75.2576L719 378M494.256 75.2576L453.438 173.402L518.353 253.891V304.262L719 378" stroke="url(#r_mt4_paint)"/>
      <defs>
        <linearGradient id="r_mt1_paint" x1="1045" y1="-113.383" x2="1045" y2="378" gradientUnits="userSpaceOnUse">
          <stop stop-color="#8D087D"/>
          <stop offset="1" stop-color="#240145"/>
        </linearGradient>
        <linearGradient id="r_mt2_paint" x1="1045" y1="10" x2="1045" y2="378" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C73194"/>
          <stop offset="1" stop-color="#C73194" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="r_mt3_paint" x1="359" y1="-178.891" x2="359" y2="378" gradientUnits="userSpaceOnUse">
          <stop stop-color="#8D087D"/>
          <stop offset="1" stop-color="#26004A"/>
        </linearGradient>
        <linearGradient id="r_mt4_paint" x1="359" y1="1" x2="359" y2="378" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C73194"/>
          <stop offset="1" stop-color="#C73194" stop-opacity="0"/>
        </linearGradient>
      </defs>
    </svg>
      
      
      
    <div class="h-full w-full flex flex-col items-center justify-center">
      <h1 class="z-30 main-title font-streamster">Tom Délié</h1>
      <span
        class="z-30 main-subtitle uppercase font-kiona font-bold text-black text-sm bg-white -m-2 px-3"
        >{translation.subtitle}</span
      >
    </div>
  </div>
</section>
<WaveSeparator top="#240145" bottom="rgba(0, 0, 0, 0)" />

<style lang="postcss">
	.font-streamster {
		font-family: 'Streamster';
	}

  .main-title {
		font-size: 4.75rem;
		color: #fbfdf8;
		text-shadow: white 0px 0px 20px;
	}

  #sun {
		background: linear-gradient(180deg, #e4a11e 8.99%, #ea1ab4 81.42%);
	}

  .font-kiona {
		font-family: 'Kiona';
	}

  	/* MOUNTAINS RESPONSIVE */
	.mountain {
		bottom: -2rem;
	}

	@media (min-width: 380px) {
		.mountain {
			bottom: -2rem;
		}

		.main-title {
			font-size: 4rem;
		}
	}

	@media (min-width: 450px) {
		.mountain {
			bottom: -4rem;
		}
	}

	@media (min-width: 520px) {
		.mountain {
			bottom: -6rem;
		}

		.main-title {
			font-size: 6rem;
		}
	}

	@media (min-width: 590px) {
		.mountain {
			bottom: -7.5rem;
		}

		.main-title {
			font-size: 6rem;
		}
	}

	@media (min-width: 640px) {
		.mountain {
			bottom: -9.5rem;
		}

		.main-title {
			font-size: 6rem;
		}
	}

	@media (min-width: 680px) {
		.mountain {
			bottom: -10.5rem;
		}
	}

	@media (min-width: 768px) {
		.mountain {
			bottom: -13rem;
		}

		.separator > .line {
			background: linear-gradient(180deg, rgba(234, 26, 180, 0.8) 0%, rgba(234, 26, 180, 0.2) 80%);
		}

		.separator > .title {
			writing-mode: vertical-rl;
		}
	}

	@media (min-width: 840px) {
		.mountain {
			bottom: -16rem;
		}
	}

	@media (min-width: 930px) {
		.mountain {
			bottom: -19rem;
		}
	}

	@media (min-width: 1024px) {
		.mountain {
			bottom: -21.5rem;
		}

		.hair {
			top: -29rem;
			display: block;
		}

    #sun {
      width: 38rem;
      height: 38rem;
    }
	}

	@media (min-width: 1100px) {
		.mountain {
			bottom: -24rem;
		}

		.hair {
			top: -23.5rem;
		}
	}

	@media (min-width: 1200px) {
		.mountain {
			bottom: -28rem;
		}

		.hair {
			top: -17rem;
		}
	}

	@media (min-width: 1280px) {
		.mountain {
			bottom: -30rem;
		}

		.hair {
			top: -16rem;
		}
	}

	@media (min-width: 1340px) {
		.mountain {
			bottom: -32rem;
		}

		.hair {
			top: -10rem;
		}
	}

	@media (min-width: 1460px) {
		.mountain {
			bottom: -35rem;
		}

		.hair {
			top: 0rem;
		}

	}
</style>