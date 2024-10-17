<script lang="ts" setup>
const { t } = useI18n();

const { linksEnabled = false } = defineProps<{ linksEnabled?: boolean }>();
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
        v-html="t('blocks.hero.title')"
      />
      <p
        class="text-lg mt-4 text-slate-600 max-w-xl"
        v-html="t('blocks.hero.description')"
      />
      <div v-if="linksEnabled" class="mt-6 flex flex-col sm:flex-row gap-3">
        <Link
          href="https://github.com/Gr33nW33n/nuxtship-template"
          target="_blank"
          rel="noopener"
          >Get Started</Link
        >
        <Link
          size="lg"
          styleName="outline"
          rel="noopener"
          href="https://github.com/Gr33nW33n/nuxtship-template"
          target="_blank"
          >View Repo</Link
        >
      </div>
    </div>
  </main>
</template>
