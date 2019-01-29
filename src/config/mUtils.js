import store from '../story/'

/**
 * 存储localSession
 */
export const setSession = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.sessionStorage.setItem(name, content);
}

/**
 * 获取localSession
 */
export const getSession = name => {
  if (!name) return;
  return window.sessionStorage.getItem(name);
}
/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return;
  return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
}
/**
 * 获取地址栏参数
 */
export const getQueryString = (name) => {
  var pam = window.location.href.split('?')[1] || ''
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = pam.match(reg);
  if (r != null) return decodeURI(r[2]);
  return null;
}

/**
 * 补0
 */
export const islength = (num) => {
  if (Number(num) < 10) {
    return '0' + num
  } else {
    return num
  }
}

/**
 * 表单校验
 */
export const rule = {
  alert: function (mess) {
    store.state.alertMessage = mess
    store.state.showAlert = true
  },
  empty: function (str, mess) {//不能为空
    if (str == '') {
      this.alert(mess)
      return false
    } else {
      return true
    }
  },
  phone: function (str) {//手机号校验
    var myReg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
    if (!myReg.test(str)) {
      this.alert('手机号码有误')
      return false
    } else {
      return true
    }
  }
}

export const phoneRule =/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
export const phoneRule2 = /(^(\d{3,4}-)?\d{7,8})$|(^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$)/;
export const chinese = /^[\u4E00-\u9FA5]+$/;
export const number = /(^[1-9]([0-9]+)$)|(^[1-9]?$)/;
export const number0 = /(^[1-9]([0-9]+)$)|(^(0){1}$)|(^[1-9]?$)/;
export const price = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
export const areaRule = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^[0-9]\.[0-9]([0-9])?$)/;
// export const email = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
export const email = /^((([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})[; ,])*(([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})))$/;
export const bankCode = /^([1-9]{1})(\d{14}|\d{18})$/;
export const http = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:\/~\+#][^\u4E00-\u9FA5]*[\w\-\@?^=%&\/~\+#][^\u4E00-\u9FA5])?/;
// export const http = /[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?$/;
export const numberCode = /^(\w)+$/;
export const noChinese = /[^\u4E00-\u9FA5]+$/g;
export const contractCode = /^[\w\-_]+$/;
export const overscroll = els => {
  for (var i = 0; i < els.length; ++i) {
    var el = els[i];
    el.addEventListener('touchstart', function () {
      var top = this.scrollTop
        , totalScroll = this.scrollHeight
        , currentScroll = top + this.offsetHeight;
      if (top === 0) {
        this.scrollTop = 1;
      } else if (currentScroll === totalScroll) {
        this.scrollTop = top - 1;
      }
    });
    el.addEventListener('touchmove', function (evt) {
      if (this.offsetHeight < this.scrollHeight)
        evt._isScroller = true;
    });
  }
};//禁止body的滚动事件
document.body.addEventListener('touchmove', function (evt) {
  if (!evt._isScroller) {
    evt.preventDefault();
  }
});//给class为.scroll的元素加上自定义的滚动事件
//overscroll(document.querySelectorAll('.scroll'));


//删除数组指定的某个元素
Array.prototype.remove = function (val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};

//数组去重
export const unique = (arr) => {
  return arr.filter((element, index, self) => {
    return self.indexOf(element) === index
  })
}


