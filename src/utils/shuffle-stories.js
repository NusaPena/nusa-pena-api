function shuffle(array) {
     const shuffledArray = [...array];            // ? Making copy of array
     let currentIndex = shuffledArray.length;
          // ? Shuffle object of array
          while (currentIndex !== 0) {
               // ? Pick a remaining object
               const randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;

               // ? Swap it with the current object
               const temporaryValue = shuffledArray[currentIndex];
                    shuffledArray[currentIndex] = shuffledArray[randomIndex];
                    shuffledArray[randomIndex]  = temporaryValue;
          }

     return shuffledArray;
}

module.exports = shuffle;
