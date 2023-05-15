class Formatter {
  static capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1)
  }

  static sanitize(input) {
    return input.replace(/[^a-zA-Z0-9-' ]/g, '')
  }

  static titleize(input) {
    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    const fragmentedInput = input.split(" ");
    let titleizedInput = [];

    for (let word of fragmentedInput) {
      if (titleizedInput.length === 0 || !exceptions.includes(word)) {
        titleizedInput.push(this.capitalize(word));
      } else {
        titleizedInput.push(word);
      }
    }

    return titleizedInput.join(" ");
  }
}