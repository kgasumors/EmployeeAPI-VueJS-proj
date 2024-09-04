<script setup>
    import EmployeeHeader from '@/components/EmployeeHeader.vue';
    import EmployerCard from '@/components/EmployerCard.vue';
    import EmployeesList from '@/components/EmployeesList.vue';
</script>

<template>
  <EmployeeHeader />
  <EmployerCard />
  <EmployeesList :limit="6" :show-button="true" />
</template>