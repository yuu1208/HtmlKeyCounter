myButton = 0;            // [Start]/[Stop]のフラグ
  function myCheck(){
    if (myButton==0){      // Startボタンを押した
      myStart=new Date();  // スタート時間を退避
      myButton = 1;
      document.myForm.myFormButton.value = "停止";
      myInterval=setInterval("myDisp()",1);
    }else{                 // Stopボタンを押した
      myDisp();
      myButton = 0;
      document.myForm.myFormButton.value = "リセットして開始";
      clearInterval( myInterval );
    }
  }

  function myDisp(){
      var myStop=new Date();  // 経過時間を退避
      var myTime = myStop.getTime() - myStart.getTime(); // 通算ミリ秒計算
      var myH = Math.floor(myTime/(60*60*1000));         // '時間'取得
      var myTime = myTime-(myH*60*60*1000);
      var myM = Math.floor(myTime/(60*1000));            // '分'取得
      var myTime = myTime-(myM*60*1000);
      var myS = Math.floor(myTime/1000);                 // '秒'取得
      var myMS = myTime%1000;                            // 'ミリ秒'取得

      //var myMMS = performance.now(); マイクロ秒取得するならこの行と52行の//myMMSのコメントアウト外して

      var myMS_Z = zeroPadding(myMS, 3);//譜面バグ対策でミリ秒を0埋め(3桁)
      

      var msg = myM+","+myS+"."+myMS_Z; //+myMMS;
      
      document.getElementById("data_output").innerHTML = msg;
  }
  function zeroPadding(num,length){
    return ('000' + num).slice(-length);
  }

  document.onkeydown = get_data;

  function get_data() {
    data = document.getElementById("data_output").innerHTML;
    var result1 = data;
      
      if (event.keyCode == 8 ) {
          console.clear();
      }

    if (event.keyCode == 81) {      console.log ("," + result1 + "," + "81,");    }    else if (event.keyCode == 82) {      console.log ("," + result1 + "," + "82,");    }    else if (event.keyCode == 85) {      console.log ("," + result1 + "," + "85,");    }    else if (event.keyCode == 80) {      console.log ("," + result1 + "," + "80,");    }  }
  // -->
      
      
    