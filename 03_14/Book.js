class Book {
    constructor(title, author, publisher, printCountry, chapterNum, wordCount) {
      this.title = title;
      this.author = author;
      this.publisher = publisher;
      this.printCountry = printCountry;
      this.chapterNum = chapterNum;
      this.wordCount = wordCount;
      this.hasCover = false;
      this.isOnShelf = true;
    }
  
    addCover() {
      this.hasCover = true;
    }
  
    putBookOnShelf() {
      this.isOnShelf = true;
    }

    calculatePages() {
        return Math.ceil(this.wordCount / 250); // Assuming an average of 250 words per page
    }
}

export default Book
  