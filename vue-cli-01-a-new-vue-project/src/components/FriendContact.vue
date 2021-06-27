<template>
   <li>
      <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
      <button @click="toogleDetails">{{detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
      <button @click="toogleFavorite">Toogle Favorite</button>
      <ul v-if="detailsAreVisible">
         <li><strong>Phone:</strong> {{ phone }}</li>
         <li><strong>Email:</strong> {{ email }}</li>
      </ul>
      <button @click="deleteFriend">Delete</button>
   </li>
</template>

<script>
   export default {
      props: {
         id: {
            type: String,
            required: true
         },
         name: {
            type: String,
            required: true
         },
         email: {
            type: String,
            required: true
         },
         phone: {
            type: String,
            required: true
         },
         isFavorite: {
            type: Boolean,
            default: false
         }
      },
      data() {
         return {
            detailsAreVisible: false,
         };
      },
      emits: {
         'toogle-favorite': function (id) {
            return !!id;
         },
         'delete-friend': function(id) {
            return !!id;
         }
      },
      methods: {
         toogleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
         },
         toogleFavorite() {
            this.$emit('toogle-favorite', this.id);
         },
         deleteFriend() {
            this.$emit('delete-friend', this.id);
         }
      }
   }
</script>