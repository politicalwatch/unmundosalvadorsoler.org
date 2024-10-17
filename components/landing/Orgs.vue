<script lang="ts" setup>
interface Organization {
  name: string;
  alt: string;
  description: string;
  url: string;
  avatar: {
    src: string;
    width: number;
    height: number;
  };
}

const { orgs = [] } = defineProps<{
  orgs: Organization[];
}>();
</script>

<template>
  <div class="grid md:grid-cols-3 gap-10 mx-auto my-20">
    <div
      v-for="item of orgs"
      class="p-10 rounded-lg bg-none hover:bg-white transition-all"
    >
      <a :href="item.url" target="_blank">
        <div class="w-full mb-8">
          <img
            :src="item.avatar.src"
            :alt="item.alt"
            class="w-full h-full object-contain rounded"
          />
        </div>

        <div class="mt-4">
          <h2 class="text-xl uppercase font-medium text-primary-950 mb-2">
            {{ item.name }}
          </h2>
          <p class="text-lg text-slate-700">{{ item.description }}</p>
        </div>
        <div class="mt-6 flex flex-col sm:flex-row gap-3">
          <LandingLink :href="item.url" target="_blank" rel="noopener"
            >Ver más</LandingLink
          >
        </div>
      </a>
    </div>
  </div>
</template>
