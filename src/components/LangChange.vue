<template>
    <div class="  mt-0">
        <select
        id="language"
        v-model="selectedLanguage"
        @change="changeLanguage"
        class=" w-25 px-4 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="tr">TR</option>
        <option value="en">EN</option>
      </select>
      
      
    </div>
  </template>
  
  <script lang="js">
  export default {
    data() {
      return {
        selectedLanguage: this.$i18n.locale,
      };
    },
    watch :{
      selectedLanguage (newLang){
        this.$i18n.locale= newLang;
      }
    },
    methods: {
      changeLanguage() {
        this.$i18n.locale = this.selectedLanguage;
      },
    },
  };
  </script>
  