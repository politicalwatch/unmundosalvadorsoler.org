<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Política de Privacidad</template>
    </LandingSectionhead>

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-gray-800">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h2>
      <p class="text-lg leading-relaxed text-slate-500">
        Aliquam elementum molestie quam quis faucibus. Suspendisse non turpis
        vitae lectus lacinia gravida. Donec tincidunt massa in arcu sollicitudin
        scelerisque. Fusce ut eros in eros luctus ultrices. Duis laoreet leo
        consequat sodales sagittis. Vestibulum velit arcu, congue dignissim
        luctus ut, euismod a quam. Praesent porttitor in lectus vel feugiat.
      </p>
    </div>
  </LandingContainer>
</template>
