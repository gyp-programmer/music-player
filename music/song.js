/*
 * 歌词滚动
 *
 * @Author: gaoyongpeng<gaoyongpeng@tuzhanai.com>
 * @Date: 2024-03-05 14:53:38
 *
 * Copyright © 2014-2024 Rabbitpre.com. All Rights Reserved.
 */
const lrc = `[00:00.000] 难念的经
[00:02.000]作曲 : 周华健
[00:31.475]
[00:31.476]笑你我枉花光心计
[00:34.102]爱竞逐镜花那美丽
[00:36.702]怕幸运会转眼远逝
[00:39.292]为贪嗔喜恶怒着迷
[00:41.882]责你我太贪功恋势
[00:44.511]怪大地众生太美丽
[00:47.141]悔旧日太执信约誓
[00:49.754]为悲欢哀怨妒着迷
[00:52.383]啊 哈
[00:55.012]舍不得 璀璨俗世
[00:57.604]啊 哈
[01:00.242]躲不开 痴恋的欣慰
[01:02.819]啊 哈
[01:05.451]找不到 色相代替
[01:08.019]啊 哈
[01:10.621]参一生 参不透 这条难题
[01:13.044]吞风吻雨 葬落日
[01:14.527]未曾彷徨
[01:15.622]欺山赶海 践雪径
[01:17.144]也未绝望
[01:18.176]拈花把酒 偏折煞
[01:19.720]世人情狂
[01:20.802]凭这两眼 与百臂
[01:22.345]或千手 不能防
[01:23.654]天阔阔 雪漫漫
[01:24.954]共谁同航
[01:26.030]这沙滚滚 水皱皱
[01:27.543]笑着浪荡
[01:28.668]贪欢一饷
[01:29.482]偏教那女儿 情长埋葬
[01:33.927]吞风吻雨 葬落日
[01:35.384]未曾彷徨
[01:36.533]欺山赶海 践雪径
[01:38.037]也未绝望
[01:39.099]拈花把酒 偏折煞
[01:40.601]世人情狂
[01:41.743]凭这两眼 与百臂
[01:43.216]或千手 不能防
[01:44.548]天阔阔 雪漫漫
[01:45.833]共谁同航
[01:46.990]这沙滚滚 水皱皱
[01:48.440]笑着浪荡
[01:49.541]贪欢一饷
[01:50.399]偏教那女儿 情长埋葬
[01:54.428]
[02:15.934]笑你我枉花光心计
[02:18.559]爱竞逐镜花那美丽
[02:21.128]怕幸运会转眼远逝
[02:23.770]为贪嗔喜恶怒着迷
[02:26.368]责你我太贪功恋势
[02:28.994]怪大地众生太美丽
[02:31.524]悔旧日太执信约誓
[02:34.176]为悲欢哀怨妒着迷
[02:36.798]啊 哈
[02:39.391]舍不得 璀璨俗世
[02:42.013]啊 哈
[02:44.626]躲不开 痴恋的欣慰
[02:47.207]啊 哈
[02:49.844]找不到 色相代替
[02:52.451]啊 哈
[02:55.072]参一生 参不透 这条难题
[02:57.430]吞风吻雨 葬落日
[02:58.976]未曾彷徨
[03:00.071]欺山赶海 践雪径
[03:01.574]也未绝望
[03:02.650]拈花把酒 偏折煞
[03:04.175]世人情狂
[03:05.241]凭这两眼 与百臂
[03:06.760]或千手 不能防
[03:08.119]天阔阔 雪漫漫
[03:09.400]共谁同航
[03:10.474]这沙滚滚 水皱皱
[03:11.970]笑着浪荡
[03:13.078]贪欢一饷
[03:13.959]偏教那女儿 情长埋葬 呜
[03:18.298]吞风吻雨 葬落日
[03:19.880]未曾彷徨
[03:20.929]欺山赶海 践雪径
[03:22.462]也未绝望
[03:23.498]拈花把酒 偏折煞
[03:25.043]世人情狂
[03:26.100]凭这两眼 与百臂
[03:27.638]或千手 不能防
[03:28.977]天阔阔 雪漫漫
[03:30.286]共谁同航
[03:31.365]这沙滚滚 水皱皱
[03:32.879]笑着浪荡
[03:33.926]贪欢一饷
[03:34.824]偏教那女儿 情长埋葬
[03:39.151]吞风吻雨 葬落日
[03:40.733]未曾彷徨
[03:41.796]欺山赶海 践雪径
[03:43.291]也未绝望
[03:44.353]拈花把酒 偏折煞
[03:45.887]世人情狂
[03:46.953]凭这两眼 与百臂
[03:48.511]或千手 不能防
[03:49.842]天阔阔 雪漫漫
[03:51.154]共谁同航
[03:52.234]这沙滚滚 水皱皱
[03:53.775]笑着浪荡
[03:54.781]贪欢一饷
[03:55.714]偏教那女儿 情长埋葬
[04:00.056]吞风吻雨 葬落日
[04:01.577]未曾彷徨
[04:02.649]欺山赶海 践雪径
[04:04.170]也未绝望
[04:05.226]拈花把酒 偏折煞
[04:06.788]世人情狂
[04:07.854]凭这两眼 与百臂
[04:09.402]或千手 不能防
[04:10.721]天阔阔 雪漫漫
[04:12.047]共谁同航
[04:13.143]这沙滚滚 水皱皱
[04:14.581]笑着浪荡
[04:15.654]贪欢一饷
[04:16.588]偏教那女儿 情长埋葬`;

