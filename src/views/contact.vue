<template>
    <div class="box-container">
        <el-card class="box-card" shadow="always">
            <template #header>
                <div class="card-header">
                    <span>About us</span>
                    <!-- <el-button class="button" text>Operation button</el-button> -->
                </div>
            </template>
            <!-- <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div> -->
            <div class="text item">Gao Yuan</div>
            <div class="text item">Xie Lu</div>
        </el-card>


        <el-card class="box-card2">
            <div class="text item3">Shanghai-MOST Key Laboratory of Health and Disease Genomics
                <p>Institute of Genome and Bioinformatics, Shanghai Institute for Biomedical and Pharmaceutical
                    Technologies, Shanghai, China.</p>
            </div>
        </el-card>

    </div>
</template>
<script>

export default {
    name: "Contact",
};
</script>
<style>
.box-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.box-card {
    margin-bottom: 20px;
    /* width: 80%; */
    margin: 0 auto;
    width: 1000px;
}

.box-card2 {
    margin-top: 20px;
    /* width: 80%; */
    margin: 0 auto;
    width: 1000px;
}

.card-header {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    font-size: 28px;

}

.text {
    font-size: 20px;
    font-weight: bolder;
}

.item3 {
    font-weight: bolder;
}

.item {
    margin-bottom: 130px;
}
</style>
  