Date.prototype.format = function (format) {
  var o = {
    "M+": this.getMonth() + 1,  //month
    "d+": this.getDate(),     //day
    "h+": this.getHours(),    //hour
    "m+": this.getMinutes(),  //minute
    "s+": this.getSeconds(), //second
    "q+": Math.floor((this.getMonth() + 3) / 3),  //quarter
    "S": this.getMilliseconds() //millisecond
  }
  var week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  if (/(w+)/.test(format)) {
    format = format.replace(RegExp.$1, week[this.getDay()]);
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return format;
}

Date.prototype.add = function (part, value) {
  value *= 1;
  if (isNaN(value)) {
    value = 0;
  }
  switch (part) {
    case "y":
      this.setFullYear(this.getFullYear() + value);
      break;
    case "m":
      this.setMonth(this.getMonth() + value);
      break;
    case "d":
      this.setDate(this.getDate() + value);
      break;
    case "h":
      this.setHours(this.getHours() + value);
      break;
    case "n":
      this.setMinutes(this.getMinutes() + value);
      break;
    case "s":
      this.setSeconds(this.getSeconds() + value);
      break;
    default:

  }
  return this
}

//alert(new Date().add("m", -1).format('yyyy-MM-dd hh:mm:ss'));

/**
 * 显示返回顶部按钮，开始、结束、运动 三个过程中调用函数判断是否达到目标点
 */
export const showBack = (el, callback) => {
  let requestFram;
  let oldScrollTop;

  document.addEventListener('scroll', () => {
    showBackFun();
  }, false)
  document.addEventListener('touchstart', () => {
    showBackFun();
  }, {passive: true})

  document.addEventListener('touchmove', () => {
    showBackFun();
  }, {passive: true})

  document.addEventListener('touchend', () => {
    oldScrollTop = el.getPosition().top;
    moveEnd();
  }, {passive: true})

  const moveEnd = () => {
    requestFram = requestAnimationFrame(() => {
      if (el.getPosition().top != oldScrollTop) {
        oldScrollTop = el.getPosition().top;
        moveEnd();
      } else {
        cancelAnimationFrame(requestFram);
      }
      showBackFun();
    })
  }

  //判断是否达到目标点
  const showBackFun = () => {
    if (el.getPosition().top > 500) {
      callback(true);
    } else {
      callback(false);
    }
  }
}


export const toast = (msg = '', time = 1500) => {
  var toast = document.createElement('div')
  toast.className = 'common-toast common-toast-show'
  toast.innerHTML = msg
  document.body.appendChild(toast)
  toast.style.display = 'block'
  toast.style.margin = `-${toast.offsetHeight / 2}px 0 0 -${toast.offsetWidth / 2}px`
  var timer = setTimeout(() => {
    toast.className = 'common-toast common-toast-hide'
    clearTimeout(timer)
    var timer2 = setTimeout(() => {
      document.body.removeChild(toast)
      clearTimeout(timer2)
    }, 200)
  }, time)
}


const digitsRE = /(\d{3})(?=\d)/g

export function currency(value, currency, decimals) {
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  currency = currency != null ? currency : '$'
  decimals = decimals != null ? decimals : 2
  var stringified = Math.abs(value).toFixed(decimals)
  var _int = decimals
    ? stringified.slice(0, -1 - decimals)
    : stringified
  var i = _int.length % 3
  var head = i > 0
    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
    : ''
  var _float = decimals
    ? stringified.slice(-1 - decimals)
    : ''
  var sign = value < 0 ? '-' : ''
  return sign + currency + head +
    _int.slice(i).replace(digitsRE, '$1,') +
    _float
}


/**
 * 检查是否为Emoji
 */
export const isEmoji = name => {
  if (escape(name).toLocaleLowerCase().match(/(\%\ue[0-9a-f]{3})|(\%\ud[0-9a-f]{3})/)) {
    return true
  } else {
    return false
  }
}


const resizeMe = (img, maxW, maxH, nocheck) => {

  const browser = {
    versions: function () {
      var u = navigator.userAgent;
      return {
        trident: u.indexOf('Trident') > -1, //IE内核
        presto: u.indexOf('Presto') > -1, //opera内核
        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
        iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, //是否iPad
        webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
        weixin: u.toLowerCase().match(/MicroMessenger/i) == 'micromessenger', //是否微信
        qq: u.match(/\sQQ/i) == " qq" //是否QQ
      };
    }()
  };

  var canvas = document.createElement('canvas');
  var width = img.width;
  var height = img.height;
  var max_width = maxW || 640;
  var max_height = maxH || 640;
  var max_size = 300;//k
  if (width > max_width) {
    height *= max_width / width;
    height = Math.round(height);
    width = max_width;
  }
  if (height > max_height) {
    width *= max_height / height;
    width = Math.round(width);
    height = max_height;
  }
  //将图片放入canvas，并重置canvas大小
  if (browser.versions.ios || browser.versions.webApp) {
    var mpImg = new MegaPixImage(img);
    canvas.width = width;
    canvas.height = height;
    mpImg.render(canvas, {width: width, height: height});
  } else {
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, width, height);
  }
  var res, quality = .7, resSize, ratio = 1;

  res = canvas.toDataURL("image/jpeg", quality); // 截取canvas对应的jpg图片，并且画质为70%（默认就是70%，可以改变）

  // Android 2.x、Android 4.1.2、4.3 的 toDataURL 不支持jpeg格式；
  if (res.substr(0, "data:image/png".length) == "data:image/png" || res.substr(0, 6) == "data:,") {
    var encoder = new JPEGEncoder();
    res = encoder.encode(canvas.getContext("2d").getImageData(0, 0, width, height), quality * 100, true);
  }
  resSize = Math.ceil(res.length / 1024); //k

  if (resSize > max_size && !nocheck) {
    ratio = Math.ceil(Math.sqrt(max_size / resSize) * 100) / 100;
    if (ratio >= .9) {
      ratio -= .1;
    }

    res = resizeMe(img, max_width * ratio, max_height * ratio, true);
  }
  return res;
}

