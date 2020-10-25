let fillbar = document.querySelector(".fill");
let audios = ["audio1.mp3", "audio2.mp3","audio3.mp3"];
let covers = ["cover1.png","cover2.png","cover3.png"];
let name = ["WATERMELON SUGAR","IN YOUR EYES","NEW LIGHT"];
let artist = ["Fine Line - Harry Styles","After Hours - The Weeknd","The Search for Everything - John Mayer"];
let currentTime = document.querySelector(".time");
let start = 0;
//Create an object of audio

let audio = new Audio();
let currentSong =0;

//ehenever the window load shong should play automatcially



//playsong
function playSong(){
    audio.src = audios[currentSong];
    audio.play();
}

function togglePlayPause(){
    if(start == 0){
        playSong();
        let playBtn = document.querySelector(".play-pause");
        playBtn.innerHTML = '<i class ="fa fa-pause"></i>';
        playBtn.style.padding.left = "33px";
        start++;
    }else{
    if(audio.paused){
        audio.play();
        let playBtn = document.querySelector(".play-pause");
        playBtn.innerHTML = '<i class ="fa fa-pause"></i>';
        playBtn.style.padding.left = "30px";
    }else{
        
            audio.pause();
            let playBtn = document.querySelector(".play-pause");
            playBtn.innerHTML = '<i class ="fa fa-play"></i>';
            playBtn.style.padding.left = "33px";
        
    }}
}

//dynamic fillbar

audio.addEventListener("timeupdate", function(){
    let position = audio.currentTime / audio.duration;
    fillbar.style.width = position *100 +"%";
    convertTime(Math.round(audio.currentTime));

    if(audio.ended){
        nextAudio();
    }
});

function convertTime(seconds){
    let min = Math.floor(seconds/60);
    let sec = seconds%60;
    min = min<10 ? "0" + min:min;
    sec = sec<10 ? "0" + sec:sec;
    currentTime.textContent = min +":"+sec;
    totalTime(Math.round(audio.duration));
}

function totalTime(seconds){
    let min = Math.floor(seconds/60);
    let sec = seconds%60;

    min = min<10 ? "0" + min:min;
    sec = sec<10 ? "0" + sec:sec;
    currentTime.textContent += " & " +min +":"+sec;

}

//next and previous buttons

function nextAudio(){
    start=1;
    currentSong=(currentSong+1)%3;
    playSong();
    playBtn = document.querySelector(".play-pause");
    playBtn.innerHTML = '<i class ="fa fa-pause"></i>';
    playBtn.style.padding.left = "30px";

    $(".img img").attr("src", covers[currentSong]);

    let artistchange = document.querySelector(".title p");
    artistchange.textContent = artist[currentSong];

    let namechange = document.querySelector(".title h1");
    namechange.textContent = name[currentSong];


    
}

function prevAudio(){
    start=1;
    currentSong--;
    if(currentSong<0){
        currentSong=2;
    }
    playSong();
    playBtn = document.querySelector(".play-pause");
    playBtn.innerHTML = '<i class ="fa fa-pause"></i>';
    playBtn.style.padding.left = "30px";

    $(".img img").attr("src" , covers[currentSong]);

}

//volume up,down


function decreaseVolume(){
    audio.volume-=0.25;
}

function increaseVolume(){
    audio.volume+=0.25;
}

//mute button

let volumeUp = document.querySelector(".volume-up");
volumeUp.addEventListener("click",function(){
    if(audio.volume > 0){
        audio.volume = 0;
        document.querySelector(".volume-up i").className = "fa fa-volume-mute";
    }else{
        audio.volume =1;
        document.querySelector(".volume-up i").className ="fa fa-volume-up";
    }
});
