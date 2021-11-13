<template>
  <div>
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
        <span class="demo-input-label">Header</span>
        <el-input class="inputs" placeholder="Please input" v-model="Xm2mRI">
          <template slot="prepend">X-M2M-RI</template>
        </el-input>
        <el-input style="padding-left: 25%" class="inputs" placeholder="Please input" v-model="Xm2mOrigin" >
          <template slot="prepend">X-M2M-Origin</template>
        </el-input>
        <el-input style="padding-left: 25%" class="inputs" placeholder="Please input" v-model="contentType">
          <template slot="prepend">Content-Type</template>
        </el-input>
      </div>

      <div>
        <span class="demo-input-label">Resource</span>
        <el-select v-model="resourceType" class="inputs" placeholder="Please Select">
          <el-option v-for="item in options" :key="item.text" :label="item.text" :value="item.value">
              {{item.text}}
          </el-option>
        </el-select>
        <el-input style="padding-left: 25%; font-size:20px" class="inputs" type="textarea" :rows="5" placeholder="Please input" v-model="resourceType"></el-input>
      </div>
      <h2 />
      <el-button class="bt" type="primary" @click="create">Create Resource</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      address: "",
      resourcdId: "",
      Xm2mRI: "",
      Xm2mOrigin: "",
      contentType: "",
      options: [{ text: 'AE', value: "{\n\t\"m2m:ae\" : {\n\t    \"rn\": \"ae_test\",\n\t    \"api\": \"0.2.481.2.0001.001.000111\",\n\t    \"lbl\": [\"key1\", \"key2\"],\n\t    \"rr\": true\n    }\n}" }, 
        { text: 'Container', value: "{\n\t\"m2m:cnt\" : {\n\t\t\"rn\": \"cnt_name\"\n    }\n}" }, 
        { text: 'ContentInstance', value: "{\n\t\"m2m:cin\" : {\n\t\t\"con\": \"cin_value\"\n    }\n}" }, 
        { text: 'Subscription', value: "\n{\n\t\"m2m:sub\" : {\n\t\t\"rn\": \"sub1\",\n\t\t\"enc\":{\n\t\t   \"net\":[3]\n\t\t},\n\t    \"nu\": [\"http://localhost:12345\"]\n    }\n}\n\n\n" }],
      resourceType: ''
    };
  },
  methods: {
    create: function () {
      const headers = {
        "X-M2M-RI": this.Xm2mRI,
        "X-M2M-Origin": this.Xm2mOrigin,
        "Content-Type": this.contentType,
      };
      const url = "http://" + this.address + "/" + this.resourcdId;
      const body = this.resourceType;
      axios.post(url, body, { headers }).then((response) => {
        console.log(response.data);
      });
    },
  },
};
</script>

<style scoped>
.inputs {
  width: 40%;
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
  width: 25%;
  font-size: 1.5em;
}
</style>
