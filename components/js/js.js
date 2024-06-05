let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');

let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create an audio element
let track = document.createElement('audio');

//All songs list
let All_song = [
        {
          name: "Glamorous",
          path: "/songs/Fergie_feat_Ludacris_Glamorous.mp3",
          img: "./imagens/non.png",
          singer: "Fergie feat. Ludacris",
        },
        {
          name: "Send Me An Angel '89",
          path: "/songs/Real_Life_Send_Me_An_Angel_89.mp3",
          img: "./imagens/non.png",
          singer: "Real Life",
        },
        {
          name: "The Rhythm of the Night (Rapino Bros. 7\" Single)",
          path: "/songs/Corona_The_Rhythm_of_the_Night_Rapino_Bros_7_Single.mp3",
          img: "./imagens/non.png",
          singer: "Corona",
        },
        {
          name: "Work (Freemasons Remix)",
          path: "/songs/Kelly_Rowland_Work_Freemasons_Remix.mp3",
          img: "./imagens/non.png",
          singer: "Kelly Rowland",
        },
        {
          name: "Something Got Me Started (Hurley's House Mix)",
          path: "/songs/Simply_Red_Something_Got_Me_Started_Hurleys_House_Mix.mp3",
          img: "./imagens/non.png",
          singer: "Simply Red",
        },
        {
          name: "Wait",
          path: "/songs/Robert_Howard_Kym_Mazelle_Wait.mp3",
          img: "./imagens/non.png",
          singer: "Robert Howard & Kym Mazelle",
        },
        {
          name: "I Want It That Way",
          path: "/songs/Backstreet_Boys_I_Want_It_That_Way.mp3",
          img: "./imagens/non.png",
          singer: "Backstreet Boys",
        },
        {
          name: "Days Go By",
          path: "/songs/Dirty_Vegas_Days_Go_By.mp3",
          img: "./imagens/non.png",
          singer: "Dirty Vegas",
        },
        {
          name: "The Time Is Now",
          path: "/songs/Moloko_The_Time_Is_Now.mp3",
          img: "./imagens/non.png",
          singer: "Moloko",
        },
        {
          name: "1 Thing",
          path: "/songs/Amerie_1_Thing.mp3",
          img: "./imagens/non.png",
          singer: "Amerie",
        },
        {
          name: "Kids",
          path: "/songs/Robbie_Williams_Kylie_Minogue_Kids.mp3",
          img: "./imagens/non.png",
          singer: "Robbie Williams & Kylie Minogue",
        },
        {
          name: "Moves Like Jagger",
          path: "/songs/Maroon_5_feat_Christina_Aguilera_Moves_Like_Jagger.mp3",
          img: "./imagens/non.png",
          singer: "Maroon 5 feat. Christina Aguilera",
        },
        {
          name: "Anthem",
          path: "/songs/N-Joi_Anthem.mp3",
          img: "./imagens/non.png",
          singer: "N-Joi",
        },
        {
          name: "Everything She Wants",
          path: "/songs/Wham_Everything_She_Wants.mp3",
          img: "./imagens/non.png",
          singer: "Wham!",
        },
        {
          name: "Scandalous",
          path: "/songs/Mis-Teeq_Scandalous.mp3",
          img: "./imagens/non.png",
          singer: "Mis-Teeq",
        },
        {
          name: "Cooler Than Me (Single Mix)",
          path: "/songs/Mike_Posner_Cooler_Than_Me_Single_Mix.mp3",
          img: "./imagens/non.png",
          singer: "Mike Posner",
        },
        {
          name: "Applause",
          path: "/songs/Lady_Gaga_Applause.mp3",
          img: "./imagens/non.png",
          singer: "Lady Gaga",
        },
        {
          name: "Pure Shores",
          path: "/songs/All_Saints_Pure_Shores.mp3",
          img: "./imagens/non.png",
          singer: "All Saints",
        },
        {
          name: "Alright",
          path: "/songs/Jamiroquai_Alright.mp3",
          img: "./imagens/non.png",
          singer: "Jamiroquai",
        },
        {
          name: "Lady (Hear Me Tonight)",
          path: "/songs/Modjo_Lady_Hear_Me_Tonight.mp3",
          img: "./imagens/non.png",
          singer: "Modjo",
        },
        {
          name: "Tennis Court",
          path: "/songs/Lorde_Tennis_Court.mp3",
          img: "./imagens/non.png",
          singer: "Lorde",
        },
        {
          name: "Tell It to My Heart",
          path: "/songs/Taylor_Dayne_Tell_It_to_My_Heart.mp3",
          img: "./imagens/non.png",
          singer: "Taylor Dayne",
        },
        {
          name: "Let's Go All the Way",
          path: "/songs/Sly_Fox_Lets_Go_All_the_Way.mp3",
          img: "./imagens/non.png",
          singer: "Sly Fox",
        },
        {
          name: "With Every Heartbeat",
          path: "/songs/Robyn_feat_Kleerup_With_Every_Heartbeat.mp3",
          img: "./imagens/non.png",
          singer: "Robyn feat. Kleerup",
        },
        {
          name: "On Our Own",
          path: "/songs/Bobby_Brown_On_Our_Own.mp3",
          img: "./imagens/non.png",
          singer: "Bobby Brown",
        },
        {
          name: "New Sensation",
          path: "/songs/INXS_New_Sensation.mp3",
          img: "./imagens/non.png",
          singer: "INXS",
        },
        {
          name: "Promises, Promises",
          path: "/songs/Naked_Eyes_Promises_Promises.mp3",
          img: "./imagens/non.png",
          singer: "Naked Eyes",
        },
        {
          name: "Bad Girls",
          path: "/songs/M.I.A._Bad_Girls.mp3",
          img: "./imagens/non.png",
          singer: "M.I.A.",
        },
        {
          name: "Adult Education",
          path: "/songs/Hall_and_Oates_Adult_Education.mp3",
          img: "./imagens/non.png",
          singer: "Hall & Oates",
        },
        {
          name: "6 Underground",
          path: "/songs/Sneaker_Pimps_6_Underground.mp3",
          img: "./imagens/non.png",
          singer: "Sneaker Pimps",
        }
];

