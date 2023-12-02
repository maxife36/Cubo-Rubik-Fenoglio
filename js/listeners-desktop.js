import { cubeDefaultPositions } from "/js/default-positions"

import * as fn from "/js/functions"
import * as movement from "/js/drag-movements"


/* -----DOM ELEMENTS------ */

const cubeContainer = document.querySelector(".cube-container");
const btnMixer = document.querySelector("#mixer")
const btnSolver = document.querySelector("#solver")
const btnAxis = document.querySelector("#btn-Axis")
const btnControlers = document.querySelector("#btn-Axis")


const currentPositions = {}

/* ------------------EVENTS LISTENERS DESKTOPS----------------- */

/* ----PRELOAD---- */

document.addEventListener('DOMContentLoaded', () => {
  for (let cubeElement in cubeDefaultPositions) {

    // obtengo el id segun la sintaxis usada en el html
    const idElement = `#${cubeElement[0]}-${cubeElement[2]}-${cubeElement[4]}`

    //busco el elemento del DOM con el idElement
    const DOMElement = document.querySelector(idElement)

    //propiedad transform para append
    const props = cubeDefaultPositions[cubeElement]

    const transformProperty = `rotateX(${props.rX}deg) rotateY(${props.rY}deg) rotateZ(${props.rZ}deg) translateX(${props.tX}px) translateY(${props.tY}px) translateZ(${props.tZ}px)`

    //Otorgo las propiedeades de transform a cada cubo individual

    DOMElement.style.transform = transformProperty

    //guardado de posicionamiento de referencia inicial
    currentPositions[cubeElement] = {
      id: DOMElement.id,
      transform: transformProperty
    }
  }

  fn.setDataLocalStorage(currentPositions, "currentPositions")
  fn.setDataLocalStorage([], "fn.movementMemory")

})

/* ----BUTTONS CONTROLERS---- */

movement.btn_up.addEventListener("click", () => {
  fn.movementControl(movement.btn_up);
  fn.btnAnimation(movement.btn_up)
})

movement.btn_up_R.addEventListener("click", () => {
  fn.movementControl(movement.btn_up_R);
  fn.btnAnimation(movement.btn_up_R)
})

movement.btn_down.addEventListener("click", () => {
  fn.movementControl(movement.btn_down);
  fn.btnAnimation(movement.btn_down)
})

movement.btn_down_R.addEventListener("click", () => {
  fn.movementControl(movement.btn_down_R);
  fn.btnAnimation(movement.btn_down_R)
})

movement.btn_left.addEventListener("click", () => {
  fn.movementControl(movement.btn_left);
  fn.btnAnimation(movement.btn_left)
})

movement.btn_left_R.addEventListener("click", () => {
  fn.movementControl(movement.btn_left_R);
  fn.btnAnimation(movement.btn_left_R)
})

movement.btn_right.addEventListener("click", () => {
  fn.movementControl(movement.btn_right);
  fn.btnAnimation(movement.btn_right)
})

movement.btn_right_R.addEventListener("click", () => {
  fn.movementControl(movement.btn_right_R);
  fn.btnAnimation(movement.btn_right_R)
})

movement.btn_front.addEventListener("click", () => {
  fn.movementControl(movement.btn_front);
  fn.btnAnimation(movement.btn_front)
})

movement.btn_front_R.addEventListener("click", () => {
  fn.movementControl(movement.btn_front_R);
  fn.btnAnimation(movement.btn_front_R)
})

movement.btn_back.addEventListener("click", () => {
  fn.movementControl(movement.btn_back);
  fn.btnAnimation(movement.btn_back)
})

movement.btn_back_R.addEventListener("click", () => {
  fn.movementControl(movement.btn_back_R);
  fn.btnAnimation(movement.btn_back_R)
})

movement.btn_middleY.addEventListener("click", () => {
  fn.movementControl(movement.btn_middleY);
  fn.btnAnimation(movement.btn_middleY)
})

movement.btn_middleY_R.addEventListener("click", () => {
  fn.movementControl(movement.btn_middleY_R);
  fn.btnAnimation(movement.btn_middleY_R)
})

movement.btn_middleX.addEventListener("click", () => {
  fn.movementControl(movement.btn_middleX);
  fn.btnAnimation(movement.btn_middleX)
})

movement.btn_middleX_R.addEventListener("click", () => {
  fn.movementControl(movement.btn_middleX_R);
  fn.btnAnimation(movement.btn_middleX_R)
})

movement.btn_middleZ.addEventListener("click", () => {
  fn.movementControl(movement.btn_middleZ);
  fn.btnAnimation(movement.btn_middleZ)
})

movement.btn_middleZ_R.addEventListener("click", () => {
  fn.movementControl(movement.btn_middleZ_R);
  fn.btnAnimation(movement.btn_middleZ_R)
})


btnMixer.addEventListener("click",async() => {
  btnSolver.disabled = true
  
  await fn.cubeMixer(btnMixer)

  btnSolver.disabled = false
})

btnSolver.addEventListener("click",async() => {
  btnMixer.disabled = true
  
  await fn.cubeSolver(btnSolver)

  btnMixer.disabled = false
})

