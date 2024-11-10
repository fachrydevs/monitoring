<template>
  <div class="w-full h-screen grid items-center">
    <FormComponent>
        <template v-slot:title>Login</template>
                    <template v-slot:line>Login</template>
                    <template v-slot:submit>
                        <p><RouterLink to="/activity">Login</RouterLink></p>
                    </template>
                    <template v-slot:text-redirect>
                        <p class="text-sm font-bold text-slate-500">Already have an account? <RouterLink to="/register">
                            <span class="text-purple-600">Register</span>
                        </RouterLink> </p>
                    </template>
    </FormComponent>
  </div>
</template>

<script>
import FormComponent from '@/components/FormComponent.vue';

export default {
components:{
    FormComponent
}
}
</script>

<style scoped>
</style>