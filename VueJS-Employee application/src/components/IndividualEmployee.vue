<script setup>
    import { defineProps } from 'vue';
    import { RouterLink } from 'vue-router';

    defineProps({
    emp: {
        type: Object,
        required: true
    }
    });
</script>

<template>
    <div class="bg-white rounded-xl shadow-md relative">
        <div class="p-4">
            <div class="mb-6">
                <div class="text-gray-600 my-2">{{emp.position}}</div>
                <h3 class="text-xl font-bold">{{emp.fname + " " + emp.lname}}</h3>
            </div>

            <div class="mb-5">
                {{emp.about}}
            </div>

            <h3 class="text-green-500 mb-2">R{{emp.salary * 12}} / Year</h3>

            <div class="border border-gray-100 mb-5"></div>

            <div class="flex flex-col lg:flex-row justify-between mb-4">
            <div class="text-orange-700 mb-3">
                <i class="fa-solid fa-location-dot text-lg"></i>
                {{emp.industry}}
            </div> 
            <RouterLink :to="'/employees/' + emp.id" class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm">Read More</RouterLink>
            </div>
        </div>
    </div>
</template>