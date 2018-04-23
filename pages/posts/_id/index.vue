<template>
  <div class="single-post-page">
    <div class="post-image">
      <img :src="loadedPost.thumbnail" alt="image">
    </div>
    <section class="post">
      <div class="post-date">{{loadedPost.updatedDate | date}} | Author: {{loadedPost.author}}</div>
      <h1 class="post-title">{{loadedPost.title}}</h1>
      <div class="post-content" v-html="loadedPost.content"></div>
    </section>
    <section class="post-feedback">
      <p>Let me know what you think about the post. You can send a mail to <a href="mailto:test@test.com">test@test.com</a></p>
    </section>
  </div>
</template>

<script>


export default {
  asyncData(context) {
    if (context.payload) {
      return {
        loadedPost: context.payload.postData
      }
    }
    return context.app.$axios.$get('https://blogapp-4939f.firebaseio.com/posts/' + context.params.id + '.json')
      .then(data => {
        return {
          loadedPost: data
        }
      })
      .catch(e => context.error(e))
  }
};
</script>

<style scoped>

.single-post-page {
  text-align: left;
  margin: 30px auto;
  max-width: 800px;
  width: 80%;
	border: 20px solid #DFD2C9;
	font-size: 14px;
  padding: 30px;
  box-sizing: border-box;
}

.post-date {
  color: #3498db;
	letter-spacing: 0.2rem;
	text-transform: uppercase;
	font-weight: normal;
	font-size: 1.2rem;
  margin-top: 20px;
}

.post-title {
  color: #2c3e50;
	font-size: 2.0rem;
}

.post-content {
  text-align: justify;
  border-top: 3px solid #ccc;
  border-bottom: 3px solid #ccc;
}

.post-feedback {
    text-align: center;
}

.post-feedback a {
  color: #3498DB;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
} 
img {max-width:100%;}


</style>