const resizeMe2 = (img) => {
  var canvas = document.createElement('canvas');
  var ress = resizeMe(img);
  var imgs = new Image();
  imgs.src = ress

  var prom = new Promise(function (resolve, reject) {
    imgs.onload = function () {
      var height = imgs.height
      var width = imgs.width
      var widthheight = height >= width ? width : height;
      canvas.width = widthheight;
      canvas.height = widthheight;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(imgs, (width - widthheight) / 2, (height - widthheight) / 2, widthheight, widthheight, 0, 0, widthheight, widthheight);
      var res = canvas.toDataURL("image/jpeg", 1); // 截取canvas对应的jpg图片，并且画质为70%（默认就是70%，可以改变）
      // Android 2.x、Android 4.1.2、4.3 的 toDataURL 不支持jpeg格式；
      if (res.substr(0, "data:image/png".length) == "data:image/png" || res.substr(0, 6) == "data:,") {
        var encoder = new JPEGEncoder();
        res = encoder.encode(canvas.getContext("2d").getImageData(0, 0, widthheight, widthheight), 100, true);
      }
      resolve(res);
    }
  });

  return prom
};

/**将选中的图片转化成base64
 * @param files
 */
export const imgFile = (files) => {
  return new Promise((res, err) => {
    var image = new Image();
    var _this = this;
    var leng = files.length;
    for (var i = 0; i < leng; i++) {
      var reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onload = function (e) {
        var image = new Image();
        image.src = this.result;
        image.onload = function () {
          var resized = resizeMe(image);
          if (!resized) {
            err('图片加载出错，请选择其他图片！');
            return;
          }
          else {
            res(resized);
          }
        }
      };
    }
  })
};

/**
 * 选择图片
 */
export const selectImgFile = (e, message, type) => {
  var files = e.target.files || e.dataTransfer.files;
  console.log(files);
  type = type || ['image/png', 'image/jpeg', 'image/gif', 'application/pdf'];
  // list = list || 0;
  var ok = [];
  if (type instanceof Array) {
    type.forEach(item => {
      ok.push(files[0].type === item ? 1 : 0);
    })
  } else {
    ok.push(files[0].type === type ? 1 : 0)
  }
  if (!files.length) return;
  if (ok.indexOf(0) === -1) {
    message({
      type: 'error',
      message: '图片类型选择错误！'
    });
    return
  }
  if (files[0].size >= 20 * 1024 * 1024) {
    message({
      type: 'error',
      message: '选择图片最大为20M'
    });
    return
  }
  if (typeof FileReader === 'undefined') {
    //globel.toast('不支持图片上传');
    return false;
  }
  return imgFile(files)
};

export const empty = (val) => {
  switch (val) {
    case null:
    case undefined:
    case '':
      return '-';
    default:
      return val;
  }
}
export const date = (val) => {
  switch (val) {
    case null:
    case undefined:
    case '':
      return '-';
    default:
      return new Date(val).format('yyyy-MM-dd hh:mm:ss')
  }
}

export const getFilters = (arr, val) => {
  arr = arr || [];
  var message = '';
  arr.forEach((item) => {
    if (item.value === val) {
      message = item.label;
      return
    }
  });
  return message
};
/**
 * 选择文件
 */
