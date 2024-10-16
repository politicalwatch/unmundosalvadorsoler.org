<template>
  <footer class="mt-20 py-20 bg-orange-950">
    <p class="text-center text-sm text-slate-200">
      Copyright © {{ new Date().getFullYear() }} Fundación Salvador Soler. Todos
      los derechos reservados.
      <NuxtLink to="/privacy" class="underline hover:no-underline text-slate">
        Política de privacidad.
      </NuxtLink>
    </p>
  </footer>
</template>
