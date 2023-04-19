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
                            <el-button type="text" @click="downloadFile" class="button1">download</el-button>
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
                            <el-button type="text" @click="downloadFile" class="button1">Propep</el-button>
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

        const downloadFile = () => {
            const link = document.createElement('a')
            link.href = 'path/to/your/file'
            link.download = 'filename'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        }

        return {
            downloadFile,
        };

    },

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
</style>