<template>
  <div>
    <el-row>
      <el-col :span="12">
        <div class="grid-content">
          <div>
            <span class="demo-input-label">Platform Address</span>
            <el-input class="inputs" placeholder="Please input" v-model="address"></el-input>
          </div>

          <div>
            <span class="demo-input-label">Resource ID (To)</span>
            <el-input class="inputs" placeholder="Please input" v-model="resourcdId"></el-input>
          </div>

          <div>
            <span class="demo-input-label">Query (Filter Criteria)</span>
            <el-input class="inputs" placeholder="Please input" v-model="query"></el-input>
          </div>

          <div>
            <span class="demo-input-label">Header</span>
            <br />
            <el-input class="inputs" placeholder="Please input" v-model="Xm2mRI">
              <template slot="prepend">X-M2M-RI</template>
            </el-input>
            <el-input class="inputs" placeholder="Please input" v-model="Xm2mOrigin">
              <template slot="prepend">X-M2M-Origin</template>
            </el-input>
            <el-input class="inputs" placeholder="Please input" v-model="accept">
              <template slot="prepend">Accept</template>
            </el-input>
          </div>

          <h2 />
          <el-button class="bt" type="primary" @click="retrieve">Retrieve Resource</el-button>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <pre>{{ JSON.stringify(response, null, '\t') }}</pre>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      address: "",
      resourcdId: "",
      query: "",
      Xm2mRI: "",
      Xm2mOrigin: "",
      accept: "",
      response: 'Response',
    };
  },
  methods: {
    retrieve: function () {
      const headers = {
        "X-M2M-RI": this.Xm2mRI,
        "X-M2M-Origin": this.Xm2mOrigin,
        Accept: this.accept,
      };
      const url = "http://" + this.address + "/" + this.resourcdId + "?" + this.query;
      axios.get(url, { headers }).then((response) => {
        console.log(response.data);
        this.response = response.data;
      });
    },
  },

};
</script>

<style scoped>
.inputs {
  width: 70%;
  margin-bottom: 18px;
  font-size: 30px;
}

.grid-content {
  min-height: 500px;
  padding: 2em 1em 1em 1em;
  font-size: 1.5em;
  margin: 8% 0 8em 0;
}

h2 {
  position: relative;
  padding-left: 25%;
  font-size: 1.5em;
  text-align: left;
}
.bt {
  position: relative;
  font-size: 1.5em;
  align-items: center;
}
.demo-input-label {
  display: inline-block;
  /* width: 25%; */
  font-size: 1.5em;
}
.bg-purple-light {
  background: #e5e9f2;
  text-align: left;
  margin: 10% 10% 0 0;
  min-height: 600px;
}
</style>