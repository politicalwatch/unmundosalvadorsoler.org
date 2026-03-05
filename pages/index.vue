<script setup>
const { t } = useI18n();

useHead({
  title: `${t("pages.home.title")} | Fundación Salvador Soler`,
  meta: [
    {
      name: "description",
      content: t("pages.home.description"),
    },
    {
      hid: "og:description",
      property: "og:description",
      content: t("pages.home.description"),
    },
    {
      property: "og:title",
      hid: "og:title",
      content: `${t("pages.home.title")} | Fundación Salvador Soler`,
    },
    {
      hid: "twitter:description",
      property: "twitter:description",
      content: t("pages.home.description"),
    },
    {
      property: "twitter:title",
      hid: "twitter:title",
      content: `${t("pages.home.title")} | Fundación Salvador Soler`,
    },
  ],
});
</script>

<template>
  <Container>
    <Hero />
    <Orgs />
  </Container>
</template>
