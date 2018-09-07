class Library {
  constructor(name, creator) {
    this.creator = creator;
    this.name = name;
    this.playlists = [];
  }
}

class Playlist {
  constructor(name) {
    this.name = name;
    this.tracks = [];
  } 

  get overallRating() {
    return this.tracks.reduce((acc, track) => (acc + track.rating), 0) / this.tracks.length;
  }
      
  get totalDuration() {
    return this.tracks.reduce((acc, track) => (acc + track.length), 0);
  } 
}

class Track {
  constructor(title, length, rating) {
    this.title = title;
    this.length = length;
    this.rating = rating;
  }
}