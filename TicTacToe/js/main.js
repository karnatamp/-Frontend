console.log('TIC TAC TOE')


/*const a1 =document.querySelector('#a1')

a1.addEventListener('click',function(){
  console.log('click on a1')
})*/

const a1 = document.querySelector('#a1')
const b1 = document.querySelector('#b1')
const c1 = document.querySelector('#c1')
const a2 = document.querySelector('#a2')
const b2 = document.querySelector('#b2')
const c2 = document.querySelector('#c2')
const a3 = document.querySelector('#a3')
const b3 = document.querySelector('#b3')
const c3 = document.querySelector('#c3')

let current_player =0
const elements = ['X','O']

const validationLine = (el1, el2, el3) => {
  let valid = false

  console.log("valid", el1.innerHTML, el2.innerHTML, el3.innerHTML)

  if (el1.innerHTML != '' && el2.innerHTML != '' && el3.innerHTML != '') {
      console.log('valid')
      valid = true
  }

  return valid
}

const cells = document.querySelectorAll('.cell')
 cells.forEach(cell => {
     cell.addEventListener('click', (e) => {
         // console.log(e)
         console.log(e.target.innerHTML)
         if (e.target.innerHTML == '') {
             // Put the element of the player in the cell
             e.target.innerHTML = elements[current_player]

             // Check if there is a winner or let the second player plays
             if (validationLine(a1, a2, a3) ) {
                 console.log('winner !')
             }

             // Switch of players
             if (current_player == 0) {
                 current_player = 1
             } else {
                 current_player = 0
             }
         } else {
             // When there is a cliock on a cell already used
             alert('Someone already play here !')
         }
     })
    })