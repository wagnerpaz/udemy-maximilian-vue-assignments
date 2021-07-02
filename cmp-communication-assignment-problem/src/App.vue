<template>
   <user-data @user-data="getUserData"/>
   <active-user :name="name" :age="age"/> 
</template>

<script>
export default {
   data() {
      return {
         name: '',
         age: 0,
      }
   },
   methods: {
      getUserData(name, age) {
         this.name = name;
         this.age = age;
      }
   }
};
</script>