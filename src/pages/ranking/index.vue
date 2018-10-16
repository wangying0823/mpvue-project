<template>
  <div class="content">
    <div class="search">
      <input @input="bindKeyInput" type="text" placeholder="搜索歌曲" class="inputSearch">
      <i @click="searchI" style="background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI1MzU0MTYzNzM1IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE5MjAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNDQxLjE5MiAxODEuODMxYzEzMi40OC0xMy43MDQgMjU1LjgyNCA2OC41MjQgMjkyLjM3MSAxOTEuODY4IDQuNTY4IDE4LjI3NC00LjU2OCAyNy40MS0xMy43MDQgMzEuOTc4LTkuMTM3IDAtMjIuODQxLTQuNTY4LTI3LjQxLTE4LjI3NC0zMS45NzgtMTA5LjYzOS0xMzcuMDQ5LTE3OC4xNjMtMjUxLjI1Ni0xNTkuODktMjIuODQxIDQuNTY3LTI3LjQxLTQxLjExNCAwLTQ1LjY4M3pNNzY1LjUzOSA2OTMuNDc5Yy00LjU2OC00LjU2NyAwLTE4LjI3NCA0LjU2Ny0yMi44NDEgNTAuMjUxLTYzLjk1NSA3Ny42NjEtMTQxLjYxNyA3Ny42NjEtMjI4LjQxMyAwLTIwMS4wMDQtMTY0LjQ1OS0zNjUuNDYzLTM2NS40NjMtMzY1LjQ2My0yMDEuMDA0IDAtMzY1LjQ2MyAxNjQuNDU5LTM2NS40NjMgMzY1LjQ2MyAwIDIwMS4wMDQgMTY0LjQ1OSAzNjUuNDYzIDM2NS40NjMgMzY1LjQ2MyA4Ni43OTcgMCAxNjQuNDU5LTI3LjQxIDIyMy44NDYtNzMuMDkyIDkuMTM3LTkuMTM3IDE4LjI3NC0xMy43MDQgMjcuNDEtNC41NjdsMTI3LjkxMyAxMzIuNDhjOS4xMzcgOS4xMzcgMjcuNDEgNC41NjcgMzYuNTQ3LTQuNTY3djBjOS4xMzctOS4xMzcgOS4xMzctMjIuODQxIDAtMzEuOTc4bC0xMzIuNDgtMTMyLjQ4ek00ODIuMzA3IDc2Ni41NzFjLTE3OC4xNjMgMC0zMTkuNzc5LTE0Ni4xODUtMzE5Ljc3OS0zMjQuMzQ4czE0MS42MTctMzE5Ljc3OSAzMTkuNzc5LTMxOS43NzljMTc4LjE2MyAwIDMyNC4zNDggMTQxLjYxNiAzMjQuMzQ4IDMxOS43NzkgMCAxNzguMTYzLTE0Ni4xODUgMzI0LjM0OC0zMjQuMzQ4IDMyNC4zNDh6IiBwLWlkPSIxOTIxIiBmaWxsPSIjNzA1NGRkIj48L3BhdGg+PC9zdmc+); background-size:56rpx 56rpx; width:56rpx;height:56rpx;"></i>
    </div>
    <div style="margin-top:20rpx;">
      <div v-for="item in searchData" :key="item.id" class="SingleWidth">
        <div @click="musicUrl(item.id)">
          <img :src="item.al.picUrl" alt="">
          <div>
            <div style="font-size:32rpx">{{item.name}}</div>
            <div class="searchName">
              <p v-for="(itempeo,indexa) in item.ar" :key="indexa">
                  {{itempeo.name}} &nbsp;
              </p>
              <p>- {{item.al.name}}</p>
            </div>
          </div>
        </div>
        <i @click="addPlayItem(item)" style="background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI1NDI2MTQwNDE3IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM4MDMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTE0LjA0OCA2Mi40NjRxOTMuMTg0IDAgMTc1LjYxNiAzNS4zMjh0MTQzLjg3MiA5Ni43NjggOTYuNzY4IDE0My44NzIgMzUuMzI4IDE3NS42MTZxMCA5NC4yMDgtMzUuMzI4IDE3Ni4xMjh0LTk2Ljc2OCAxNDMuMzYtMTQzLjg3MiA5Ni43NjgtMTc1LjYxNiAzNS4zMjhxLTk0LjIwOCAwLTE3Ni42NC0zNS4zMjh0LTE0My44NzItOTYuNzY4LTk2Ljc2OC0xNDMuMzYtMzUuMzI4LTE3Ni4xMjhxMC05My4xODQgMzUuMzI4LTE3NS42MTZ0OTYuNzY4LTE0My44NzIgMTQzLjg3Mi05Ni43NjggMTc2LjY0LTM1LjMyOHpNNzcyLjA5NiA1NzYuNTEycTI2LjYyNCAwIDQ1LjA1Ni0xOC45NDR0MTguNDMyLTQ1LjU2OC0xOC40MzItNDUuMDU2LTQ1LjA1Ni0xOC40MzJsLTE5Mi41MTIgMCAwLTE5Mi41MTJxMC0yNi42MjQtMTguOTQ0LTQ1LjU2OHQtNDUuNTY4LTE4Ljk0NC00NS4wNTYgMTguOTQ0LTE4LjQzMiA0NS41NjhsMCAxOTIuNTEyLTE5Mi41MTIgMHEtMjYuNjI0IDAtNDUuMDU2IDE4LjQzMnQtMTguNDMyIDQ1LjA1NiAxOC40MzIgNDUuNTY4IDQ1LjA1NiAxOC45NDRsMTkyLjUxMiAwIDAgMTkxLjQ4OHEwIDI2LjYyNCAxOC40MzIgNDUuNTY4dDQ1LjA1NiAxOC45NDQgNDUuNTY4LTE4Ljk0NCAxOC45NDQtNDUuNTY4bDAtMTkxLjQ4OCAxOTIuNTEyIDB6IiBwLWlkPSIzODA0IiBmaWxsPSIjNzA1NGRkIj48L3BhdGg+PC9zdmc+); background-size:40rpx 40rpx; width:40rpx;height:40rpx;"></i>
      </div>
    </div>
    <div class="Playing" @click="listenerButtonPause">
      <div class='wrap'>
        <i style="background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI1MzU5NTQ5NTE5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIxNTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDEwMjRjLTE0LjMzNiAwLTI1LjYtMTEuMjY0LTI1LjYtMjUuNnYtOTcyLjhjMC0xNC4zMzYgMTEuMjY0LTI1LjYgMjUuNi0yNS42czI1LjYgMTEuMjY0IDI1LjYgMjUuNnY5NzIuOGMwIDE0LjMzNi0xMS4yNjQgMjUuNi0yNS42IDI1LjZ6TTI2OC44IDc4MC44Yy0xNC4zMzYgMC0yNS42LTExLjI2NC0yNS42LTI1LjZ2LTQ4Ni40YzAtMTQuMzM2IDExLjI2NC0yNS42IDI1LjYtMjUuNnMyNS42IDExLjI2NCAyNS42IDI1LjZ2NDg2LjRjMCAxNC4zMzYtMTEuMjY0IDI1LjYtMjUuNiAyNS42ek0yNS42IDY1OS45NjhjLTE0LjMzNiAwLTI1LjYtMTEuMjY0LTI1LjYtMjUuNnYtMjQxLjE1MmMwLTE0LjMzNiAxMS4yNjQtMjUuNiAyNS42LTI1LjZzMjUuNiAxMS4yNjQgMjUuNiAyNS42djI0MS4xNTJjMCAxNC4zMzYtMTEuMjY0IDI1LjYtMjUuNiAyNS42ek03NTUuMiA3ODAuOGMtMTQuMzM2IDAtMjUuNi0xMS4yNjQtMjUuNi0yNS42di00ODYuNGMwLTE0LjMzNiAxMS4yNjQtMjUuNiAyNS42LTI1LjZzMjUuNiAxMS4yNjQgMjUuNiAyNS42djQ4Ni40YzAgMTQuMzM2LTExLjI2NCAyNS42LTI1LjYgMjUuNnpNOTk4LjQgNjU5Ljk2OGMtMTQuMzM2IDAtMjUuNi0xMS4yNjQtMjUuNi0yNS42di0yNDEuMTUyYzAtMTQuMzM2IDExLjI2NC0yNS42IDI1LjYtMjUuNnMyNS42IDExLjI2NCAyNS42IDI1LjZ2MjQxLjE1MmMwIDE0LjMzNi0xMS4yNjQgMjUuNi0yNS42IDI1LjZ6IiBwLWlkPSIyMTUzIiBmaWxsPSIjNzA1NGRkIj48L3BhdGg+PC9zdmc+); background-size:80rpx 80rpx; width:80rpx;height:80rpx;margin-top:20rpx;margin-left:20rpx"></i>
      </div>
    </div>
  </div>
