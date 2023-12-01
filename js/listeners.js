import { cubeDefaultPositions } from "/js/default-positions"

import {setDataLocalStorage, getDataLocalStorage, faceElements, transformModifier, rotateMatrix, setTransformProp, movementControl, cubeMixer, cubeSolver, movementMemory, btnAnimation} from "/js/functions"

import {dragMovements, btn_up, btn_up_R, btn_down, btn_down_R, btn_left, btn_left_R, btn_right, btn_right_R, btn_front, btn_front_R, btn_back, btn_back_R, btn_middleY, btn_middleY_R, btn_middleX, btn_middleX_R, btn_middleZ, btn_middleZ_R} from "/js/drag-movements"

/* -----DOM ELEMENTS------ */

const cubeContainer = document.querySelector(".cube-container");
const btnMixer = document.querySelector("#mixer")
const btnSolver = document.querySelector("#solver")


const currentPositions = {}

/* ------------------EVENTS LISTENERS----------------- */

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

  setDataLocalStorage(currentPositions, "currentPositions")
  setDataLocalStorage([], "movementMemory")

})

/* ----BUTTONS CONTROLERS---- */

btn_up.addEventListener("click", () => {
  movementControl(btn_up);
  btnAnimation(btn_up)
})

btn_up_R.addEventListener("click", () => {
  movementControl(btn_up_R);
  btnAnimation(btn_up_R)
})

btn_down.addEventListener("click", () => {
  movementControl(btn_down);
  btnAnimation(btn_down)
})

btn_down_R.addEventListener("click", () => {
  movementControl(btn_down_R);
  btnAnimation(btn_down_R)
})

btn_left.addEventListener("click", () => {
  movementControl(btn_left);
  btnAnimation(btn_left)
})

btn_left_R.addEventListener("click", () => {
  movementControl(btn_left_R);
  btnAnimation(btn_left_R)
})

btn_right.addEventListener("click", () => {
  movementControl(btn_right);
  btnAnimation(btn_right)
})

btn_right_R.addEventListener("click", () => {
  movementControl(btn_right_R);
  btnAnimation(btn_right_R)
})

btn_front.addEventListener("click", () => {
  movementControl(btn_front);
  btnAnimation(btn_front)
})

btn_front_R.addEventListener("click", () => {
  movementControl(btn_front_R);
  btnAnimation(btn_front_R)
})

btn_back.addEventListener("click", () => {
  movementControl(btn_back);
  btnAnimation(btn_back)
})

btn_back_R.addEventListener("click", () => {
  movementControl(btn_back_R);
  btnAnimation(btn_back_R)
})

btn_middleY.addEventListener("click", () => {
  movementControl(btn_middleY);
  btnAnimation(btn_middleY)
})

btn_middleY_R.addEventListener("click", () => {
  movementControl(btn_middleY_R);
  btnAnimation(btn_middleY_R)
})

btn_middleX.addEventListener("click", () => {
  movementControl(btn_middleX);
  btnAnimation(btn_middleX)
})

btn_middleX_R.addEventListener("click", () => {
  movementControl(btn_middleX_R);
  btnAnimation(btn_middleX_R)
})

btn_middleZ.addEventListener("click", () => {
  movementControl(btn_middleZ);
  btnAnimation(btn_middleZ)
})

btn_middleZ_R.addEventListener("click", () => {
  movementControl(btn_middleZ_R);
  btnAnimation(btn_middleZ_R)
})


btnMixer.addEventListener("click",async() => {
  btnSolver.disabled = true
  
  await cubeMixer(btnMixer)

  btnSolver.disabled = false
})

btnSolver.addEventListener("click",async() => {
  btnMixer.disabled = true
  
  await cubeSolver(btnSolver)

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

  const currentPositions = getDataLocalStorage("currentPositions")

  let startPosition = null
  let endPosition = null

  for (const el in currentPositions) {
    if (currentPositions[el].id === startElementId) startPosition = el;
    if (currentPositions[el].id === endElementId) endPosition = el
  }


  if (dragMovements[startPosition]){
    if(dragMovements[startPosition][endPosition]){
      const btnComand = dragMovements[startPosition][endPosition]
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

  const currentPositions = getDataLocalStorage("currentPositions")

  let startPosition = null
  let endPosition = null

  for (const el in currentPositions) {
    if (currentPositions[el].id === startElementId) startPosition = el;
    if (currentPositions[el].id === endElementId) endPosition = el
  }



  if (dragMovements[startPosition]){
    if(dragMovements[startPosition][endPosition]){
      const btnComand = dragMovements[startPosition][endPosition]
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





