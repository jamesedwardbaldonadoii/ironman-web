<template>
<svg version="1.0" xmlns="http://www.w3.org/2000/svg" class="fill-current" :class="[width, height, color]" viewBox="0 0 20.000000 20.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.15, written by Peter Selinger 2001-2017
</metadata>
<g transform="translate(0.000000,20.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M0 100 l0 -100 100 0 100 0 0 100 0 100 -100 0 -100 0 0 -100z"/>
</g>
</template>

<script>
export default {
  props: {
    width: { type: String },
    height: { type: String },
    color: { type: String }
  }
}
</script>
