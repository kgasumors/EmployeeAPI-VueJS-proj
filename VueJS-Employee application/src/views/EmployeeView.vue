<script setup>
  import { ref, defineProps, onMounted } from 'vue';
  import { RouterLink, useRoute } from 'vue-router';

  
  // API URL
  const API_URL = "https://localhost:7044/api/Employees";

  const route = useRoute();
  const employeeId = route.params.id;

  const employees = ref([]);    // Holds the fetched employees
  const isLoading = ref(true);   // Loading state
  const error = ref(null);       // Error state

  // Fetch employees data on component mount
  onMounted(async () => {
      try {
          const response = await fetch(API_URL+`/${employeeId}`);
          if (!response.ok) {
              throw new Error(`Error: ${response.statusText}`);
          }
          const data = await response.json();
          employees.value = data;
      } catch (err) {
          error.value = 'Failed to load employee data.';
          console.error('API Error:', err);
      } finally {
          isLoading.value = false; // Ensure loading state is disabled after fetch
      }
  });

</script>

<template>
  <section class="bg-green-50">
    <!-- Loading and Error Handling -->
    <div v-if="isLoading" class="text-center text-gray-500">Loading employees...</div>
    <div v-if="error" class="text-center text-red-500">{{ error }}</div>
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div
            class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
          >
            <div class="text-gray-500 mb-4">{{employees.position}}</div>
            <h1 class="text-3xl font-bold mb-4">{{employees.fname + " " + employees.lname}}</h1>
            <div
              class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
              <p class="text-lg text-orange-700 mr-2">Age: {{employees.age}}</p>
            </div>
              <p class="text-orange-700">{{employees.industry}}</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-green-800 text-lg font-bold mb-6">
              Job Description
            </h3>

            <p class="mb-4">
              {{employees.about}}
            </p>

            <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>

            <p class="mb-4">R{{employees.salary * 12}} / Year</p>
          </div>
        </main>

        <!-- Sidebar -->
        <aside>
          <!-- Company Info -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">Company Info</h3>

            <h2 class="text-2xl">Tech Solutions</h2>

            <p class="my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, exercitationem? Consequatur ex 
              enim commodi minima porro? Quia minus sint dolorem. Reiciendis commodi optio pariatur itaque 
              magnam libero rerum debitis vel.
            </p>

            <hr class="my-4" />

            <h3 class="text-xl">Contact Email:</h3>

            <p class="my-2 bg-green-100 p-2 font-bold">
              {{employees.email}}
            </p>

            <h3 class="text-xl">Contact Phone:</h3>

            <p class="my-2 bg-green-100 p-2 font-bold">{{employees.phoneNo}}</p>
          </div>

          <!-- Manage -->
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-xl font-bold mb-6">Manage Employee</h3>
            <RouterLink to="`employees/edit/${employeeID}`"
              class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
              Edit Employee</RouterLink>
            <button
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
              Delete Employee
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>