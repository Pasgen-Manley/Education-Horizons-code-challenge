# Education-Horizons-code-challenge
Clone repository to your console then,
Navigate to the color-challenge directory, you can run:

### `npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Challenge
For this challenge, we would like to see an application that will produce an image in
which each colour occurs exactly once — with no repetition and no unused colours.
For the purpose of this challenge; colours are made up of three components — red,
green, and blue. We require you to break each colour component into 32 steps — 8,
16, 24 .. 256 — this means when combined, you will have 32,768 discrete colours to
utilise.

## My Process
1. Created the skeleton of the app with react.
2. Plenty of research (googling) online to try and get a better understanding of the task and ways to tackle it.
3. Set up a function to break down the colour components into 32 steps as per challenge requirements. Used a for loop to make them divisible by eight.
4. Used the array method splice to then take random values from each red, green, and blue array.
5. Once 1 of each RGB value is taken then push into another array of colours.
6. Using the selection sort algorithm I then sorted the RGB values to help stylise the image.
7. I then mapped each RGB Colour using JSX to display each colour in the array.
8. Additionally, made some small changes to the styling of the image with CSS. This allowed for the image to look and sit better in the browser.

## Challenges Faced
* Finding an algorithm that was quick enough, did not crash my browser, and helped display a visually interesting image. Knuth shuffle made the image not that appealing, bubble sort was very slow and crashed my browser. Selection sort produced a nice image and was fast enough.
* Tackling a more computer science-type question, than what I have experienced up until now in my studies.
* Breaking down the RGB values and making them only appear once. 