export const selectOtherFile = (e, message, type) => {
  var files = e.target.files || e.dataTransfer.files;
  var ok = [];
  if (type) {
    if (type instanceof Array) {
      type.forEach(item => {
        ok.push(files[0].type === item ? 1 : 0);
      })
    } else {
      ok.push(files[0].type === type ? 1 : 0)
    }
  } else {
    ok.push(0)
  }
  console.log(files);
  if (!files.length) return;
  if (ok.indexOf(0) === -1) {
    message({
      type: 'error',
      message: '文件类型选择错误！'
    });
    return
  }
  if (files[0].size >= 20 * 1024 * 1024) {
    message({
      type: 'error',
      message: '选择文件最大为20M'
    });
    return
  }
  if (typeof FileReader === 'undefined') {
    //globel.toast('不支持图片上传');
    return false;
  }
  return files;
};
export const throttle = (func, delay) => { //函数节流
  var timer = null;
  var startTime = Date.now();
  return () => {
    var curTime = Date.now();
    var remaining = delay - (curTime - startTime);
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    if (remaining <= 0) {
      func.apply(context, args);
      startTime = Date.now();
    } else {
      timer = setTimeout(func, remaining);
    }
  }
};
export const del = (arr, index, type) => {
  arr.splice(index, 1);
  if (type) {
    let file = document.getElementById(type);
    file.value = ''; //虽然file的value不能设为有字符的值，但是可以设置为空值
  }
};
/**
 *获取级联选择器的选项
 * @param val
 * @param opt
 * @param config
 * @returns {*}
 */
export const getCascaderObj = (val, opt, config) => {
  var value = config || 'value';
  return val.map(function (value, index, array) {
    for (var itm of opt) {
      if (itm[value] == val) {
        opt = itm.children;
        return itm;
      }
    }
    return null;
  });
};
/**
 *获取选择器的选项
 * @param val
 * @param opt
 * @returns {string}
 */
export const deepClone = (val, opt) => {
  var arr = '', item;
  if (val.constructor == Array) {
    val.map((value, index, array) => {
      item = opt.filter(item => item.value === value)[0];
      return item ? arr = item : '';
    });
  } else {
    item = opt.filter(item => item.value === val)[0];
    return item ? arr = item : '';
  }
  return arr;
};
export const getType = (obj) => {
  //tostring会返回对应不同的标签的构造函数
  var toString = Object.prototype.toString;
  var map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  };
  if (obj instanceof Element) {
    return 'element';
  }
  return map[toString.call(obj)];
};
export const deepCopy = (o) => {
  if (o instanceof Array) {
    var n = [];
    for (var i = 0; i < o.length; ++i) {
      n[i] = deepCopy(o[i]);
    }
    return n;
  } else if (o instanceof Function) {
    var n = new Function("return " + o.toString())();
    return n
  } else if (o instanceof Object) {
    var n = {}
    for (var i in o) {
      n[i] = deepCopy(o[i]);
    }
    return n;
  } else {
    return o;
  }
};
export const getState = (val) => {
  switch (val) {
    case 0:
      return '待招商';
    case 1:
      return '已招商';
    case 2:
      return '已锁定';

  }
};

export const getChartType = (val) => {
  switch (val) {
    case 0:
      return '商务';
    case 1:
      return '办公';
    case 2:
      return '工位';
  }
};

/**
 *重置文件选择
 * @param id
 */
export const removeFile = (id) => {
  var fileObj = document.getElementById(id);
  if (fileObj) {
    fileObj.value = '';
  }
};

export const ridFirstAndEnd = (arr) => {
  var str = '';
  arr.forEach((item, index) => {
    if (index == 0) {
      str += item
    } else {
      str += ',' + item
    }
  });
  return str;
};
/**
 * 拼接两个数组
 * @param arr1
 * @param arr2
 * @returns {*}
 */
export const arrConcat = (arr1, arr2) => {
  if (!arr2 || getType(arr2) != 'array') {
    return [3];
  }
  if (!arr1 || getType(arr1) != 'array') {
    arr2.push(3);
    return arr2;
  }
  arr1.forEach((item) => {
    arr2.push(item)
  });
  return arr2;
};

export
{
  resizeMe, resizeMe2
}

/**
 * elementUI 表单重置方法
 * @param obj
 * @param type
 */
export const resetForm = (obj, type) => {
  if (obj) {
    if (type == 2) {
      obj.map((item, index) => {
        item.resetFields();
      })
    } else {
      obj.resetFields();
    }
  }
};

