const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
  'POST /api/user/list': (req,res) => {
    // console.log('---ssssss--->', req)
    const list = [
      {
        "name": "[ps大师班,告别小白]",
        "imgurl": "https://s1.ax1x.com/2023/03/27/ppsMeeg.jpg",
        "speaker": "千小喵",
        "all":true
      },
      {
        "name": "[手绘设计30天速成班]",
        "imgurl": "https://s1.ax1x.com/2023/03/27/ppstBp4.jpg",
        "speaker": "千小喵",
        "tab": "pingmian",
        "all":true
      },
      {
        "name": "[平面设计30天速成班]",
        "imgurl": "https://s1.ax1x.com/2023/03/27/ppstakT.jpg",
        "speaker": "千小喵",
        "tab": "taobao",
        "all":true
      },
      {
        "name": "[PS初级入门到精通]",
        "imgurl": "https://s1.ax1x.com/2023/03/27/ppstdtU.jpg",
        "speaker": "千小喵",
        "tab": "ui",
        "all":true
      },
      {
        "name": "[1天练就Sketch高手]",
        "imgurl": "https://s1.ax1x.com/2023/03/27/ppstwhF.jpg",
        "speaker": "千小喵",
        "tab": "video",
        "all":true
      },
      {
        "name": "[AE初级入门到精通]",
        "imgurl": "https://s1.ax1x.com/2023/03/27/ppstBp4.jpg",
        "speaker": "zhuangxiu",
        "tab": "",
        "all":true
      },
    ]
    const filteredList = [];
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      if (item.tab) {
        filteredList.push(item);
      }
      if (item.all) {
        filteredList.push(item);
      }
    }
    console.log('----xxxx-->', filteredList)
    const data = filteredList.length > 0 ? filteredList : [];
    console.log('------data------>', data);
    return res.status(200).json(data);
  },
}


module.exports = proxy, noProxy, delay;