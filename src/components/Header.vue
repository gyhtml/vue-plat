<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <!-- <div class="collapse-btn" @click="collapseChage">
      <i v-if="!collapse" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i>
    </div> -->
    <div class="logo" style="margin-left: 30px; font-size: 30px; font-weight: bold;">Propep</div>

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
    // 侧边栏折叠
    const collapseChage = () => {
      store.commit("handleCollapse", !collapse.value);
    };

    onMounted(() => {
      if (document.body.clientWidth < 1500) {
        collapseChage();
      }
    });

    // 用户名下拉菜单选择事件
    const router = useRouter();
    const handleCommand = (command) => {
      if (command == "loginout") {
        localStorage.removeItem("ms_username");
        router.push("/login");
      } else if (command == "user") {
        router.push("/user");
      }
    };
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
        {
          id: 5,
          name: "test",
          path: "/test",
        },
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
      collapse,
      collapseChage,
      handleCommand,
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
}

.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 70px;
}

.header .logo {
  float: left;
  width: 70px;
  line-height: 70px;
}

.tabs-a {
  position: absolute;
  left: 170px;
  top: -5px;
  /* width: 70px; */
  height: 70px;
  color: #fff;
}

.btn-a {
  float: left;
  width: 100px;
  line-height: 70px;
  margin-left: 100px;
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

.btn-fullscreen {
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 24px;
}

.btn-bell,
.btn-fullscreen {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
}

.btn-bell-badge {
  position: absolute;
  right: 0;
  top: -2px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #f56c6c;
  color: #fff;
}

.btn-bell .el-icon-bell {
  color: #fff;
}

.user-name {
  margin-left: 10px;
}

.user-avator {
  margin-left: 20px;
}

.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.el-dropdown-link {
  color: #fff;
  cursor: pointer;
}

.el-dropdown-menu__item {
  text-align: center;
}
</style>