/**
 * 获取表单数据
 * @param o
 * @param j
 * @returns {FormData}
 */
export const getFormData = (o, j) => {
  let formData = new FormData();
  for (let i in o) {
    if (o[i] !== null && o[i] !== undefined) {
      if (getType(o[i]) === 'array') {
        // formData.append(i, o[i]);
        o[i].forEach((item) => {
          formData.append(i, item);
        })
      } else {
        formData.append(i, o[i]);
      }
    } else {
      formData.append(i, '');
    }
  }
  return formData;
};

export const toDatetime = (time) => {
  return time ? new Date(time).format('yyyy-MM-dd 00:00:00') : ''
};
export const toDate = (time) => {
  return time ? new Date(time).format('yyyy-MM-dd') : ''
};

export const toDateTime = (time) => {
  return time ? new Date(time).format('yyyy-MM-dd hh:mm:ss') : ''
};

/**
 * elementUI 验证表单方法
 * @param obj
 * @param type
 * @returns {*}
 */
export const checkForm = (obj, type) => {
  let ok;
  if (obj) {
    if (type === 2) {
      ok = [];
      obj.map((item, index) => {
        item.validate((valid) => {
          if (valid) {
            ok.push(1);
          } else {
            ok.push(2);
          }
        });
      })
    } else {
      obj.validate((valid) => {
        if (valid) {
          ok = 1;
        } else {
          ok = 2;
        }
      });
    }
  } else {
    ok = 3;
  }
  return ok
};

/**
 *用JSON.parse()转译字符串的判断
 * @param str
 * @returns {*}
 */
export const strParse = (str) => {
  switch (str) {
    case undefined:
    case 'undefined':
      return undefined;
    case null:
    case  'null':
      return null;
    case '':
      return '';
    default:
      try {
        return str ? JSON.parse(str) : '';
      } catch (err) {
        return '';
      }
  }
};

/**
 * 获得时间间隔
 */
export const getTime =(stTime,edTime) =>{
  const startTime = new Date(stTime);
  const endTime = new Date(edTime);
  const oneDayTime = 8*60*60*1000;
  const dayEnd = 16*3600000 + 30*60000;
  let reduceTime = 0;//应减去的时间
  if (startTime.getHours()>=8) {//开始时间大于8点
    if (startTime.getHours()<12) {
      reduceTime += ((startTime.getHours()-8)*3600000 + startTime.getMinutes()*60000)
    }else if (startTime.getHours()===12&&startTime.getMinutes()<30) {//开始时间在12:00 - 12:30
      reduceTime += 4*3600000;
    } else {
      reduceTime += (4*3600000 + startTime.getHours()*3600000 + startTime.getMinutes()*60000 - 12*3600000 - 30*60000);
    }
  }
  if (endTime.getHours()*3600000+endTime.getMinutes()*60000 - dayEnd < 0){
    reduceTime +=  dayEnd - endTime.getHours()*3600000 - endTime.getMinutes()*60000;
    if (endTime.getHours() === 12 && endTime.getMinutes()<30) {//结束时间在12:00 - 12:30
      reduceTime -= (12*3600000 + 30*60000 - endTime.getHours()*3600000 - endTime.getMinutes()*60000);
    } else if (endTime.getHours() < 12) {
      reduceTime -= 30*60000;
    }
  }
  const allDay = (new Date(`${endTime.getFullYear()}-${endTime.getMonth()}-${endTime.getDate()} 24:00:00`) - new Date(`${startTime.getFullYear()}-${startTime.getMonth()}-${startTime.getDate()} 00:00:00`))/(24*3600000);//相差总天数
  console.log(allDay,222)
  return oneDayTime*allDay - reduceTime;
}


/**
 * 获得结束时间
 * zx
 */
