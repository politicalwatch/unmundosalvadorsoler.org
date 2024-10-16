<script lang="ts" setup>
const { linksEnabled = false } = defineProps<{ linksEnabled: boolean }>();
</script>

<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-10 md:order-1 hidden md:block">
      <img
        class="rounded-full transition-transform transform hover:scale-110"
        src="@/assets/images/hero.jpg"
        alt="Starship starts the engine"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h1
        class="text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight text-primary-950"
      >
        Fundación<br />
        <span class="text-5xl lg:text-6xl xl:text-7xl font-light uppercase"
          >Un mundo Salvador Soler</span
        >
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur
        ut ligula dignissim, dictum arcu vel, gravida enim. Curabitur non sem
        eget massa sodales volutpat. Sed efficitur mollis dui, lacinia ultrices
        felis commodo et. Duis malesuada iaculis elit, quis elementum nulla
        porttitor pretium.
      </p>
      <div v-if="linksEnabled" class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href="https://github.com/Gr33nW33n/nuxtship-template"
          target="_blank"
          rel="noopener"
          >Get Started</LandingLink
        >
        <LandingLink
          size="lg"
          styleName="outline"
          rel="noopener"
          href="https://github.com/Gr33nW33n/nuxtship-template"
          target="_blank"
          >View Repo</LandingLink
        >
      </div>
    </div>
  </main>
</template>
