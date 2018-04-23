<template>
 <div class="home-page">
   <section class="intro">
     <h1>The latest blogging news at your fingertips....</h1>
   </section>
    <section class="posts-list">
     <PostList :posts="loadedPosts"/>
   </section>
 </div>
</template>

<script>
  
  export default {
    computed: {
      loadedPosts() {
        return this.$store.getters.loadedPosts
      }
    }
  }

</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/background-image.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 20%;
  width: 50%;
  font-size: 1.5rem;
  color: white;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.39);
  padding: 10px;
  padding-left: 20px;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 3rem;
  }
}

</style>
