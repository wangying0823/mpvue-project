<template>
	<div class="content">
    <div class="search">
      <input @input="bindKeyInput" type="text" placeholder="搜索歌曲" class="inputSearch">
      <i @click="searchI" style="background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI1MzU0MTYzNzM1IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE5MjAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNDQxLjE5MiAxODEuODMxYzEzMi40OC0xMy43MDQgMjU1LjgyNCA2OC41MjQgMjkyLjM3MSAxOTEuODY4IDQuNTY4IDE4LjI3NC00LjU2OCAyNy40MS0xMy43MDQgMzEuOTc4LTkuMTM3IDAtMjIuODQxLTQuNTY4LTI3LjQxLTE4LjI3NC0zMS45NzgtMTA5LjYzOS0xMzcuMDQ5LTE3OC4xNjMtMjUxLjI1Ni0xNTkuODktMjIuODQxIDQuNTY3LTI3LjQxLTQxLjExNCAwLTQ1LjY4M3pNNzY1LjUzOSA2OTMuNDc5Yy00LjU2OC00LjU2NyAwLTE4LjI3NCA0LjU2Ny0yMi44NDEgNTAuMjUxLTYzLjk1NSA3Ny42NjEtMTQxLjYxNyA3Ny42NjEtMjI4LjQxMyAwLTIwMS4wMDQtMTY0LjQ1OS0zNjUuNDYzLTM2NS40NjMtMzY1LjQ2My0yMDEuMDA0IDAtMzY1LjQ2MyAxNjQuNDU5LTM2NS40NjMgMzY1LjQ2MyAwIDIwMS4wMDQgMTY0LjQ1OSAzNjUuNDYzIDM2NS40NjMgMzY1LjQ2MyA4Ni43OTcgMCAxNjQuNDU5LTI3LjQxIDIyMy44NDYtNzMuMDkyIDkuMTM3LTkuMTM3IDE4LjI3NC0xMy43MDQgMjcuNDEtNC41NjdsMTI3LjkxMyAxMzIuNDhjOS4xMzcgOS4xMzcgMjcuNDEgNC41NjcgMzYuNTQ3LTQuNTY3djBjOS4xMzctOS4xMzcgOS4xMzctMjIuODQxIDAtMzEuOTc4bC0xMzIuNDgtMTMyLjQ4ek00ODIuMzA3IDc2Ni41NzFjLTE3OC4xNjMgMC0zMTkuNzc5LTE0Ni4xODUtMzE5Ljc3OS0zMjQuMzQ4czE0MS42MTctMzE5Ljc3OSAzMTkuNzc5LTMxOS43NzljMTc4LjE2MyAwIDMyNC4zNDggMTQxLjYxNiAzMjQuMzQ4IDMxOS43NzkgMCAxNzguMTYzLTE0Ni4xODUgMzI0LjM0OC0zMjQuMzQ4IDMyNC4zNDh6IiBwLWlkPSIxOTIxIiBmaWxsPSIjNzA1NGRkIj48L3BhdGg+PC9zdmc+); background-size:56rpx 56rpx; width:56rpx;height:56rpx;"></i>
    </div>
    <div class="songitem">
      <div v-for="(item,index) in radio" :key="item.id" class="songWidth">
        <div class="songImg" style="position: relative;">
          <img :src="item.picUrl" alt="" style="opacity:0.9">
          <i style="background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI0NzE3MjA5MDYwIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjgxNDUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODEiIGhlaWdodD0iODEiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQwOS42IDI4Ni43MnY0NTAuNTZsMzI3LjY4LTIyNS4yOHogbTQwLjk2IDgxLjkybDIwNC44IDE0My4zNi0yMDQuOCAxNDMuMzZ6TTIwNC44IDg2OS4xNzEyTDIzNC4yOTEyIDgzOS42OGE0MzEuOTIzMiA0MzEuOTIzMiAwIDAgMS0zMy4zODI0LTMxLjUzOTJMMTcxLjgyNzIgODM3LjYzMnExNS45NzQ0IDE2LjU4ODggMzIuOTcyOCAzMS41MzkyeiIgcC1pZD0iODE0NiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNDAuOTZBNDcxLjA0IDQ3MS4wNCAwIDAgMCAxNDQuNzkzNiA4MDYuOTEyTDE3NC4wOCA3NzguMjRhNDMwLjA4IDQzMC4wOCAwIDEgMSA5Mi4xNiA4Ny4wNGwtMjguNjcyIDI5LjQ5MTJBNDcxLjA0IDQ3MS4wNCAwIDEgMCA1MTIgNDAuOTZ6IiBwLWlkPSI4MTQ3IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+) no-repeat; background-size:80rpx 80rpx; width:210rpx;height:210rpx;position: absolute;left:0;top: 0;background-color:rgba(0,0,0,.2);background-position:center;"></i>
        </div>
        <p>{{item.name}}</p>
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
  import { mapActions } from 'vuex';
  export default {
    data(){
      return {
        radio: []
      }
    },
    async onLoad(){
      wx.setNavigationBarTitle({
        title: '今日电台' //页面标题为路由参数
      });
      let songItemUrl ='/personalized/djprogram';
      let data = await getRequest(songItemUrl, {});
      this.radio = data;
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
  }
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
.songitem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30rpx;
}
.songWidth {
	display: flex;
  width: 100%;
  margin-bottom: 30rpx;
}
.songWidth > p {
  padding-top: 100rpx;
  font-size: 24rpx;
  overflow: hidden;
  padding-left: 20px;
}
.songImg {
  width: 210rpx;
  height: 210rpx;
  position: relative;
}
.songImg > p {
  width: 200rpx;
  font-size: 20rpx;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: 0;
  right: 0;
  color: #fff;
  text-align: right;
  padding-right: 10rpx;
  border-radius: 0 0 10rpx 10rpx;
}
.songImg img {
  width: 210rpx;
  height: 210rpx;
  border-radius: 10rpx;
}
.name {
  font-size: 32rpx;
}
.people {
  margin-top: 10rpx;
  font-size: 24rpx;
  display: flex;
  color: #999;
  max-width: 420rpx;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
.description {
  font-size: 24rpx;
  line-height: 1.25;
  max-height: 120rpx;
  overflow: hidden;
}
.playItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20rpx
}
.playCount {
  flex: 1;
  text-align: center;
  height: 80rpx;
  background: #f3fbfd;
  line-height: 80rpx;
  color: #333;
  font-size:28rpx;

}
.buttonList {
  flex: 1;
  text-align: center;
  height: 80rpx;
  background: #7054dd;
  line-height: 80rpx;
  color: #fff;
  font-size:28rpx;

}
</style>