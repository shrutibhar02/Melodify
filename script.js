/*console.log("Welcome to Muse");
let songIndex=0;
let audioElement= new Audio('song/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));*/
console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs=[
    {songName: "Calling - Swae Lee and Metro", filePath: "songs/1.mp3", coverPath: "covers/1.jpeg" },
    {songName: "Die for you - The Weeknd", filePath: "songs/2.mp3", coverPath: "covers/2.jpeg" },
    {songName: "Creep - Radiohead",  filePath: "songs/3.mp3", coverPath: "covers/3.jpeg" },
    {songName: "Like You Do - Joji",  filePath: "songs/4.mp3", coverPath: "covers/4.jpeg" },
    {songName: "Miss Misery - Elliot Smith",  filePath: "songs/5.mp3", coverPath: "covers/5.jpeg" },
    {songName: "Fallen Star- The Neighbourhood",  filePath: "songs/6.mp3", coverPath: "covers/6.jpeg" },
    {songName: "I was all over her - Salvia Palth",  filePath: "songs/7.mp3", coverPath: "covers/7.jpeg" },

]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
       
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
       
    }
});
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

/*Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})*/
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
      const index = parseInt(e.target.id);
      const isCurrentlyPlaying = index === songIndex;
  
      if (isCurrentlyPlaying && !audioElement.paused) {
        // If the clicked song is the currently playing song and it's not paused, then pause it
        audioElement.pause();
        e.target.classList.remove("fa-pause-circle");
        e.target.classList.add("fa-play-circle");
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
      } else {
        // Otherwise, play the selected song
        makeAllPlays();
        songIndex = index;
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
  
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
      }
    });
  });

  document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=6){
        songIndex=0;
    }
    else{
        songIndex=songIndex+1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
  })

  document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex=songIndex-1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
  })


