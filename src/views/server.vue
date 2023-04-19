<template>
  <div>
    <el-dialog title="上传文件" :close-on-click-modal="false" @close="closeHandle" :visible.sync="Uploadvisible"></el-dialog>

    <div>
      <div>
        <el-row :gutter="20">
          <el-col :span="24">
            <el-card shadow="hover" class="mgb20">
              <div class="user-info">
                <text style="font-size: 30px">Identification of protein-peptide binding residues</text>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <div class="container">
        <div class="content-title">Step 1: Input sequences in fasta format</div>
        <div>
          <!-- 点击出现示例序列 -->
          <p style="font-size: 18px;">Paste your sequences with Fasta format below(click <span @click="setExample"
              style="color:skyblue">here</span>
            for example)</p>
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

        <el-row>
          <el-col :span="16" class="text1">
            <!-- 定义文本框 -->
            <textarea id="fasta" rows="10" v-model="fasta_input"
              style="height: 200px; width: 700px; resize: none ;font-size: 18px; "></textarea>
          </el-col>
          <!-- 上传文件 -->
          <el-col :span="6">
            <el-upload class="upload-demo" accept=".fasta" action="https://jsonplaceholder.typicode.com/posts/"
              :on-change="handleChange" :file-list="fileList" :multiple="false">
              <el-button size="small" type="primary" style="margin: 50px">click</el-button>
              <div slot=" tip" class="el-upload__tip" style="font-size: 14px;">
                只能上传fasta文件，且不超过500kb
              </div>
            </el-upload>
          </el-col>
          <el-col :span="2"></el-col>
        </el-row>

        <!-- 提交fasta -->
        <div class="content-title">Step 2: Submit your sequences </div>
        <div>
          <el-button class="button-submit" type="primary" @click="submitFasta">submit</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
import defaultSrc from "../assets/img/img.jpg";
import axios from 'axios';
export default {
  name: "upload",
  components: {
    VueCropper,
  },
  setup() {
    const imgSrc = ref("");
    const cropImg = ref(defaultSrc);
    const dialogVisible = ref(false);
    const centerdialogVisible = ref(false);
    const cropper = ref(null);
    const fasta_input = ref('');
    //let centerdialogVisible = ref(false)
    const setExample = () => {
      fasta_input.value = '>1abtA\nIVCHTTATSPISAVTCPPGENLCYRKMWCDAFCSSRGKVVELGCAATCPSKKPYEEVTCCSTDKCNPHPKQRPG';
    };
    const submitFasta = () => {
      axios.post('/api/submit_fasta', { fasta: fasta_input.value }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
    };
    const setImage = (e) => {
      const file = e.target.files[0];
      if (!file.type.includes("image/")) {
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        dialogVisible.value = true;
        imgSrc.value = event.target.result;
        cropper.value && cropper.value.replace(event.target.result);
      };
      reader.readAsDataURL(file);
    };

    const cropImage = () => {
      cropImg.value = cropper.value.getCroppedCanvas().toDataURL();
    };

    const cancelCrop = () => {
      dialogVisible.value = false;
      cropImg.value = defaultSrc;
    };

    return {
      cropper,
      imgSrc,
      cropImg,
      dialogVisible,
      setImage,
      cropImage,
      cancelCrop,
      centerdialogVisible,
      fasta_input,
      setExample,
      submitFasta,
      fileList: [
        {
          name: "1.fasta",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "2.fasta",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
    };




  },

  // 取最后三个文件
  methods: {

    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3);
    },

    submitFasta() {
      // Send an AJAX request to the server
      axios({
        method: 'post',
        url: 'your_python_file.py',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        },
        data: {
          fasta_input: this.fasta_input
        }
      })
        .then(response => {
          // Handle the response from the server
          console.log(response.data);
        })
        .catch(error => {
          // Handle any errors
          console.log(error);
        });
    }

  },

  // methods: {
  //   showText(seq) {
  //     this.text = seq + '\n';
  //   },
  // }



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
  font-size: 24px;
  color: #1f2f3d;
  font-weight: bolder;
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