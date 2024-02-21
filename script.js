const wordEl=document.getElementById("word");
const wrongLettersEl= document.getElementById("wrong-letters");
const playButton = document.getElementById("play-button");

const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-messsage");

const fiqureParts = document.querySelectorAll(".figure-part");

const words = ["ahmet","ibrahim","kardelen","oguz"];

let selectedWord = words[Math.floor(Math.random()* words.length)];

var correctLetters =[];
const wrongLetters = [];

function displayWord() {
  
  
  wordEl.innerHTML = `${selectedWord.split('').map(letter => `<span class="letter">
  ${correctLetters.includes(letter)? letter:''}</span>`).join('')  }`;
  
   const innerword = wordEl.innerText.replace(/\n/g,'');
   
   console.log(innerword);
   
   if(innerword === selectedWord){
     popup.style.display="flex";
     finalMessage.innerText="Well done, You have won!";
     
   }
}


function hangman(){
  
  for (var i = 0; i < wrongLetters.length; i++) {
                fiqureParts[i].classList.add('show');
            }
            
            if(wrongLetters.length >= 6)
            {
               popup.style.display="flex";
                    finalMessage.innerText="You lose :(";

            }
}




window.addEventListener('keydown', e => {
    if(e.keyCode >= 65 &&  e.keyCode <=90)
    {
      const letter = e.key;
      
      if(selectedWord.includes(letter)) {
        
        if(!correctLetters.includes(letter))
        {
          console.log(correctLetters)
          correctLetters.push(letter);
        notification.style.display="none"
        }
        else
        {
          notification.style.display="flex"
        }
      }
      else
      {
        if(!wrongLetters.includes(letter))
        {
          wrongLetters.push(letter);
          notification.style.display="none";
          wrongLettersEl.innerHTML = `<p>Wrong Letters</p>
           <span>${wrongLetters}</span>`
           hangman();
           
        }
        else
        {
           notification.style.display="flex"
        }
      }
    }
    displayWord();
  })
  
  playButton.addEventListener('click', function() {
    correctLetters.splice(0);
    wrongLetters.splice(0);
    selectedWord = words[Math.floor(Math.random()* words.length)];
    displayWord();

    
    wrongLettersEl.innerHTML = `<p>Wrong Letters</p>
           <span>${wrongLetters}</span>`
           
           
        popup.style.display="none";

});
  
  

  
displayWord();









