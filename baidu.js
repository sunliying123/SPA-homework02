//验证用户名
function checkUser(){
    //获取用户名的值
    var user=document.getElementById('user').value;
    //创建校验规则
    var reg1=/^(?!\d+$)[a-zA-Z0-9-_]+$/;
    //获取提示内容
    var sp1=document.getElementById('sp1');
    //校验
    if(reg1.test(user)){
        return true;
    }else{
        sp1.innerHTML='用户名仅支持中英文、数字和下划线，不能是纯数字';
        sp1.style.color='red';
        return false;
    }
}

//验证手机号
function checkPhone(){
    //获取手机号的输入值
    var phone=document.getElementById('phone').value;
    //创建正则表达式
    var reg2=/^1[0-9]{10}$/;
    //获取提示内容
    var sp2=document.getElementById('sp2');
    //校验
    if(reg2.test(phone)){
        return true;
    }else{
        sp2.innerHTML='手机号码格式不正确';
        sp2.style.color='red';
        return false;
    }
}

//验证密码
function checkPwd(){
    //获取密码的输入值
    var pwd=document.getElementById('pwd').value;
    //获取提示内容
    var sp3=document.getElementById('sp3');
    //校验
    if(pwd=="" || pwd==null){
        sp3.innerHTML='密码不能为空';
        sp3.style.color='red';
        return false;
    }else{
        return true;
    }
}

//验证码点击后倒计时效果
var clock='';
var num=10;
var btn;
var sp4=document.getElementById('sp4');
function getCode(thisBtn){
    btn=thisBtn;
    btn.disabled=true;//按钮设置为不可点击效果
    btn.value=num+'秒后可重新获取';
    clock=setInterval(doLoop,1000);
}
function doLoop(){
    num--;
    if(num>0){
        btn.value=num+'秒后可重新获取';
    }else{
        sp4.innerHTML='请求超时，请稍后再试';
        sp4.style.color='red';
        clearInterval(clock);//清除JS定时器
        btn.disabled=false;
        btn.value='获取验证码';
        num=10;//重置时间
    }
}

//是否同意协议
function checkAgree(){
    var sign=document.getElementById('sign');
    var agree=document.getElementById('agree');
    if(agree==""){
        sign.style.backgroundColor='rgb(0, 153, 255)';
        sign.style.opacity=0.5;
    }else{
        sign.style.backgroundColor='blue';
        sign.style.opacity=1;
    }
}