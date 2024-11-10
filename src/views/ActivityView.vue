<template>
  <div class="max-w-full h-full">
    <LayoutMain>
      <div class="p-1">
        <nav
          class="w-full gap-4 flex justify-between py-4 px-3 items-center"
        >
          <h1 class="text-2xl md:text-3xl block text-slate-700">Activity</h1>
          <div class="flex gap-2 items-center md:hidden">
            <MenuActivity/>
            <AddActivityMobile/>
          </div>
          <div class="gap-2 hidden md:flex ">
            <ExportModal />
            <AddActivityModal/>
          </div>
        </nav>
      </div>
      <TableActivity/>
      <ActivityMobile/>
    </LayoutMain>
  </div>
</template>

<script>
import LayoutMain from "@/components/LayoutMain.vue";
import ExportModal from "@/components/Modal/ExportModal.vue";
import MenuActivity from '@/components/MenuActivity.vue';
import TableActivity from "@/components/Table/TableActivity.vue";
import AddActivityModal from "@/components/Modal/AddActivityModal.vue";
import ActivityMobile from "@/components/Activity/ActivityMobile.vue";
import AddActivityMobile from "@/components/AddActivityMobile.vue";

export default {
  components: {
    LayoutMain,
    ExportModal,
    MenuActivity,
    TableActivity,
    AddActivityModal,
    ActivityMobile,
    AddActivityMobile
  },
};
</script>

<style>
#add {
  font-family: "Lato SB";
}
</style>