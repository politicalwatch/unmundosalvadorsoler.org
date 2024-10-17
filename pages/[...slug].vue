<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>{{ page?.title }}</template>
      <template v-slot:desc>{{ page?.subtitle }}</template>
    </LandingSectionhead>

    <ContentRenderer :value="page" v-if="page">
      <ContentRendererMarkdown
        :value="page"
        class="flex flex-col gap-3 mx-auto max-w-4xl mt-16"
      />
    </ContentRenderer>
  </LandingContainer>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const { t } = useI18n();
const { page } = await usePage();

useHead({
  title: page?.value?.title,
  meta: [
    {
      name: "description",
      content: page?.value?.subtitle,
    },
    {
      hid: "og:description",
      property: "og:description",
      content: t("pages.home.description"),
    },
    {
      property: "og:title",
      hid: "og:title",
      content: `${t("pages.home.title")} | Political Watch`,
    },
    {
      hid: "twitter:description",
      property: "twitter:description",
      content: t("pages.home.description"),
    },
    {
      property: "twitter:title",
      hid: "twitter:title",
      content: `${t("pages.home.title")} | Political Watch`,
    },
  ],
});
</script>
