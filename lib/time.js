(function(){
  var storage = window.localStorage;
  var times = storage.getItem('times') || 0;

  var perf = Date.now()-window.timing;
  var historyPerf = parseFloat(storage.getItem('perf')) || perf;
  var average = (perf+historyPerf)/2;


  document.write("本次耗时：" + perf);
  document.write("平均耗时：" + average);
  document.write("访问次数：" + times);

  if(times<10)
  {
    storage.setItem('times',++times);
    storage.setItem('perf',average);
    setTimeout(function(){
      window.location.reload();
    },300);
  }

  document.querySelector('#clear').onclick=function(){
    storage.clear();
  }
})(window);