export const getEndtime =(sTime,interval) =>{
  var tEnd;
  var t = sTime.toString();
  var T= new Date(t);//标准日期格式当前时间
  var Tnow = T.getTime();//当前时间时间戳
  var T0= T.setHours(0, 0, 0, 0);//当天0点的时间戳
  var T8= T.setHours(8, 0, 0, 0);//当天8点的时间戳
  var T12= T.setHours(12, 0, 0, 0);//当天12点的时间戳
  var T12_30= T.setHours(12, 30, 0, 0);//当天12点半的时间戳
  var T16_30= T.setHours(16, 30, 0, 0);//当天16点半的时间戳
  if(T8 <= Tnow && Tnow <= T12) {
    let left = interval*1000 - (T12-Tnow);//除去早上后剩余的时间
    if(left <= 0) {//间隔小于上午剩余时间
      tEnd = Tnow + 1000 * interval;
    } else {//间隔大于上午剩余时间
      if(left <= 1000*60*60*4) {//剩余时间小于四个小时
        tEnd = Tnow + 1000 * interval + 1000 * 60 * 30;//返回
      }else {//剩余时间大于四个小时
        let n = Math.floor(left/1000/60/60 / 4);//存在几个四小时
        let i = left/1000/60/60 % 4;//余数 小时
        if(n % 2 == 1) {//奇数
          let p = Math.floor(n/2) + 1;
          if (Tnow == T8) {
            var TT8 = T16_30 + 1000*60*60*24*(p-1);//到达那天的16点半
          } else if (Tnow == T12) {
            var TT8 = T16_30 + 1000*60*60*24*(p-1);//到达那天的16点30
          } else {
            var TT8 = T8 + 1000*60*60*24*p;//到达那天的8点
          }
          // let TT8 = T8 + 1000*60*60*24*p;//到达那天的八点
          tEnd = TT8 + 1000*60*60*i;
        } else {//偶数
          let p = n/2;
          // let TT12_30 = T12_30 + 1000*60*60*24*p;//到达那天的12点半
          if (Tnow == T8) {
            var TT12_30 = T12 + 1000*60*60*24*p;//到达那天的12点半
          } else if (Tnow == T12) {
            var TT12_30 = T12 + 1000*60*60*24*p;//到达那天的12点
          }else {
            var TT12_30 = T12_30 + 1000*60*60*24*p;//到达那天的12点
          }
          tEnd = TT12_30 + 1000*60*60*i;
        }
      }
    }
  } else if (T12_30 <= Tnow && Tnow <= T16_30) {
    let left = interval*1000 - (T16_30-Tnow);//除去下午后剩余的时间
    if(left <= 0) {//间隔时间小于下午剩余时间
      tEnd =Tnow + 1000 * interval;//返回
    }else {//间隔时间大于下午剩余时间
      let n = Math.floor(left/1000/60/60 / 4);//存在几个四小时
      let i = left/1000/60/60 % 4;//余数 小时
      if(n % 2 == 1) {//奇数
        let p = Math.floor(n/2) + 1;
        if(Tnow == T12_30) {
          var TT12_30 = T12 + 1000*60*60*24*p;//到达那天的12点
        } else if (Tnow == T16_30) {
          var TT12_30 = T12 + 1000*60*60*24*p;//到达那天的12点
        } else{
          var TT12_30 = T12_30 + 1000*60*60*24*p;//到达那天的12点半
        }

        tEnd =  TT12_30 + 1000*60*60*i;
      } else {//偶数
        let p = n/2 + 1;
        if(Tnow == T12_30) {
          var TT8 = T16_30 + 1000*60*60*24*(p-1);//到达那天的12点
        }  else if (Tnow == T16_30) {
          var TT8 = T16_30 + 1000*60*60*24*(p-1);//到达那天的12点
        } else {
          var TT8 = T8 + 1000*60*60*24*p;//到达那天的8点
        }

        tEnd =  TT8 + 1000*60*60*i;
      }
    }
  }else {
    console.log('不在规定时间内',sTime);
    tEnd = Tnow;
  }

  let res=new Date(tEnd);//时间戳转换为时间，得到时间
  return res
}


/**
 * 判断当前元素与上一个元素是否相同
 *
 */
export const getSpanArr =(data,val) =>{
  let spanArr = [];
  let pos = 0;
  for (var i = 0; i < data.length; i++) {
    if (i === 0) {
      spanArr.push(1);
      pos = 0
    } else {
      // 判断当前元素与上一个元素是否相同
      if (data[i][val] === data[i - 1][val]) {
        spanArr[pos] += 1;
        spanArr.push(0);
      } else {
        spanArr.push(1);
        pos = i;
      }
    }
  }
  return spanArr
}



