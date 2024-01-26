<template>
    <Message :closable="false" severity="error" class="top"> <p class="message"> {{ errorMessage }} </p></Message>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    props: {
      errorMessage: {
        type: String,
        required: true
      }
    }
  })
  </script>
  
  <style scoped>
  .top {
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    width: 40%;
    z-index: 1000; /* Ensure it's above other elements */
  }
  
  .message {
    margin: 5px;
  }
  
  /* Media Query for Small Screens / Phones */
  @media (max-width: 600px) {
    .top {
      width: 80%; /* Wider message box on smaller screens */
      top: 5%;   /* Adjust top position for visibility */
    }
  }
  </style>
  