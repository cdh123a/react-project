/*引入axios  ajax包*/
import axios from 'axios';

/*这是一个get post请求共用的函数 ，
因此请求的方式  请求地址 请求参数 都需要传入
初始url默认为空串 参数默认为空对象 方式默认为get   */
export default  function ajax(url = '',data = {},type = 'GET') {
 if(type === 'GET'){
    //拼接url
   let spliceUrl = '';
   //没有参数就不需要
    if(data){
      //get请求的url地址包括参数  因此需要拼接起来
      // 将data对象的属性名和属性值都拼接 中间还要&
      // 将对象的属性名 遍历组成一个数组的方法 此时item就是data对象内每一个属性名
      Object.keys(data).forEach( item  => {
        spliceUrl += item + '=' + data[item] + '&';
      })
      //将最后一个 & 截取掉
      const finalUrl = spliceUrl.substring( 0 ,spliceUrl.length-2);
      //拼接成url
      url += url + '?' + finalUrl ;
    }
   //不管有没有参数 都要发请求
   //发送请求  返回的是promise对象
   return axios.get(url);

   }else{
   //axios发送post请求第一个参数就是url地址  第二个就是参数对象
   console.log(url,data);
   return axios.post(url,data);
  }
}