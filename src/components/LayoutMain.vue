<template>
  <div class="flex flex-col md:flex-row min-w-full h-full">
    <SideBar/>
    <MainSection class="flex-nowrap"><slot></slot></MainSection>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import MainSection from '@/components/MainSection.vue'
export default {
components: {
    SideBar,MainSection
}
}
</script>

<style>

</style>