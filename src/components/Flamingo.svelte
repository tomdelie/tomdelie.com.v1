<script lang="ts">
  export let moreClass: string = '';
  export let rotate: boolean = false;
</script>

<svg class="svg {rotate ? 'translate-rotate' : ''} {moreClass}" height="200" viewBox="0 0 164 316" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path stroke="currentColor" stroke-width="3" stroke-linecap="round" d="M44.9996 254C44.9996 254 52 235.5 55.5 227.5C59 219.5 116.5 215.5 116.5 204C116.5 192.5 80.0297 174.5 84 167C87.9703 159.5 104.5 168 112.5 168C120.5 168 120.999 161 129.5 159C138 157 162.5 168 162.5 156.5C162.5 150.75 150.25 131.5 133 115.5C112.5 95 93.5 86.75 79.5 87C51.5 87.5 40 112.5 34.5 114C29 115.5 21 114 24 98.5C27 83 63.4996 55 63.4996 34C63.4996 13 53.0004 2 39 2C24.9996 2 21.5 12 20.5 15.5C19.5 19 8.5 29 8.5 34C8.5 39 7.99927 47 13.4996 46C19 45 17.499 32.25 21.9995 31.5C21.9995 31.5 31 30 32.5 29.5C34 29 37.9995 26 42.5 26C47.0005 26 50.5 35 49 42C42.5 57.5 1.5 72 1.49963 109C1.49927 146 68.9995 152.5 68.9995 177.5C68.9995 199 70.9985 297.5 69.999 300C68.9995 302.5 56.9996 314 56.9996 314"/>
</svg>

<style lang="css">
:root {
  --bg: #1B1949;
  --pink: #EF19F2;
  --light-pink: #EF9DF8;
}

.translate-rotate {
  transform: rotateY(180deg);
}

.svg {
  z-index: -1;
  filter:
    drop-shadow(0 0 2px var(--light-pink)) /* 1st layer */
    drop-shadow(0 0 8px var(--pink)) /* 2nd layer */
    drop-shadow(0 0 60px var(--pink)) /* 3rd layer */
  ;
  color: white;
  animation: flicker ease-in 12s infinite;
}

@keyframes flicker {
  0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
    opacity: 1;
  }
  20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
    opacity: 0.4;
  }
}
</style>