// All functions

// function load the track
function load_track(index_no) {
  clearInterval(timer);
  reset_slider();

  track.src = All_song[index_no].path;
  title.innerHTML = All_song[index_no].name;
  track_image.src = All_song[index_no].img;
  artist.innerHTML = All_song[index_no].singer;
  track.load();

  timer = setInterval(range_slider, 1000);
  total.innerHTML = All_song.length;
  present.innerHTML = index_no + 1;
}

load_track(index_no);

//mute sound function
function mute_sound() {
  track.volume = 0;
  volume.value = 0;
  volume_show.innerHTML = 0;
}

// checking.. the song is playing or not
function justplay() {
  if (Playing_song == false) {
    playsong();
  } else {
    pausesong();
  }
}

// reset song slider
function reset_slider() {
  slider.value = 0;
}

// play song
function playsong() {
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong() {
  track.pause();
  Playing_song = false;
  play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}

// next song
function next_song() {
  if (index_no < All_song.length - 1) {
    index_no += 1;
    load_track(index_no);
    playsong();
  } else {
    index_no = 0;
    load_track(index_no);
    playsong();
  }
}

// previous song
function previous_song() {
  if (index_no > 0) {
    index_no -= 1;
    load_track(index_no);
    playsong();
  } else {
    index_no = All_song.length;
    load_track(index_no);
    playsong();
  }
}

// change volume
function volume_change() {
  volume_show.innerHTML = recent_volume.value;
  track.volume = recent_volume.value / 100;
}

// change slider position
function change_duration() {
  slider_position = track.duration * (slider.value / 100);
  track.currentTime = slider_position;
}

// format the time in mm:ss
function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds % 60);
  if (sec < 10) {
    sec = '0' + sec;
  }
  return min + ':' + sec;
}

function range_slider() {
  let position = 0;

  // update slider position
  if (!isNaN(track.duration)) {
    position = track.currentTime * (100 / track.duration);
    slider.value = position;

    // update the displayed duration
    show_duration.innerHTML = formatTime(track.currentTime);
  }

  // function will run when the song is over
  if (track.ended) {
    play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    if (autoplay == 1) {
      index_no += 1;
      load_track(index_no);
      playsong();
    }
  }
}
