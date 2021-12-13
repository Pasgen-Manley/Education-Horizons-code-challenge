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
    let x = 0;
    while (x < red.length) {
      const redIndex = Math.floor(Math.random() * red.length);
      const redValue = red[redIndex];
      red.splice(redIndex, 0);
      x++

      let y = 0;
      while (y < blue.length) {
        const blueIndex = Math.floor(Math.random() * blue.length);
        const blueValue = blue[blueIndex];
        blue.splice(blueIndex, 0);
        y++


        var z = 0;
        while (z < green.length) {
          const greenIndex = Math.floor(Math.random() * green.length);
          const greenValue = green[greenIndex];
          green.splice(greenIndex, 0);
          //random rgb values inputting into a literal to be used to display a rgb colour in CSS
          const rgb = `rgb(${redValue},${blueValue},${greenValue})`;
          //rbg values are then pushed into the colour array
          colourArray.push(rgb);

          z++
        }
      }
    }
    //Colours array is then shuffled and randomised thanks to the selection sort algorithm
    return selectionSort(colourArray);
  };
  
  function selectionSort(arr) {
    let min;
  
    //start passes.
    for (let i = 0; i < arr.length; i++) {
      //index of the smallest element to be the ith element.
      min = i;
  
      //Check through the rest of the array for a lesser element
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
  
      //compare the indexes
      if (min !== i) {
        //swap
        [arr[i], arr[min]] = [arr[min], arr[i]];
      }
    }
  
    return arr;
  }
  //JSX styling
  return (
    rgbColours.map((colour, index) => {
      return (
        <div style={{ width: '80%', position: 'relative', margin: '10%'}}>
          <div key={index} id={index} style={{ backgroundColor: colour }} className="square"></div>
        </div>
      )
    })
  )


}

export default ColourGenerator;