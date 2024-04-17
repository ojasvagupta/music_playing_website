let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));




let songs=[
    {songname:"Salaam-e-ishq",filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
    {songname:"dang dang",filepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
    {songname:"bang bang",filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
    {songname:"fcuk",filepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
    {songname:"love you",filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
    {songname:"if you love me",filepath:"songs/6.mp3",coverpath:"covers/6.jpg"},
    {songname:"ishq",filepath:"songs/7.mp3",coverpath:"covers/7.jpg"},
    {songname:"Salaa",filepath:"songs/8.mp3",coverpath:"covers/8.jpg"},
    {songname:"aam-ishq",filepath:"songs/9.mp3",coverpath:"covers/9.jpg"},
    {songname:"ish",filepath:"songs/10.mp3",coverpath:"covers/10.jpg"},
    
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songname;


})



masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;

})

const makeAllplays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-circle-pause');

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
    songIndex=0;}
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songindex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
    songIndex=0;}
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songindex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-circle-pause');
})