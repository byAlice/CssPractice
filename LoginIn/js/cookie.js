/**
 * Created by alice on 2016/7/24.
 */
function setCookie(name,value,iDay){
    var oDate=new Data();
    oDate.setDate(oDate.getDate()+iDay);

    document.cookie=name+'='+value+';expires='+oDate;
}

function getCookie(name){
    var arr=document.cookie.split('; ');
    for(var i=0;i<arr.length;i++){
        var arr2=arr[i].split('=');
        if(arr2[0]==name){
            return arr2[1];
        }
    }

    return '';
}

function removeCookie(name){
    setCookie(name,1,-1);
}






/*如何使用
*
* window.onload=function ()
 {
 var oForm=document.getElementById('form1');
 var oUser=document.getElementsByName('user')[0];

 oForm.onsubmit=function ()
 {
 setCookie('user', oUser.value, 14);
 };

 oUser.value=getCookie('user');
 };
*
*
*
*
*
* */

























