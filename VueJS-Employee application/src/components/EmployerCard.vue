<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="py-4">
      <div class="container-xl lg:container m-auto">
        <div class="grid grid-cols-1 md:grid-cols-1 gap-2 p-4 rounded-lg">
          <div class="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold">For Employer</h2>
            <p class="mt-2 mb-4">
            </p>
            <RouterLink to="/employees/addEmployee" class="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600">
              Add Employee
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
</template>