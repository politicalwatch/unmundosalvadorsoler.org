<template>
  <footer class="mt-20 py-20 bg-primary-950">
    <p class="text-center text-sm text-slate-200">
      Copyright © {{ new Date().getFullYear() }} Fundación Salvador Soler. Todos
      los derechos reservados.
      <NuxtLinkLocale
        to="/aviso-legal"
        class="underline hover:no-underline text-slate"
      >
        Aviso legal.
      </NuxtLinkLocale>
    </p>
    <p
      class="flex justify-center items-center text-center text-sm text-slate-200"
    >
      <Icon name="bx:pin" class="mx-1" />
      Cardenal Herrera Oria 63, 3 IZDA, 28047, Madrid |
      <Icon name="bx:phone" class="mx-1" /> 917 39 52 57 |
      <Icon name="bx:mail-send" class="mx-1" /><a
        href="mailto:coordinacion@unmundosalvadorsoler.org"
        >coordinacion@unmundosalvadorsoler.org</a
      >
    </p>
  </footer>
</template>
