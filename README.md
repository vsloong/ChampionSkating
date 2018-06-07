# 轮滑教学微信小程序
正在开发当中，喜欢轮滑运动的程序yuan们不要错过，快来激励我~~

## 后台接口规范
### 1、register（注册、认证）
##### 请求参数及说明
  <table>
      <tr>
          <th>参数名</th>
          <th>含义</th>
          <th>参数值示例</th>
      </tr>
      <tr>
          <td>code</td>
          <td>使用wx.login()获取的值，只需其中的code值即可</td>
          <td>001KLOd3\*\*\*\*\*M09nCb32fu0e32\*\*\*\*\*</td>
      </tr>
      <tr>
          <td>userData</td>
          <td>使用wx.getUserInfo获取的值，所有返回值都要，为了鉴定信息是否有效</td>
          <td>{"errMsg":"getUserInfo:ok","rawData":"{\"nickName\":\"该用户已注销\",\"gender\":1,\"language\":\"zh_CN\",\"city\":\"\",\"province\":\"\",\"country\":\"Bermuda\",\"avatarUrl\":\"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJYXISQkFubsvjc8MHibJchJEYy7zDtfsrIk2pByW6uF4IvZXGDEAVjmGzEDXPgbP53cKAa2QWbtMw/132\"}","userInfo":{"nickName":"该用户已注销","gender":1,"language":"zh_CN","city":"","province":"","country":"Bermuda","avatarUrl":"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJYXISQkFubsvjc8MHibJchJEYy7zDtfsrIk2pByW6uF4IvZXGDEAVjmGzEDXPgbP53cKAa2QWbtMw/132"},"signature":"328c5068f232\*\*\*\*\*385a91d02b43d1da5a\*\*\*\*\*","encryptedData":"mnd3PeQsV3LP4P5QoF\*\*\*\*\*qOVbzrudGvKVd1C+Z9waAaIRNofp87dxn09xVhWl\*\*\*\*\*Z2rk4mw7sBBmKPKUGl1Bv4fu47KAnjLDaVj5Q9HredVsBdIbACUYQ993I1Kkt20S0LAvw9tR/r5vajUWaY1YCuek+z3NDbQ1VSPxJ/E7H3KfLlCO\*\*\*\*\*FIVEdHnvjriYFnXSoculkNLHK1IPS4qDHxUsxhRBJVOUKNOU9qhMIKE823xPPkm3uqDGJpcGzO2q+XEY9LXRMlm\*\*\*\*\*ItEMPsA5MDOlqxm+PMDRLPCZVCzdU45re/QXzpcdvynMrKgOVDhL5RUWj4cIHoZU2j/vMAKkgDjwmJpf0OocDDadZcucjIMLq2Fq0M1/P+tZ6Q6afS6xl7VFuIdBvI5d5lHsEcmZZC3GhHyydH2sjDRqVJNANBRgC4XPztOhnNZV1pNl/dM58JjpusHikpjvfg/meV53vbGSLV5Vv6hPuY=","iv":"tM9YjfY\*\*\*\*\*vWOLI\*\*\*\*\*=="}</td>
      </tr>
  </table>
##### 返回参数及说明
  <table>
    <tr>
        <th>参数名</th>
        <th>含义</th>
        <th>参数值示例</th>
    </tr>
    <tr>
        <td>code</td>
        <td>标识请求执行成功与否等</td>
        <td>200</td>
    </tr>
    <tr>
        <td>msg</td>
        <td>标识请求执行成功与否等的提示信息</td>
        <td>请求成功，可以啊！</td>
    </tr>
  <table>
## 程序示例图
![image](./res/pictures/home.jpg)  ![image](./res/pictures/grade.jpg)
