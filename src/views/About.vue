<template>
  <div id="about">
    <h1>This is an about page</h1>

    <page-top-min></page-top-min>
  </div>
</template>

<script>
  import pageTopMin from    '@/components/currency/page-top-min.vue'


  export default {
    name:"about",
    components :{
      pageTopMin
    }
  }
</script>