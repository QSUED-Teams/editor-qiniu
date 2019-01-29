<template>
  <div class="wrap-box">
    <div class="editor-box">
      <v-editor :config=config id="ue1" ref="ueditor"></v-editor>
    </div>
    <button @click="getContent()">获取内容信息</button>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        config: {
          autoHeightEnabled: false,
          autoFloatEnabled: true,　　//是否工具栏可浮动
          initialContent: '',   //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子
          autoClearinitialContent: false, //是否自动清除编辑器初始内容，注意：如果focus属性设置为true,这个也为真，那么编辑器一上来就会触发导致初始化的内容看不到了
          initialFrameWidth: null,
          initialFrameHeight: 500,
          BaseUrl: '',
          UEDITOR_HOME_URL: process.env.NODE_ENV == 'development' ? '/static/ueditor/' : '/ueditor-uploadimage-qinniu/dist/static/ueditor/',
        },
      };
    },
    mounted(){
      this.config.initialContent = '这里的山路十八弯...  吧咋嘿！';
    },
    methods: {
      getContent(){
        alert(UE.getEditor('ue1').getContent())
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import '../assets/css/mixin';
  .wrap-box{
    margin: 30px auto;
    width: 800px;
    height: 500px;
  }
  .editor-box {
    margin-bottom: 20px;
  }
</style>
