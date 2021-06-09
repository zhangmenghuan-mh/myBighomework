    var degree = 0;
    var player = document.getElementById("player");
    var picture = document.getElementById("picture");
    var mymusic = document.getElementById("mymusic");
    var dot = document.getElementById("dot");
    var innerBox = document.getElementById("innerBox");
    var showTime = document.getElementById("showTime");
    var mutedBtn = document.getElementById("mutedBtn");
    var subBtn = document.getElementById("subBtn");
    var talkPot = document.getElementById("talkPot");
    var talk1 = document.getElementById("talk1");
    var now = new Date();
    var nowTime = now.toLocaleString();
    // var historys1 = document.getElementById("historys1");
    var valueLength = document.getElementById("valueLength");
    var historyTalk = document.getElementById("historyTalk");
    var imgURl = document.getElementById("imgURl");

    // var textContent = talkPot.value; 为什么这个是空的

    //存储本地信息
    function saveText(textContent,nowTime){
        var text = localStorage['text'];
		if(text == ""||text == null||text == undefined){
			localStorage['text'] = '[]';
		}
		text = JSON.parse(localStorage['text']);
		var textObj = {
			textContent:textContent,
            nowTime:nowTime
		};
		text.push(textObj);
		localStorage["text"] = JSON.stringify(text);
    }
    //把存储的本地信息显示到页面上
    function showText(){
        historyTalk.innerHTML = "";
        var textList = JSON.parse(localStorage['text']);
        //做出一个默认的框框
        var talkNode = document.createElement("div");
        var imgNode = document.createElement("img");
        imgNode.src = "./images/8.jpg";
        imgNode.style.width = "30px";
        imgNode.style.marginTop = "20px";
        talkNode.appendChild(imgNode);
        var textNode = document.createElement("div");
        textNode.innerHTML = "真好听呀！";
        textNode.className = "textNodeStyle";
        talkNode.appendChild(textNode);
        var timeNode = document.createElement("div");
        timeNode.innerHTML = "2021/6/8下午6:38:40";
        timeNode.className = "timeNodeStyle";
        talkNode.appendChild(timeNode);
        var deleteNode = document.createElement("div");
        deleteNode.innerHTML = "删除";
        deleteNode.className = "delete";
        talkNode.appendChild(deleteNode);
        var responseNode = document.createElement("div");
        responseNode.innerHTML = "回复";
        responseNode.className = "response";
        talkNode.appendChild(responseNode);
        var shareNode = document.createElement("div");
        shareNode.innerHTML = "分享";
        shareNode.className = "share";
        talkNode.appendChild(shareNode);
        historyTalk.appendChild(talkNode);
        for(var i = 0;i < textList.length;i++){
            var talkNode = document.createElement("div");
            var imgNode = document.createElement("img");
            imgNode.src = imgURl.src;
            imgNode.style.width = "30px";
            imgNode.style.marginTop = "20px";
            talkNode.appendChild(imgNode);
            var textNode = document.createElement("div");
            textNode.innerHTML = textList[i]['textContent'];
            textNode.className = "textNodeStyle";
            talkNode.appendChild(textNode);
            var timeNode = document.createElement("div");
            timeNode.innerHTML = textList[i]['nowTime'];
            timeNode.className = "timeNodeStyle";
            talkNode.appendChild(timeNode);
            var deleteNode = document.createElement("div");
            deleteNode.innerHTML = "删除";
            deleteNode.className = "delete";
            talkNode.appendChild(deleteNode);
            var responseNode = document.createElement("div");
            responseNode.innerHTML = "回复";
            responseNode.className = "response";
            talkNode.appendChild(responseNode);
            var shareNode = document.createElement("div");
            shareNode.innerHTML = "分享";
            shareNode.className = "share";
            talkNode.appendChild(shareNode);
            var tempNode = historyTalk.firstChild;
            if(tempNode){
                historyTalk.insertBefore(talkNode,tempNode);
            }else{
                historyTalk.appendChild(talkNode);
            }
        }
    }

    // 图片360度无限旋转
    setInterval(function(){
        picture.style.transform = "rotate(" + degree +"deg)";
        degree = degree + 1;
    },20);

    //音乐的进度条显示
    function processMusic() {
        var timeLong;
        var timer = setInterval(function () {
            timeLong = Math.floor(mymusic.currentTime/mymusic.duration * 300);
            innerBox.style.width = timeLong + "px";
            dot.style.left = timeLong + "px";
        },100);
    }

    //时间显示
    function musicShowTime(){
        setInterval(function(){
            if(mymusic.currentTime < 10){
                showTime.innerHTML = "00:0" + parseInt(mymusic.currentTime);
            }else if(mymusic.currentTime < 60){
                showTime.innerHTML = "00:" + parseInt(mymusic.currentTime);
            }else if(mymusic.currentTime < 600){
                showTime.innerHTML = "0" + parseInt(mymusic.currentTime/60) + ":" + parseInt(mymusic.currentTime%60);
            }else{
                showTime.innerHTML = parseInt(mymusic.currentTime/60) + ":" + parseInt(mymusic.currentTime%60);
            }
        },1000)
    }
    // 静音设置
    mutedBtn.onclick = function(){
        if(mymusic.muted == true){
            mymusic.muted = false;
        }else{
            mymusic.muted = true;
        }
    }

    //音乐播放与暂停的函方法
    function beginAndEndMusic(){
        if(mymusic.paused){
            mymusic.play();
            player.style.backgroundPositionX = "-207px";
            player.style.backgroundPositionY = "-48px";
            processMusic();
            musicShowTime();
        }else{
            mymusic.pause();
            player.style.backgroundPositionX = "-160px";
            player.style.backgroundPositionY = "0px";
        }
    }
    //做出一个默认的框框
    var talkNode = document.createElement("div");
    var imgNode = document.createElement("img");
    imgNode.src = "./images/8.jpg";
    imgNode.style.width = "30px";
    imgNode.style.marginTop = "20px";
    talkNode.appendChild(imgNode);
    var textNode = document.createElement("div");
    textNode.innerHTML = "真好听呀！";
    textNode.className = "textNodeStyle";
    talkNode.appendChild(textNode);
    var timeNode = document.createElement("div");
    timeNode.innerHTML = "2021/6/8下午6:38:40";
    timeNode.className = "timeNodeStyle";
    talkNode.appendChild(timeNode);
    var deleteNode = document.createElement("div");
    deleteNode.innerHTML = "删除";
    deleteNode.className = "delete";
    talkNode.appendChild(deleteNode);
    var responseNode = document.createElement("div");
    responseNode.innerHTML = "回复";
    responseNode.className = "response";
    talkNode.appendChild(responseNode);
    var shareNode = document.createElement("div");
    shareNode.innerHTML = "分享";
    shareNode.className = "share";
    talkNode.appendChild(shareNode);
    historyTalk.appendChild(talkNode);
    
    
    talkPot.onblur = function(){
        valueLength.innerHTML = "已输入" + talkPot.value.length + "字";
    }

    player.onclick = function(){
        beginAndEndMusic();
    };
    subBtn.onclick = function(){
        saveText(talkPot.value,nowTime);
        showText();
    }