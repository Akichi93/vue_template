<template>
    <Multiselect
      :value="customer"
      :options="customers"
      :custom-label="
        ({ uuidCustomer, firstname }) =>
          `${uuidCustomer} - [${firstname}]`
      "
      valueProp="uuidCustomer"
      :placeholder="placeholder"
      label="firstname"
      track-by="firstname"
      :searchable="true"
    >
    </Multiselect>
  </template>
    <script>
  import Multiselect from "@vueform/multiselect";
  import appService from "../../services/appService";
  
  export default {
    name: "customercomponent",
    props: ["customer", "placeholder"],
    data() {
      return {
        customers: [],
      };
    },
  
    mounted() {
      this.getCustomer();
    },
    created() {
      this.getCustomer();
    },
  
    methods: {
      async getCustomer() {
        this.customers = await appService.getCustomer();
      },
    },
    components: { Multiselect },
  };
  </script>