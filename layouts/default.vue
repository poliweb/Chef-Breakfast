<template>
  <div>
    <TheHeader />
      <slot />
    <TheFooter />
  </div>
</template>

<style>

.wrapper-enter-active {
  animation: finished 2.5s reverse;
}

.wrapper-leave-active {
  animation: finished 2.5s;
}

@keyframes finished {
  0% {
    opacity: 1;
    top: 0;
  }

  50% {
    opacity: 1;
    top: 0;
  }

  60% {
    opacity: 0.5;
  }

  100% {
    opacity: 0;
    top: -100vh;
  }
}
</style>