<template>
  <div class="py-5 hidden sm:block h-full overflow-x-hidden">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
               
                <th scope="col" class="px-6 py-3">
                    Teacher Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Activity
                </th>
                <th scope="col" class="px-6 py-3">
                    Activity Description
                </th>
                <th scope="col" class="px-[2.4rem] py-3">
                    
                </th>
               
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b ">
                
               
                <td class="px-6 py-4">
                    Siti
                </td>
                <td class="px-6 py-4">
                    Tuesday, 30 May
                </td>
                <td class="px-6 py-4">
                    Learning
                </td>
                <td class="px-6 py-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, dignissimos.
                </td>
    
                <td class="px-[2.4rem] py-4">
                    <a href="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" class="font-medium flex text-center  ">
                        <i class="ri-more-2-fill"></i>
                    </a>
                </td>
                
               
            </tr>
            <tr class="bg-white border-b ">
                
               
                <td class="px-6 py-4">
                    Siti
                </td>
                <td class="px-6 py-4">
                    Tuesday, 30 May
                </td>
                <td class="px-6 py-4">
                    Learning
                </td>
                <td class="px-6 py-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, dignissimos.
                </td>
    
                <td class="px-[2.4rem] py-4">
                    <!-- Modal toggle -->
                    <a href="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" class="font-medium flex text-center  ">
                        <i class="ri-more-2-fill"></i>
                    </a>
                </td>
               
               
            </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
import MenuActivity from '../MenuActivity.vue';
// import ProfileAbsence from './ProfileAbsence.vue';

export default {
components:{
    MenuActivity
}
}
</script>

<style>

</style>