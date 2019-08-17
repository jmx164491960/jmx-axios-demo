// import axios from 'jmx-axios';
import axios from 'axios';
import './axios-setting'
import './mock-setting';

const serive = axios.create({
    timeout: 1000
})
const sendHandler = function() {
    axios.get('https://crmdata.banggood.cn/api/user/accessLog?time=1566027689233', {
        timeout: 100
    })
    .then((res) => {
      alert('做请求成功后做的事');
    }).catch(() => {
      alert('做请求失败后做的事');
    })
}

const btn = document.createElement('button');
btn.innerHTML = '发送请求';
btn.onclick = () => {
    sendHandler();
}
document.querySelector('body').append(btn);