/* ----CUBE CONTAINER ROTATE CONTROLLER---- */

/*   
const edges = ["A_1_E", "A_2_D", "A_2_F", "A_3_E", "B_1_D", "B_1_F", "B_3_D", "B_3_F", "C_1_E", "C_2_D", "C_2_F", "C_3_E"]
const centers = ["A_2_E", "B_1_E", "B_2_D", "B_2_F", "B_3_E", "C_2_E"] 
*/

const vertices = ["A_1_D", "A_1_F", "A_3_D", "A_3_F", "C_1_D", "C_1_F", "C_3_D", "C_3_F"]


let isDragging = false;
let startX = null
let startY = null;

let startElementId = null
let endElementId = null


//----------version escritorio

const startDragDesktop = (event) => {
  startElementId = event.target.parentNode.id;
}

const endDragDesktop = (event) => {
  endElementId = event.target.parentNode.id;

  const currentPositions = fn.getDataLocalStorage("currentPositions")

  let startPosition = null
  let endPosition = null

  for (const el in currentPositions) {
    if (currentPositions[el].id === startElementId) startPosition = el;
    if (currentPositions[el].id === endElementId) endPosition = el
  }


  if (movement.dragMovements[startPosition]){
    if(movement.dragMovements[startPosition][endPosition]){
      const btnComand = movement.dragMovements[startPosition][endPosition]
      btnComand.click()
    }
  }


}


  //en los listener discrimina que cubo se esta tomando. Si es un vertice rota todo el cubo, si es arista o medios rota caras


window.addEventListener("mousedown",(event)=>{
  event.preventDefault()

  const cubeId = event.target.parentNode.id
  const refCubeId = `${cubeId[0]}_${cubeId[2]}_${cubeId[4]}`
  
  if(vertices.includes(refCubeId)){

    isDragging = true;
    startX = event.clientX;
    startY = event.clientY;

  }else{
    startDragDesktop(event)
  }
} )

window.addEventListener("mouseup", (event)=>{
  event.preventDefault()

  isDragging = false;

  endDragDesktop(event)

  startElementId = null
  endElementId = null

} )

window.addEventListener("mousemove", (event) => {
  event.preventDefault()

  if (isDragging) {
    const difX = event.clientX - startX;
    const difY = event.clientY - startY;

    
    // sensitive disminuye el valor de px que presenta la diferencia entre las coordenadas de cundo hago click (mousedown) con las coordenadas del mouse mientas me muevo (event.clientX/Y)
    const sensitiveX = 0.2;
    const sensitiveY = 0.2;
    const sensitiveZ = 0.001;

    
    const newtransform = cubeContainer.style.transform + `rotateY(${difX * sensitiveX}deg) rotateX(${difY * -sensitiveY}deg)rotateZ(${(difX - difY) * sensitiveZ}deg)`;

    const newMatrix = new DOMMatrix(newtransform)

    cubeContainer.style.transform = newMatrix.toString()
    
    
    startX = event.clientX;
    startY = event.clientY; 
  }
})


//------version mobile


const startDragMobile = (event) => {
  startElementId = event.touches[0].target.parentNode.id;
}

const endDragMobile = (event) => {
  endElementId = event.changedTouches[0].target.parentNode.id 

  const currentPositions = fn.getDataLocalStorage("currentPositions")

  let startPosition = null
  let endPosition = null

  for (const el in currentPositions) {
    if (currentPositions[el].id === startElementId) startPosition = el;
    if (currentPositions[el].id === endElementId) endPosition = el
  }



  if (movement.dragMovements[startPosition]){
    if(movement.dragMovements[startPosition][endPosition]){
      const btnComand = movement.dragMovements[startPosition][endPosition]
      btnComand.click()
    }
  }


}


window.addEventListener("touchstart",(event)=>{
  event.preventDefault()

  const cubeId = event.touches[0].target.parentNode.id
  const refCubeId = `${cubeId[0]}_${cubeId[2]}_${cubeId[4]}`

  
  if(vertices.includes(refCubeId)){

    isDragging = true;
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;

  }else{
    startDragMobile(event)
  }
}, { passive: false } )

window.addEventListener("touchend", (event)=>{
  event.preventDefault()

  isDragging = false;


  endDragMobile(event)

  startElementId = null
  endElementId = null

}, { passive: false } )

window.addEventListener("touchmove", (event) => {
  event.preventDefault()
  
  if (isDragging) {


    const difX = event.touches[0].clientX - startX;
    const difY = event.touches[0].clientY - startY;

    
    // sensitive disminuye el valor de px que presenta la diferencia entre las coordenadas de cundo hago click (mousedown) con las coordenadas del mouse mientas me muevo (event.clientX/Y)
    const sensitiveX = 0.2;
    const sensitiveY = 0.2;
    const sensitiveZ = 0.001;

    
    const newtransform = cubeContainer.style.transform + `rotateY(${difX * sensitiveX}deg) rotateX(${difY * -sensitiveY}deg)rotateZ(${(difX - difY) * sensitiveZ}deg)`;

    const newMatrix = new DOMMatrix(newtransform)

    cubeContainer.style.transform = newMatrix.toString()
    
    
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY; 
  }
}, { passive: false })