const parseLrc = (lrc) => {
  let result = [];
  /** 单条歌词 */
  const singleRc = lrc.split("\n");
  singleRc.forEach((item) => {
    const time = item.match(/\[(\d{2}):(\d{2})\.(\d{3})\]/);
    const text = item.replace(/\[(\d{2}):(\d{2})\.(\d{3})\]/, "");

    result.push({
      time: time,
      text,
    });
  });

  return result;
};

const ul = document.getElementsByClassName("containerul")[0];
const audio = document.getElementById("myAudio");
const musicUrl = "https://music-player-ivory-six.vercel.app";
audio.crossOrigin = 'anonymous';
audio.setAttribute('src', musicUrl + '/static/assets/test.mp3')
const initData = () => {
  const data = parseLrc(lrc);

  /** 文档片段形式 如果操作dom元素量大时，可以使用 */
  // const fragment = document.createDocumentFragment();
  // data.forEach((item) => {
  //   const li = document.createElement("li");
  //   li.innerText = item.text;
  //   fragment.appendChild(li);
  // });
  // ul.appendChild(fragment);
  /** 获取元素 */
  data.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item.text;
    ul.appendChild(li);
  });
};

const time = (item) => {
    return (
      parseInt(item.time[1]) * 60 + +(item.time[2] + "." + item.time[3])
    );
  };

/** 处理音频播放 */
const handleAudio = () => {
  
  /** 存放上一个激活的歌词索引 */
  let lastActiveIndex = 0;
  // 播放时间更新的事件
  audio.addEventListener("timeupdate", () => {
    const currentTime = audio.currentTime;
    const data = parseLrc(lrc);
    /** 计算当前歌词索引 */
    let index = data.findIndex((_, idx) => {
      return time(data[idx]) > currentTime
    }) - 1;
    /** 中途直接拖到尾部，需要把激活索引 手动更新到最后一条 */
    if (index < 0) {
      index = data.length - 1;
    }
    /** 计算单条歌词持续时间，如果是最后一条歌词，持续时间默认为3s */
    const duration = index === data.length - 1 ? 3 : time(data[index + 1]) - time(data[index]);

    if (lastActiveIndex !== index) {
      ul.children[lastActiveIndex].className = "";
    }

    /** 当满足第七句已上歌词，滚动 */
    if (index > 6) {
      ul.style.transform = `translateY(${-(index - 6) * 30}px)`;
    } else {
      ul.style.transform = `translateY(0px)`;
    }
    lastActiveIndex = index;
    const li = ul.children[index];
    li.className = "active";
    li.setAttribute('currentDuration', duration + 's');
  });

  /** 播放完毕，重置位置 */
  // audio.addEventListener('ended', () => {
  //   ul.style.transform = `translateY(0px)`;
  // })

  audio.addEventListener('play', () => {
    loadWave();
  });
};

initData();
handleAudio();

/** todo: 实现音频播放的声音高低捕捉 */
// http://ourjs.com/detail/54d48406232227083e000029

const loadWave = () => {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var audioContext = new (window.AudioContext || window.webkitAudioContext)();
  var analyser = audioContext.createAnalyser();
  var audioSrc = audioContext.createMediaElementSource(audio);
  audioSrc.connect(analyser);
  audioSrc.connect(audioContext.destination);

  var frequencyData = new Uint8Array(analyser.frequencyBinCount);

  function renderFrame() {
    requestAnimationFrame(renderFrame);
    analyser.getByteFrequencyData(frequencyData);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < frequencyData.length; i++) {
      var x = i;
      var y = canvas.height - frequencyData[i];
      ctx.fillStyle = 'rgb(' + frequencyData[i] + ', 255, ' + frequencyData[i] + ')';
      ctx.fillRect(x, y, 1, y); // 绘制的高度使用canvas的height也可以 不同的效果
    }
  }
  renderFrame();
}
