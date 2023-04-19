<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="24">
                <el-card shadow="hover" class="mgb20">
                    <div class="user-info">

                        <text style="font-size: 38px; font-weight: bold;">Welcome to Propep</text>

                    </div>
                    <img src="../assets/img/workflow.png" class="workflow" alt />
                </el-card>

            </el-col>

        </el-row>

    </div>
</template>

<script>
import Schart from "vue-schart";
import { reactive } from "vue";
export default {
    name: "dashboard",
    components: { Schart },

};
</script>

<style scoped>
.user-info {
    font-size: 18px;
    color: black;
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 2px;
    justify-content: center;
}

.workflow {
    /* width: 100%;
    height: 100%; */
    /* object-fit: cover; */
    align-items: center;
    width: 1200px;
    height: 600px;

}


.mgb20 {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
}
</style>