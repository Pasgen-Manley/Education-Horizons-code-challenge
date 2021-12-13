import React from 'react';

const ColourGenerator = () => {
  
  const rgbColours = createColours();
  //Function to break down colour components into 32 steps. 8 x 32 = 256
  function createSteps(start, end) {
    let steps = [];
    for (let i = start; i <= end; i++) {
      if (i !== 0 && i % 8 === 0) {
        steps.push(i);
      }
    }
    return steps;
  };

  function createColours() {
    let red = createSteps(8, 256);
    let green = createSteps(8, 256);
    let blue = createSteps(8, 256);
    let colourArray = [];
    //Using a while loop that runs through and takes a random integer from red, green and blue and splices them from there.
    // That integer is then used to created the rbg values of a colour
    let i = 0;
    while (i < red.length) {
      const redIndex = Math.floor(Math.random() * red.length);
      const redValue = red[redIndex];
      red.splice(redIndex, 0);
      i++

      let j = 0;
      while (j < blue.length) {
        const blueIndex = Math.floor(Math.random() * blue.length);
        const blueValue = blue[blueIndex];
        blue.splice(blueIndex, 0);
        j++


        var k = 0;
        while (k < green.length) {
          const greenIndex = Math.floor(Math.random() * green.length);
          const greenValue = green[greenIndex];
          green.splice(greenIndex, 0);
          //random rgb values inputting into a literal to be used to display a rgb colour in CSS
          const rgb = `rgb(${redValue},${blueValue},${greenValue})`;
          //rbg values are then pushed into the colour array
          colourArray.push(rgb);

          k++
        }
      }
    }
    //Colours array is then shuffled and randomised thanks to the Knuth shuffle algorithm
    return shuffleFunction(colourArray);
  };
  //Fisher-Yates (aka Knuth) Shuffle.
  function shuffleFunction(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  //JSX styling
  return (
    rgbColours.map((colour, index) => {
      return (
        <div style={{ width: '100%', position: 'relative'}}>
          <div key={index} id={index} style={{ backgroundColor: colour }} className="square"></div>
        </div>
      )
    })
  )


}

export default ColourGenerator;