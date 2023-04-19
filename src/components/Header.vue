<template>
  <div class="header">

    <router-link to="/">
      <div class="logo" style="margin-left: 30px; font-size: 30px; font-weight: bold; color: white;">
        Propep
      </div>
    </router-link>

    <div v-for="item in HeaderList" :key="item.id" @click="changePerson(item)" class="btn-a">
      {{ item.name }}
    </div>

  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
//import { useRouter } from "vue-router";
import { reactive, toRefs } from "vue";
import { useRouter, onBeforeRouteUpdate } from "vue-router";
//使用接口给数据赋值，TS不会用啊啊啊啊啊，不用了
/* interface dataListReg {//头部接口规定
  HeaderList: any[];
  personSelected: number;
  changePerson: (item: any) => void;
} */
export default {
  setup() {
    const username = localStorage.getItem("ms_username");
    const message = 2;

    const store = useStore();
    const collapse = computed(() => store.state.collapse);


    onMounted(() => {
      if (document.body.clientWidth < 1500) {
        collapseChage();
      }
    });

    // 用户名下拉菜单选择事件
    const router = useRouter();
    //页面跳转
    const dataList = reactive({
      HeaderList: [
        //头部的数据
        {
          id: 1,
          name: "Home",
          path: "/",
        },
        {
          id: 2,
          name: "Serve",
          path: "/server",
        },
        {
          id: 3,
          name: "Download",
          path: "/download",
        },
        {
          id: 4,
          name: "Contact",
          path: "/contact",
        },
        // {
        //   id: 5,
        //   name: "test",
        //   path: "/test",
        // },
      ],
      personSelected: 1, //当前选中的页面

      changePerson: (item) => {
        //切换当前选中的页面
        dataList.personSelected = item.id; //切换头部高亮
        router.push({
          //跳转路由
          path: item.path,
          query: {
            date: new Date().getTime()
          }
        });
      },
    });

    const DataListRef = toRefs(dataList);
    //解决页面需要刷新显示问题


    return {
      activeName: "first",
      username,
      message,
      // home,
      // server,
      // download,
      // contact,
      ...DataListRef,
    };
  },
};
</script>


<style scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
  display: flex;
  /* justify-content: flex-end; */
  /* align-items: center;s */
}

.header .logo {
  float: left;
  width: 70px;
  line-height: 70px;
  cursor: pointer;
}

.btn-a {
  float: left;
  /* width: 100px; */
  line-height: 70px;
  margin-left: 150px;
  font-weight: bold;
  cursor: pointer;

  /* cursor:pointer;//鼠标悬停时变小手 */
}

.header-right {
  float: right;
  padding-right: 50px;
}

.header-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}

.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
  