</template>
<script>
import { getRequest } from '@/utils/api';
import wx from '@/utils/wx';
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      searchData: {}
    };
  },
  async onLoad() {
    wx.setNavigationBarTitle({
      title: "最热排行榜" //页面标题为路由参数
    });
    let data =  await getRequest('/top/list?idx=1',{});
    this.searchData = data.playlist.tracks
  },
  methods: {
    ...mapActions('songList', ['addPlayItem']),
    bindKeyInput: function(e) {
      this.bindKeyInput = e.target.value;
    },
    searchI: function() {
      let searchValue = this.bindKeyInput;
      const url = "../search/main?search=" + searchValue;
      wx.navigateTo({ url });
    },
    musicUrl(e) {
      const url = "../music/main?id=" + e;
      wx.navigateTo({ url });
    },
    //监听button暂停按钮
    listenerButtonPause: function() {
      let e = wx.getStorageSync("musicId");
      if (!e) {
      } else {
        const url = "../music/main?id=" + e;
        wx.navigateTo({ url });
      }
    },
  }
};
</script>
<style scoped>
.content {
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 0 40rpx;
}
.search {
  display: flex;
}
.inputSearch {
  flex: 1;
  margin-right: 20rpx;
  border-radius: 60rpx;
  border: 1px solid #7054dd;
  font-size: 24rpx;
  padding-left: 20rpx;
}

.SingleWidth {
  width: 670rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.SingleWidth > div {
  display: flex;
  margin-bottom: 30rpx;
}
.SingleWidth > div img {
  width: 120rpx;
  height: 120rpx;
  border-radius: 10rpx;
}
.SingleWidth > div > div {
  margin-left: 20rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.searchName {
  font-size: 20rpx;
  color: #666;
  display: flex;
  margin-top: 10rpx;
  margin-bottom: 20rpx;
}
.Playing {
  position: fixed;
  bottom: 20rpx;
  left: 311rpx;
  width: 120rpx;
  height: 120rpx;
  background: #fff;
  border: 2px solid #7054dd;
  border-radius: 50%;
  overflow: hidden;
}
</style>