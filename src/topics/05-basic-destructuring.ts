interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

// const { song: anotherSong, details } = audioPlayer;
// const { author } = details;
// console.log("song: ", anotherSong);
// console.log("author:", author);

const [, , trunks = "Not found"]: string[] = ["Goky", "Vegeta"];

console.error("Personaje 3:", trunks);

export {};
