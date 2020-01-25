let ball = document.querySelector('#ball')
let field = document.querySelector('#field')
let holes = document.querySelectorAll('.hole')
let start = document.querySelector('#finish')
let message = document.querySelector('#message')
let isLose = false
let maxY = field.clientHeight - ball.clientHeight
let maxX = field.clientWidth - ball.clientHeight

window.addEventListener('deviceorientation', game)


function game(e) {
  let x = e.beta
  let y = e.gamma
  if (x >  90) x =  90
  if (x < -90) x = -90
  x += 90
  y += 90

  ball.style.top  = (maxX*x/180 - 10) + "px"
  ball.style.left = (maxY*y/180 - 10) + "px"

  let ball_pos = {
    top: ball.offsetTop,
    left: ball.offsetLeft
  }
  let checkpoint_pos = {
    top: start.offsetTop,
    left: start.offsetLeft
  }
  if (ball_pos.top > checkpoint_pos.top - 20
    && ball_pos.top < checkpoint_pos.top + 20
    && ball_pos.left > checkpoint_pos.left -20
    && ball_pos.left < checkpoint_pos.left + 20 )
  {
    manageInfo("Wygrałeś!", "green", "visible")
    sleep(2000)
    location.reload()
  }

  isLose = checkLose(ball_pos, holes)

  if(isLose)
  {
    manageInfo("Przegrałeś", "red", "visible")
    sleep(2000)
    location.reload()
  }
}

  function manageInfo(text, bg, visible){
    message.innerHTML = text
    message.style.background = bg
    message.style.visibility  = visible

  }
  function checkLose(ball, holes){
    for(let i = 0; i < holes.length; i++){
        let hole = {
          top: holes[i].offsetTop,
          left: holes[i].offsetLeft
        }
        if (  ball.top > hole.top - 20
            && ball.top < hole.top + 20
            && ball.left > hole.left - 20
            && ball.left < hole.left + 20){
            return true
            break
       }
    }
    return false
  }


  function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break
      }
    }
  }