
class Audio {
    constructor() {
        this._soundOn = Game.gameSettings.soundOn;
        this._musicOn = Game.gameSettings.musicOn;
    }

    setMusicState(option) {
        let audioEl = document.getElementById('music');

        if (this._soundOn) {
            this._musicOn = option || this._musicOn;
            this._musicOn === "on" ? audioEl.play() : audioEl.pause();
            Game.gameSettings.musicOn = this._musicOn;
        }
    }

    getMusicState() {
        return this._musicOn;
    }


    setSoundState(option) {
        let allAudio = document.getElementsByTagName('audio');

        this._soundOn = option || this._soundOn;
        for (let i=0; i < allAudio.length; i++) {
            allAudio[i].muted = this._soundOn !== "on";
        }
        Game.gameSettings.soundOn = this._soundOn;
    }

    getSoundState() {
        return this._soundOn;
    }

    setVolume(sound, level) {
        document.getElementById(sound).volume = level;
    }

    playSoundEffect(sounds, probability = 1) {
        let magic8BallSaysYes = Math.random() < probability,
            option = Math.floor(Math.random() * sounds.length);

        if (this._soundOn) {
            if (magic8BallSaysYes) {
                document.getElementById('sfx-' + sounds[option]).play();
            }
        }
    }
}