<template>
    <div>
        <div class="downloadtxt">
            <el-row :gutter="20">
                <el-col :span="24">
                    <el-card shadow="hover" class="mgb20">
                        <div class="user-info">
                            <text style="font-size: 28px;">Please note:
                                Propep is ONLY freely available for academic research.<br>
                                And for commercial usage, please
                                contact us.<br>
                            </text>
                        </div>
                    </el-card>
                </el-col>

            </el-row>

        </div>

        <div class="container">
            <text style="font-size: 24px; font-weight: bold;">Please download by clicking the link below:</text>
            <div class="content-title">Dataset</div>
            <el-row style="background-color: white;">
                <el-form ref="form" class="form-data">
                    <el-col>
                        <el-form-item>
                            <span slot="label">
                                <span class="formStar">The training set:</span>
                            </span>
                        </el-form-item></el-col>
                    <el-col>
                        <el-form-item>
                            <el-button type="text" @click="download" class="button1">download</el-button>
                        </el-form-item></el-col>
                </el-form>
            </el-row>

            <el-row style="background-color: white;">
                <el-form ref="form" class="form-data">
                    <el-col>
                        <el-form-item>
                            <span slot="label">
                                <span class="formStar">The testing set:</span>

                            </span>
                        </el-form-item></el-col>
                    <el-col>
                        <el-form-item>
                            <el-button type="text" @click="download" class="button1">download</el-button>
                        </el-form-item></el-col>
                </el-form>
            </el-row>
            <el-row style="background-color: white;">
                <el-form ref="form" class="form-data">
                    <el-col>
                        <el-form-item>
                            <span slot="label">
                                <span class="formStar">GITHUB:</span>

                            </span>
                        </el-form-item></el-col>
                    <el-col>
                        <el-form-item>
                            <el-button type="text" @click="download" class="button1">Propep</el-button>
                        </el-form-item></el-col>

                </el-form>

            </el-row>

        </div>

    </div>
</template>

<script>
import { ref } from "vue";
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
import defaultSrc from "../assets/img/img.jpg";
export default {

    name: "upload",
    components: {
        VueCropper,
    },
    setup() {
        const imgSrc = ref("");
        const cropImg = ref(defaultSrc);
        const dialogVisible = ref(false);
        const cropper = ref(null);

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
            tableData: [{
                no: 'The training set',
                data: '上海市普陀区金沙江路 1518 弄'
            }, {
                no: 'The testing set',
                data: '上海市普陀区金沙江路 1518 弄'
            }]


        };

    },
    methods: {

    }


};

</script>
<style scoped>
.content-title {
    font-weight: 400;
    line-height: 50px;
    margin: 10px 0;
    font-size: 22px;
    color: #1f2f3d;
}

.formStar {
    font-size: 18px;
    margin-right: 10px;

}

.button1 {
    font-size: 18px;

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