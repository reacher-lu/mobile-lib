(function(){
  var storage = window.localStorage;
  var times = storage.getItem('times') || 0;
  var firstPay = storage.getItem('firstPay') || 0;

  var perf = Date.now()-window.timing;
  var historyPerf = parseFloat(storage.getItem('perf')) || perf;
  var average = (perf+historyPerf)/2;


  document.write("<br>首次耗时：" + firstPay);
  document.write("<br>本次耗时：" + perf);
  document.write("<br>平均耗时：" + average);
  document.write("<br>访问次数：" + times);


  if(times==0)
  {
    storage.setItem('firstPay',perf);
  }
  if(times<30)
  {
    storage.setItem('times',++times);
    storage.setItem('perf',average);
    setTimeout(function(){
      window.location.reload();
    },30);
  }else{
    storage.clear();
  }

  document.querySelector('#clear').onclick=function(){
    storage.clear();
  }
})(window);





