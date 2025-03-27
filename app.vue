<template>
  <NuxtLoadingIndicator :height="5" color="#d37a6a" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
a.link, a.link:hover, a.link:visited {
  text-decoration: underline;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
