<script lang="ts" setup>
const { t, locale } = useI18n();

const { orgsLimit = null } = defineProps({
  orgsLimit: {
    type: Number,
  },
});

const { data: orgs } = await useAsyncData("orgs", () => {
  const query = queryContent("orgs").locale(locale.value).sort({ order: 1 });

  if (orgsLimit) query.limit(orgsLimit);

  return query.find();
});
</script>

<template>
  <div class="grid md:grid-cols-2 gap-10 mx-auto my-20" v-if="orgs?.length">
    <div
      v-for="(org, i) of orgs"
      :key="i"
      class="p-10 rounded-lg bg-none hover:bg-white transition-all"
    >
      <a :href="org.url" target="_blank">
        <div class="mb-8 flex justify-center">
          <img :src="org.image.src" :alt="org.image.alt" class="w-[80%]" />
        </div>

        <div class="mt-4">
          <h2
            class="sr-only text-xl uppercase font-medium text-primary-950 mb-2"
          >
            {{ org.name }}
          </h2>
          <p class="text-lg text-slate-700">{{ org.description }}</p>
        </div>
        <div class="mt-6 flex flex-col sm:flex-row gap-3">
          <Link :href="org.url" target="_blank" rel="noopener">{{
            t("global.readMore")
          }}</Link>
        </div>
      </a>
    </div>
  </div>
</template>
