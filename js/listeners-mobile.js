import { cubeDefaultPositions } from "/js/default-positions"

import * as fn from "/js/functions"
import * as movement from "/js/drag-movements"


/* -----DOM ELEMENTS------ */

const cubeContainer = document.querySelector(".cube-container");
const btnMixer = document.querySelector("#mixer")
const btnSolver = document.querySelector("#solver")
const btnAxis = document.querySelector("#chbx-axis")
const btnControlers = document.querySelector("#chbx-controls")


const currentPositions = {}

/* ------------------EVENTS LISTENERS DESKTOPS----------------- */

/* ----BUTTONS CONTROLERS---- */

movement.btn_up.addEventListener("touchstart", () => {
  fn.movementControl(movement.btn_up);
  fn.btnAnimation(movement.btn_up)
}, {passive : true} )

movement.btn_up_R.addEventListener("touchstart", () => {
  fn.movementControl(movement.btn_up_R);
  fn.btnAnimation(movement.btn_up_R)
}, {passive : true} )

movement.btn_down.addEventListener("touchstart", () => {
  fn.movementControl(movement.btn_down);
  fn.btnAnimation(movement.btn_down)
}, {passive : true} )

movement.btn_down_R.addEventListener("touchstart", () => {
  fn.movementControl(movement.btn_down_R);
  fn.btnAnimation(movement.btn_down_R)
}, {passive : true} )

movement.btn_left.addEventListener("touchstart", () => {
  fn.movementControl(movement.btn_left);
  fn.btnAnimation(movement.btn_left)
}, {passive : true} )

movement.btn_left_R.addEventListener("touchstart", () => {
  fn.movementControl(movement.btn_left_R);
  fn.btnAnimation(movement.btn_left_R)
}, {passive : true} )

movement.btn_right.addEventListener("touchstart", () => {
  fn.movementControl(movement.btn_right);
  fn.btnAnimation(movement.btn_right)
}, {passive : true} )

movement.btn_right_R.addEventListener("touchstart", () => {
  fn.movementControl(movement.btn_right_R);
  fn.btnAnimation(movement.btn_right_R)
}, {passive : true} )

movement.btn_front.addEventListener("touchstart", () => {
  fn.movementControl(movement.btn_front);
  fn.btnAnimation(movement.btn_front)
}, {passive : true} )

movement.btn_front_R.addEventListener("touchstart", () => {
  fn.movementControl(movement.btn_front_R);
  fn.btnAnimation(movement.btn_front_R)
}, {passive : true} )

movement.btn_back.addEventListener("touchstart", () => {
  fn.movementControl(movement.btn_back);
  fn.btnAnimation(movement.btn_back)
}, {passive : true} )

movement.btn_back_R.addEventListener("touchstart", () => {
  fn.movementControl(movement.btn_back_R);
  fn.btnAnimation(movement.btn_back_R)
}, {passive : true} )

movement.btn_middleY.addEventListener("touchstart", () => {
  fn.movementControl(movement.btn_middleY);
  fn.btnAnimation(movement.btn_middleY)
}, {passive : true} )

movement.btn_middleY_R.addEventListener("touchstart", () => {
  fn.movementControl(movement.btn_middleY_R);
  fn.btnAnimation(movement.btn_middleY_R)
}, {passive : true} )

movement.btn_middleX.addEventListener("touchstart", () => {
  fn.movementControl(movement.btn_middleX);
  fn.btnAnimation(movement.btn_middleX)
}, {passive : true} )

movement.btn_middleX_R.addEventListener("touchstart", () => {
  fn.movementControl(movement.btn_middleX_R);
  fn.btnAnimation(movement.btn_middleX_R)
}, {passive : true} )

movement.btn_middleZ.addEventListener("touchstart", () => {
  fn.movementControl(movement.btn_middleZ);
  fn.btnAnimation(movement.btn_middleZ)
}, {passive : true} )

movement.btn_middleZ_R.addEventListener("touchstart", () => {
  fn.movementControl(movement.btn_middleZ_R);
  fn.btnAnimation(movement.btn_middleZ_R)
}, {passive : true} )


btnMixer.addEventListener("touchstart",async() => {
  btnSolver.disabled = true
  
  await fn.cubeMixer(btnMixer)

  btnSolver.disabled = false
}, {passive : true} )

btnSolver.addEventListener("touchstart",async() => {
  btnMixer.disabled = true
  
  await fn.cubeSolver(btnSolver)

  btnMixer.disabled = false
}, {passive : true} )

/* ----CUBE CONTAINER ROTATE CONTROLLER---- */

const vertices = ["A_1_D", "A_1_F", "A_3_D", "A_3_F", "C_1_D", "C_1_F", "C_3_D", "C_3_F"]


let isDragging = false;
let startX = null
let startY = null;

let startElementId = null
let endElementId = null


const endDragMobile = () => {

  const currentPositions = fn.getDataSessionStorage("currentPositions")

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

  const cubeId = event.touches[0].target.parentNode.id
  const refCubeId = `${cubeId[0]}_${cubeId[2]}_${cubeId[4]}`
  
  startElementId = cubeId

  if(vertices.includes(refCubeId)){
    isDragging = true;

    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;

  }
}, {passive : true} )

window.addEventListener("touchend", (event)=>{
  
  isDragging = false;

  endDragMobile()

  startElementId = null
  endElementId = null

}, {passive : true}  )

window.addEventListener("touchmove", (event) => {
  
  let touchX = event.touches[0].clientX;
  let touchY = event.touches[0].clientY;
  
  //obtiene el cubo que esta por debajo del dedo
  endElementId = document.elementFromPoint(touchX, touchY).parentNode.id;

  
  if (isDragging) {


    const difX = touchX - startX;
    const difY = touchY - startY;

    
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


}, {passive : true} )


btnAxis.addEventListener("touchend", () =>{
  if(btnAxis.checked){
    btnControlers.checked = false
    fn.btnControlers(btnControlers)
  }

  fn.showAxies(btnAxis)
} )
btnControlers.addEventListener("touchend", () => {
  if(btnControlers.checked){
    btnAxis.checked = false
    fn.btnControlers(btnAxis)
  }
  
  fn.btnControlers(btnControlers)
} )


