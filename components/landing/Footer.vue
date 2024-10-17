<template>
  <footer class="mt-20 py-20 bg-primary-950">
    <p class="text-center text-sm text-slate-200">
      Copyright © {{ new Date().getFullYear() }} Fundación Salvador Soler. Todos
      los derechos reservados.
      <NuxtLink
        to="/aviso-legal"
        class="underline hover:no-underline text-slate"
      >
        Aviso legal.
      </NuxtLink>
    </p>
  </footer>
</template>
