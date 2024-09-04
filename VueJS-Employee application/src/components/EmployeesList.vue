<script setup>
import { ref, defineProps, onMounted } from 'vue';
import IndividualEmployee from './IndividualEmployee.vue';
import { RouterLink } from 'vue-router';

// API URL
const API_URL = "https://localhost:7044/api/Employees";

// Reactive state
const employees = ref([]);    // Holds the fetched employees
const isLoading = ref(true);   // Loading state
const error = ref(null);       // Error state

// Define props
defineProps({
    limit: {
        type: Number,
        default: null, // If no limit is provided, all employees will be shown
    },
    showButton: {
        type: Boolean,
        default: false,
    }
});

// Fetch employees data on component mount
onMounted(async () => {
    try {
        const response = await fetch(API_URL);
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
    <section class="bg-green-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Employees
            </h2>

            <!-- Loading and Error Handling -->
            <div v-if="isLoading" class="text-center text-gray-500">Loading employees...</div>
            <div v-if="error" class="text-center text-red-500">{{ error }}</div>

            <!-- Employees Grid -->
            <div v-if="!isLoading && !error" class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <IndividualEmployee v-for="emp in employees" :key="emp.id" :emp="emp"/>
            </div>
        </div>
    </section>

    <!-- View All Employees Button -->
    <section v-if="showButton && !isLoading && !error" class="m-auto max-w-lg my-10 px-6">
        <RouterLink to="/employees" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">
            View All Employees
        </RouterLink>
    </section>
</template>
