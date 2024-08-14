const songListElement = document.getElementById('songList');
const songTitleElement = document.getElementById('songTitle');
const artistNameElement = document.getElementById('artistName');
const timeDisplayElement = document.getElementById('timeDisplay');

let currentSongIndex = 0;
let isPlaying = false;
let audio = new Audio();

const songs = [
    {
        file: 'music/1.mp3',
        title: 'Tujhe Na Dheku to Chain',
        artist: 'Pawan Singh',
        duration: '3:36'
    },
    {
        file: 'music/2.mp3',
        title: 'Give It All Away (Janne Janne)',
        artist: 'Arjun',
        duration: '2:56'
    },
    {
        file: 'music/3.mp3',
        title: 'Khoobsurat',
        artist: 'Vishal Mishra',
        duration: '4:04'
    },
    {
        file: 'music/4.mp3',
        title: 'Aaj Ki Raat (Tamannaah)',
        artist: 'Madhubanti Bagchi, Divya Kumar',
        duration: '3:48'
    },
    {
        file: 'music/5.mp3',
        title: ' Ve Ranjheya',
        artist: 'Shashi',
        duration: '4:12'
    },
    {
        file: 'music/6.mp3',
        title: 'Aayi Nai',
        artist: 'Pawan Singh, Simran Choudhary, Divya Kumar',
        duration: '2:58'
    },
    {
        file: 'music/7.mp3',
        title: 'Tauba Tauba',
        artist: 'Karan Aujla,',
        duration: '3:27'
    },
    {
        file: 'music/8.mp3',
        title: 'O Sajni Re ',
        artist: '	Arijit Singh',
        duration: '2:50'
    },
    {
        file: 'music/9.mp3',
        title: 'Mujhe Pyar Hua',
        artist:'Kaifi Khalil',
        duration: '2:54'
    },
    {
        file: 'music/10.mp3',
        title: 'Baller X Tere',
        artist: 'Itssidarth',
        duration: '3:54'
    },
    {
        file: '',
        title: '',
        artist: '',
        duration: ''
    },
    {
        file: '',
        title: '',
        artist: '',
        duration: ''
    },
    {
        file: '',
        title: '',
        artist: '',
        duration: ''
    },
    {
        file: '',
        title: '',
        artist: '',
        duration: ''
    },
    {
        file: '',
        title: '',
        artist: '',
        duration: ''
    },
    {
        file: '',
        title: '',
        artist: '',
        duration: ''
    },
    {
        file: '',
        title: '',
        artist: '',
        duration: ''
    },
    {
        file: '',
        title: '',
        artist: '',
        duration: ''
    },
    {
        file: '',
        title: '',
        artist: '',
        duration: ''
    },
    {
        file: '',
        title: '',
        artist: '',
        duration: ''
    },
    {
        file: '',
        title: '',
        artist: '',
        duration: ''
    },
    {
        file: '',
        title: '',
        artist: '',
        duration: ''
    },
    {
        file: '',
        title: '',
        artist: '',
        duration: ''
    },
    {
        file: '',
        title: '',
        artist: '',
        duration: ''
    },
    {
        file: '',
        title: '',
        artist: '',
        duration: ''
    },
    {
        file: '',
        title: '',
        artist: '',
        duration: ''
    },

   
];

function loadSongs(songs) {
    songListElement.innerHTML = songs.map((song, index) => `
        <div class="song-item" onclick="playSong(${index})">
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
            <p>${song.duration}</p>
        </div>
    `).join('');
}

function playSong(index) {
    if (index < 0 || index >= songs.length || !songs[index].file) {
        return; // Ignore if index is out of range or file path is empty
    }

    currentSongIndex = index;
    const song = songs[index];
    songTitleElement.textContent = song.title;
    artistNameElement.textContent = song.artist;
    audio.src = song.file; 
    audio.play();
    isPlaying = true;
    updatePlayPauseButton();
    updateTimeDisplay();
}

function updatePlayPauseButton() {
    const playPauseBtn = document.getElementById('playPauseBtn');
    playPauseBtn.textContent = isPlaying ? '⏸' : '▶️';
}

function updateTimeDisplay() {
    audio.ontimeupdate = () => {
        const currentTime = formatTime(audio.currentTime);
        const duration = formatTime(audio.duration);
        timeDisplayElement.textContent = `${currentTime} / ${duration}`;
    };
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

document.getElementById('playPauseBtn').addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying;
    updatePlayPauseButton();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(currentSongIndex);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
});

document.getElementById('fastForwardBtn').addEventListener('click', () => {
    audio.currentTime += 10;
});

// Load songs and play the second song by default
loadSongs(songs);
playSong(currentSongIndex);