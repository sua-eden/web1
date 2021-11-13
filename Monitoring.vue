<template>
  <div>
    <div class="grid-content bg-purple-light">
      <pre>{{ JSON.stringify(response, null, "\t") }}</pre>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      response: "Response",
    };
  },
  mounted() {
    axios.get("http://localhost:3000/notification").then((res) => {
      console.log(res.data);
      this.response = JSON.parse(res.data);
    });
  },
};
</script>

<style scoped>
.bg-purple-light {
  background: #e5e9f2;
  text-align: left;
  padding: 2em 1em 1em 1em;
  margin: 10% 10% 10% 10%;
  min-height: 1000px;
  font-size: 1.5em;
}
</style>