<template>
  <div class="w-full h-full">
    <LayoutMain>
      <div>
        <div class="p-1">
          <nav class="w-full gap-4 flex justify-between py-4 px-3 items-center">
            <h1 class="text-2xl md:text-3xl block text-slate-700">Students</h1>
            <InputDataModal/>
          </nav>
        </div>
      </div>

      <TableStudents/>
    </LayoutMain>
  </div>
</template>

<script>
import LayoutMain from "@/components/LayoutMain.vue";
import TableStudents from "@/components/TableStudents.vue";
import InputDataModal from "@/components/Modal/InputDataModal.vue";

export default {
  components: {
    LayoutMain,
    TableStudents,
    InputDataModal,
  },
};
</script>

<style>
</style>