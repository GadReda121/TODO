<template>
    <div class="title mb-4">
        <div class="waviy">
            <span style="--i:1">T</span>
            <span style="--i:2">O</span>
            <span style="--i:3">D</span>
            <span style="--i:4">O</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"Title"
    }
</script>

<style scoped>
    h1{
        font-size: 2.4rem;
        font-weight: bolder;
        letter-spacing: 5px;
        color: #000;
    }
    .textEffect{
        font-size:50px;
        color: var(--primary-color);
    }
    h1 span{
        color: var(--primary-color);
    }
    .waviy {
  position: relative;
  -webkit-box-reflect: below -40px linear-gradient(transparent, rgba(0,0,0,.2));
  font-size: 60px;
  z-index: -1;
}
.waviy span {
  font-family: 'Alfa Slab One', cursive;
  position: relative;
  display: inline-block;
  color: var(--primary-color);
  text-transform: uppercase;
  animation: waviy 1s infinite;
  animation-delay: calc(.1s * var(--i));
}
@keyframes waviy {
  0%,40%,100% {
    transform: translateY(0)
  }
  20% {
    transform: translateY(-20px)
  }
}
</style>