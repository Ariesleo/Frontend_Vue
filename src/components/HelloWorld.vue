<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>abaksls <i class="fa fa-google"></i></p>
    <b-icon-exclamation-triangle-fill></b-icon-exclamation-triangle-fill>
    <b-icon icon="lock"></b-icon>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
