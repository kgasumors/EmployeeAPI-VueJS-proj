<script setup>
    import { defineProps } from 'vue';

    defineProps({
      title: {
        type: String,
        default: 'Your employees Dashboard!'
      }
    });
</script>

<template>
    <section class="bg-green-700 py-20 mb-4">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div class="text-center">
          <h3
            class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            {{title}}
          </h3>
        </div>
      </div>
    </section>
</template>