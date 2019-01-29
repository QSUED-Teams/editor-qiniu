/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgCode： 图片验证码地址
 * clickUrl: 菜单点击地址
 *
 */
let backUrl;
let mainUrl;
let ssoUrl;
let clickUrl;
let downloadUrl;

if (process.env.NODE_ENV == 'development') {
  backUrl = 'http://test-pk-ht.hzqisheng.cn/'
  //ssoUrl = 'http://47.97.104.158:12080'//正式网
  mainUrl = 'http://192.168.0.138/'
  ssoUrl = 'http://47.98.61.135:12080/'//测式网
  clickUrl= 'http://localhost:'
  downloadUrl = 'http://192.168.0.188:8088/park_cms/'
}else{
  backUrl = '/'
 mainUrl = 'http://test-user-center.zhihuipk.com/'//测式网
 ssoUrl = 'http://47.98.61.135:12080/'//测式网
  // mainUrl = 'http://main.zhihuipk.com/'//正式网
  // ssoUrl = 'http://47.97.104.158:12080/'//正式网
  clickUrl=''
  downloadUrl = 'http://test-pk-ht.hzqisheng.cn/'// todo 测式网
}

export {
  backUrl,
  ssoUrl,
  mainUrl,
  clickUrl,
  downloadUrl
}
