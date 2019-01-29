<template>
    <script :id=id type="text/plain"></script>
</template>
<script>
  import './../../static/ueditor/ueditor.config.js'
  import './../../static/ueditor/ueditor.all.js'
  import './../../static/ueditor/lang/zh-cn/zh-cn.js'
  import './../../static/ueditor/xiumi-ue-dialog-v5.js'
  import './../../static/ueditor/template/template.js'
  import {token,action,domain,bucketName,accessToken} from "../config/qiniuToken";
  export default {
    name: 'UE',
    data () {
      return {
        editor: null
      }
    },
    props: {
      config: {
        type: Object
      },
      id: {
        type: String
      },
    },
    mounted() {
    },
    methods:{
      init(){
        if(UE.Editor.prototype._bkGetActionUrl === undefined){
          sessionStorage.setItem("token",token())
          UE.Editor.prototype._bkGetActionUrl = UE.Editor.prototype.getActionUrl;
          UE.Editor.prototype.getActionUrl = function(act) {
            //判断路径   这里是config.json 中设置执行上传的action名称
            if (act == 'uploadimage' || act == 'uploadvideo' || act == 'uploadscrawl' || act == 'uploadfile' || act == 'listimage' || act == 'listfile'|| act == 'catchimage') {
              UE.accessToken = accessToken
              return `${action},${token()},${domain},${bucketName}`;
            } else {
              return this._bkGetActionUrl.call(this, act);
            }
          }
        }
        this.editor = UE.getEditor(this.id, this.config);
        this.editor.addListener("ready", ()=>{
          this.editor.setContent(this.config.initialContent); // 确保UE加载完成后，放入内容。
        });
      }
    },
    destroyed() {
      this.editor.destroy();
    },
    watch:{
      config:{
        handler:function(val,oldval){
          this.init()
        },
        mmediate: true,
        deep:true
      }
    }
  }
</script>
<style lang="scss">
  @import '../../static/ueditor/xiumi-ue-v5.css';
  @import '../../static/ueditor/template/template.css';
</style>