/**
 * 获得结束时间
 */

export const getEndtimes =(startTime, durtion) =>{
  const start = new Date(startTime).getTime();/*起始毫秒数*/
  const secondDuration = durtion * 60 * 1000;/*时长的毫秒数*/
  const secondFour = 4 * 60 * 60 * 1000;/*4个小时的毫秒数*/
  const numFour = Math.floor(secondDuration/secondFour);/*有多少的（4个小时的毫秒数）*/
  const secondResidue = secondDuration%secondFour;/*取余数（4个小时的毫秒数） */
  let type;
  if (start >= getTimeSecond(start,1) && start <= getTimeSecond(start,2)) {/*上午*/
    type = 1;
  } else {/*下午*/
    type = 2;
  }
  if (numFour > 0) {/*大于4个小时*/
    const x1 = Math.floor(numFour/2);//取整数
    const x2 = numFour%2;//取余数
    let stTime;
    let a;
    if (type === 1) {/*上午*/
      if (x2 === 1) {
        a = new Date(start).add('d',x1).getTime();
        stTime = getTimeSecond(a,3) + start - getTimeSecond(start,1);
        return getAfternoon(stTime,secondResidue);
      } else {
        stTime = new Date(start).add('d',x1).getTime();
        return getMorning(stTime,secondResidue);
      }
    } else {/*下午*/
      if (x2 === 1) {
        a = new Date(start).add('d',x1).getTime();
        stTime = getTimeSecond(a,5) + start - getTimeSecond(start,3);
        return getMorning(stTime,secondResidue);
      } else {
        stTime = new Date(start).add('d',x1).getTime();
        return getAfternoon(stTime,secondResidue);
      }
    }
  } else {
    if (type === 1) {/*上午*/
      return getMorning(start,secondResidue);
    } else {/*下午*/
      return getAfternoon(start,secondResidue);
    }
  }
};
export const getMorning =(start, secondResidue) =>{
  let time;
  if ((start + secondResidue) > getTimeSecond(start,2)) {
    time = getTimeSecond(start,3) + (secondResidue - (getTimeSecond(start,2) - start))
    // console.log(checkTime(time),'上午大于4小时 numFour = 0')
    return checkTime(time)
  } else {
    time = start + secondResidue
    //console.log(checkTime(time),'上午不足4小时 numFour = 0')
    return checkTime(time)
  }
}
export const getAfternoon =(start, secondResidue) =>{
  let time;
  if ((start + secondResidue) > getTimeSecond(start,4)) {
    time = getTimeSecond(start,5) + (secondResidue - (getTimeSecond(start,4) - start))
    //console.log(checkTime(time),'下午大于4小时 numFour = 0')
    return checkTime(time)
  } else {
    time = start + secondResidue
    //console.log(checkTime(time),'下午不足4小时 numFour = 0')
    return checkTime(time)
  }
}
export const checkTime =(time) =>{
  const a = new Date(time).format('yyyy.MM.dd');
  if (new Date(time).getTime() === getTimeSecond(time,1)) {
    return new Date(getTimeSecond(new Date(a).add('d','-1').getTime(),4)).format('yyyy.MM.dd hh:mm:ss')
  } else if (new Date(time).getTime() === getTimeSecond(time,3)) {
    return new Date(getTimeSecond(time,2)).format('yyyy.MM.dd hh:mm:ss')
  } else {
    return new Date(time).format('yyyy.MM.dd hh:mm:ss')
  }
}
export const getTimeSecond =(time,type) =>{
  const temp = new Date(time).format('yyyy.MM.dd');
  const nextTemp = new Date(time).add('d',1).format('yyyy.MM.dd');
  switch (type) {
    case 1:
      return new Date(temp + ' 08:00:00').getTime();
    case 2:
      return new Date(temp + ' 12:00:00').getTime();
    case 3:
      return new Date(temp + ' 12:30:00').getTime();
    case 4:
      return new Date(temp + ' 16:30:00').getTime();
    case 5:
      return new Date(nextTemp + ' 08:00:00').getTime();
    case 6:
      return new Date(nextTemp + ' 12:00:00').getTime();
    case 7:
      return new Date(nextTemp + ' 12:30:00').getTime();
    case 8:
      return new Date(nextTemp + ' 16:30:00').getTime();
  }
}
