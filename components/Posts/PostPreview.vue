<template>
   <nuxt-link :to="postLink" class="post-preview">
     <article class="article">
        <div class="post-thumbnail" :style="{backgroundImage: 'url('+ thumbnail +')'}"></div>
        <div class="post-content">
          <h1>{{ title }}</h1>
          <p>{{ previewText }}</p>          
        </div>
      </article>
     </nuxt-link>
</template>

<script>
  export default {
    name: 'PostPreview',
    props: {
      isAdmin: {
        type: Boolean,
        default: false
      },
      id: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      previewText: {
        type: String,
        required: true
      },
      thumbnail: {
        type: String,
        required: true
      }
    },
    computed: {
      postLink() {
        return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
      }
    }
  }
</script>

<style>
.post-preview {
  margin-top: 10px;
  border: 2px solid rgba(202, 159, 123, 0.603);
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
}

.post-content h1{
  font-size: 1rem;
  color: #2c3e50;
  margin-top: 0;
  border-bottom: 2px solid #3498db;
  padding: 10px;
}

.post-content p{
  padding: 15px;
}

a:hover .article,
a:active .article {
  background-color: #ccc;
}
</style>
