<template>
    <div class="container">
      <div class="content-title">Step 1: Input sequences in fasta format</div>
      <div>
        Paste your sequences with Fasta format below(click
        <el-button type="text" @click="centerDialogVisible = true">
          here
        </el-button>
       <!-- <el-link type="primary" style="font-size: 16px">here</el-link> -->
        for example)
      </div>

      <el-dialog v-model="centerDialogVisible" title="Example" width="30%" :append-to-body="true">
        <span> 一段示例序列 </span>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="centerDialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="centerDialogVisible = false">
              Confirm
            </el-button>
          </span>
        </template>
      </el-dialog>
     
    </div>
 
</template>

<script>
import { ref } from "vue";
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
export default {
  name: "upload",
  components: {
    VueCropper,
  },
  setup() {
    
    const centerdialogVisible = ref(false);
    return {  
      centerdialogVisible,   
    };
  },
};
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
.content-title {
  font-weight: 400;
  line-height: 50px;
  margin: 10px 0;
  font-size: 22px;
  color: #1f2f3d;
}

.text1 {
  height: 200px;
  width: 700px;
  resize: none;
}

.pre-img {
  width: 100px;
  height: 100px;
  background: #f8f8f8;
  border: 1px solid #eee;
  border-radius: 5px;
}

.crop-demo {
  display: flex;
  align-items: flex-end;
}

.crop-demo-btn {
  position: relative;
  width: 100px;
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  margin-left: 30px;
  background-color: #409eff;
  color: #fff;
  font-size: 14px;
  border-radius: 4px;
  box-sizing: border-box;
}

.crop-input {
  position: absolute;
  width: 100px;
  height: 40px;
  left: 0;
  top: 0;
  opacity: 0;
  cursor: pointer;
}
</style>