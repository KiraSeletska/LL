
export function getRandomID() {
    const min = 0;
    const max = 1679615;
    let int = Math.floor(Math.random() * (max - min + 1)) + min;
    return int.toString(36);
  }