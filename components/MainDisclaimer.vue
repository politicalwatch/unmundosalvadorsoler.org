<script lang="ts" setup>
const config = useRuntimeConfig();
const disclaimer = ref(config.public.disclaimer);
const showDisclaimer = ref(true);
</script>

<template>
  <div
    class="bg-primary-500 p-3 text-center flex justify-center items-center text-slate-200"
    v-if="showDisclaimer && disclaimer"
  >
    <span class="flex-1">{{ disclaimer }}</span>
    <button
      @click="showDisclaimer = false"
      class="ml-auto text-primary-600 underline hover:no-underline"
    >
      <Icon class="w-4 h-4 text-white" name="bxs:x-circle" />
    </button>
  </div>
</template>
