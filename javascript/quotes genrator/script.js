var txtPlace = document.getElementById("txtdisplay");
var loveBtn  = document.getElementById("love");
var lifeBtn  = document.getElementById("life");
var motivBtn = document.getElementById("motivation");



// love qoutes generators 
let Lquotes = [
    ' "True love stories never have endings." – Richard Bach',
    '"Love is an irresistible desire to be irresistibly desired." – Robert Frost',
    '"At the touch of love everyone becomes a poet." – Plato',
    '"If you find me not within you, you will never find me. For I have been with you, from the beginning of me." – Rumi',
    '"In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine." –Maya Angelou',
    '"Love is composed of a single soul inhabiting two bodies." – Aristotle',
];

loveBtn.addEventListener('click',function(){
    var randomLoveQoute = Lquotes[Math.floor(Math.random() * Lquotes.length)]
    txtPlace.innerText = randomLoveQoute;
})

// life qoutes generators 
let Lifequotes = [
    '“Get busy living or get busy dying.” — Stephen King',
    '“You only live once, but if you do it right, once is enough.” — Mae West',
    '“Many of life’s failures are people who did not realize how close they were to success when they gave up.”– Thomas A. Edison',
    ' “Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.” – Steve Jobs',
    ' “Money and success don’t change people; they merely amplify what is already there.” — Will Smith',
    ' “If life were predictable it would cease to be life, and be without flavor.” – Eleanor Roosevelt',
];

lifeBtn.addEventListener('click',function(){
    var randomLifeQoute = Lifequotes[Math.floor(Math.random() * Lifequotes.length)]
    txtPlace.innerText = randomLifeQoute;
})


// motivations qoutes generators
let mQuotes = [
    ' "The road to success and the road to failure are almost exactly the same." --Colin R. Davis',
    '"Success is liking yourself, liking what you do, and liking how you do it." --Maya Angelou',
    '"As we look ahead into the next century, leaders will be those who empower others." --Bill Gates',
    '"The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself." --Mark Caine',
    '"The successful warrior is the average man, with laser-like focus." --Bruce Lee',
    '"Develop success from failures. Discouragement and failure are two of the surest stepping stones to success." --Dale Carnegie',
];

motivBtn.addEventListener('click',function(){
    var randomMotivQoute = mQuotes[Math.floor(Math.random() * mQuotes.length)]
    txtPlace.innerText = randomMotivQoute;
})
