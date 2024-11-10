<template>
  <div class="w-full h-full ">
    <router-link to="/">
        <div class="absolute left-2 top-2 md:left-4 md:top-4 text-black">
         <i class="ri-close-large-fill"></i>
        </div>
    </router-link>
    <FormComponent>
      <template v-slot:input>
        <div class="flex gap-4">
            <div>
                <label for="fname">First Name</label>
                <input
                  class="py-2 px-3 text-xs"
                  id="fname"
                  type="text"
                  placeholder="John"
                />
            </div>
            <div>
                <label for="lname">Last Name</label>
                <input
                  class="py-2 px-3 text-xs"
                  id="lname"
                  type="text"
                  placeholder="Doe"
                />
            </div>
        </div>
        <label for="uname">NIK</label>
                <input
                  class="py-2 px-3 text-xs"
                  id="uname"
                  type="text"
                  placeholder="9008392"
                />
      </template>
      <template v-slot:title>Register</template>
      <template v-slot:line>Register</template>
      <template v-slot:submit
        ><RouterLink to="/login">Register</RouterLink></template
      >
      <template v-slot:text-redirect>
        <p class="text-sm font-bold text-slate-500">
          Not Registered yet?
          <RouterLink to="/login">
            <span class="text-purple-600">Login</span>
          </RouterLink>
        </p>
      </template>
    </FormComponent>
  </div>
</template>

<script>
import FormComponent from "@/components/FormComponent.vue";

export default {
  components: {
    FormComponent,
  },
};
</script>

<style scoped>
h1,
p {
  font-family: "Lato SB";
}
p {
  margin: 10px 0 20px;
  font-weight: 600;
}
p span {
  background: #fff;
  padding: 0 10px;
}
input[type="text"] {
  width: 100%;
  outline: solid 1px #64748b;
  border-radius: 10px;
  caret-color: #64748b;
  margin-bottom: 1.5rem;
}

label {
  font-family: "Lato B";
  font-size: 0.8rem;
}
label::after {
  content: "*";
  color: #9333ea;
}
a {
  color: #fff !important;
  font-family: "Lato SB";
}
</style>