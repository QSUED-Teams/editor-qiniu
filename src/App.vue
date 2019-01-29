<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import "assets/css/reset.scss";
@import "assets/fonts/font-awesome.min.css";
@import "assets/fonts/iconfont.css";
@import "assets/css/mixin.scss";
@import "assets/css/main.scss";

body{
	width:100%;
	height:100%;
  font-size: 14px;

}
#app {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background:rgba(240,243,246,1);

}
.el-badge__content{

}
.header-right {
  li {
    padding: 21px 20px;
    position: relative;
    cursor: pointer;
    &:after {
      content: '';
      @include ct();
      right: 0;
      height: 15px;
      margin-top: 1px;
      width: 1px;
      background-color: #676e89;
    }
    &.last:after {
      display: none;
    }
    i {
      font-size: 16px;
      margin-right: 6px;
      display: inline-block;
      vertical-align: middle;
      cursor: pointer;
      color: #a2aed8;
    }
    span {
      font-style: normal;
      font-size: 13px;
      color: #fff;
      display: inline-block;
      vertical-align: middle;
      cursor: pointer;
    }
  }
  .active {
    color: #12BBF0;
    span {
      color: #12BBF0;
    }
  }
  li:last-child {
    border: 0;
  }
}
</style>
