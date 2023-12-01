import { moveControls } from "/js/controls-settings"
import {dragMovements, btn_up, btn_up_R, btn_down, btn_down_R, btn_left, btn_left_R, btn_right, btn_right_R, btn_front, btn_front_R, btn_back, btn_back_R, btn_middleY, btn_middleY_R, btn_middleX, btn_middleX_R, btn_middleZ, btn_middleZ_R} from "/js/drag-movements"


const currentPositions = {}

/* ------------------FUNCIONES GENERALES----------------- */

//setea en LocalStorage un objeto en la referencia que le pasemos

export const setDataLocalStorage = (obj, idLocalStorage) => {

    const objJSON = JSON.stringify(obj);
  
    localStorage.setItem(idLocalStorage, objJSON)
  
  }
  
  //devuelve el valor que contiene la referencia del localStorage que se le pase
export const getDataLocalStorage = (idLocalStorage) => {
  
    const objJSON = localStorage.getItem(idLocalStorage);
  
    const obj = JSON.parse(objJSON);
  
    return obj
  }
  
  //devuelve los cubos individuales que invloucra el movimiento de cierta cara- Siempre tendran 9 elementos ya que cada movimiento involucra 9 cubos
  
export const faceElements = (faceIdentifier) => {
    const currentPosition = getDataLocalStorage("currentPositions")
    const faceCubes = {}
  
    for (let idRef in currentPosition) {
  
      if (idRef.includes(faceIdentifier)) {
        faceCubes[idRef] = currentPosition[idRef]
      }
    }
  
    return faceCubes
  }
  
  // modifica los grados de giro de los elementos de una cara, segun el boton seleccionado.
  
export const transformModifier = (facesCubes, axis, rotateDirection) => {
  
    for (const cube in facesCubes) {
  
      const currentTransform = facesCubes[cube].transform
      const nextRotation = `rotate${axis}(${90 * rotateDirection}deg)`
  
      const transformProperty = `${nextRotation} ${currentTransform}`
  
      const newMatrix = new DOMMatrix(transformProperty)
  
      facesCubes[cube].transform = newMatrix.toString()
    }
  }
  
  //al rotar mueve dentro de mi sistema de referencia fijo el cubo que corresponda segun el giro establecido
  
export const rotateMatrix = (faceElem, matrixDirection) => {
  
    //Llaves (posiciones de referencia) y Valores (cubo que esta ocupando ese espacio) Originales
    const cubesKeys = []
    const cubesValue = []
  
    //Array que guardará los cubos rotados
    let rotatedCubes = []
  
    for (const el in faceElem) {
      cubesKeys.push(el)
      cubesValue.push(faceElem[el])
    }
  
    //Rotacion Maticial segun sentido de giro (siempre son 90º)
  
    if (matrixDirection > 0) {
      rotatedCubes = [
        cubesValue[6], cubesValue[3], cubesValue[0],
        cubesValue[7], cubesValue[4], cubesValue[1],
        cubesValue[8], cubesValue[5], cubesValue[2],
      ]
    }
  
    if (matrixDirection < 0) {
      rotatedCubes = [
        cubesValue[2], cubesValue[5], cubesValue[8],
        cubesValue[1], cubesValue[4], cubesValue[7],
        cubesValue[0], cubesValue[3], cubesValue[6],
      ]
    }
  
    cubesKeys.forEach((el, index) => {
      faceElem[el] = rotatedCubes[index]
    })
  }
  
  //seteo de la propiedad style.transform a los elementos involucraods
  
export const setTransformProp = (facesCubes) => {
    for (const cube in facesCubes) {
      const DOMCube = document.querySelector(`#${facesCubes[cube].id}`)
  
  
      const transformProperty = facesCubes[cube].transform
  
      DOMCube.style.transform = transformProperty
    }
  
  }
  
  //Compila todas las acciones que se deben realizar al presionar alguno de los botones de movimiento
  
export const movementControl = (btn) => {
    const controls = moveControls[btn.id]
  
    movementMemory(btn.id)
  
  
    const currentPositions = getDataLocalStorage("currentPositions")
  
    //array con las posiciones que abarcan el movimiento seleccionado
    const cubesToMove = faceElements(controls[0])
  
    //modifico el angulo de rotacion
    transformModifier(cubesToMove, controls[1], controls[2])
  
    //seteo de popiedad style.tranform en los cubos involucrados
  
    setTransformProp(cubesToMove)
  
  
    //rotacion de matriz. Reubico los cubos dentro del sistema de referencia segun el movimeinto establecido (debido a los sentidos de giro dentro del css, el signo de los grados a girar puede ser diferente al sentido de giro de la matriz)
  
    rotateMatrix(cubesToMove, controls[3])
  
    //actualizacion de elementos en el sistema de referencia fijo (en localStorage )
  
    for (const el in cubesToMove) {
      currentPositions[el] = cubesToMove[el]
    }
  
    setDataLocalStorage(currentPositions, "currentPositions")
  }
  
  //permite mezclar el cubo de manera aleatoria
  
export const cubeMixer = async (commandBtn)=>{
    commandBtn.disabled = true
  
    const movements = [btn_up, btn_up_R, btn_down, btn_down_R, btn_left, btn_left_R, btn_right, btn_right_R, btn_front, btn_front_R, btn_back, btn_back_R, btn_middleY, btn_middleY_R, btn_middleX, btn_middleX_R, btn_middleZ, btn_middleZ_R]
  
    /* const movementHistory = [] */
  
    for (let i = 0; i < 10; i++) {
  
      const randomNumber = Math.floor(18 * Math.random()) 
  
      const btnComand = movements[randomNumber]
  
     /*  movementHistory.push(btnComand.id) */
  
      await new Promise(resolve => {
        setTimeout(() => {
          btnComand.click();
          resolve();
        }, 400);
      })
  
    }
  /* 
    movementMemory(movementHistory) */
  
    commandBtn.disabled = false
  }
  
  //resuelve el cubo rubik
  
export const cubeSolver =async (commandBtn) => {
    commandBtn.disabled = true
  
    const movementHistory = getDataLocalStorage("movementMemory")
  
    const reverseMoves = []
  
    for (let i = movementHistory.length -1 ; i >= 0; i--) {
      const btnId = movementHistory[i]
      if(btnId.includes("R")){
        const reverseMove = btnId.replace("_R","")
  
        const reverseBtn = document.querySelector(`#${reverseMove}`)
  
        reverseMoves.push(reverseBtn)
      }else{
        const reverseMove = btnId + "_R"
  
        const reverseBtn = document.querySelector(`#${reverseMove}`)
  
        reverseMoves.push(reverseBtn)
      }
    }
  
    /* let timestamp = 0 */
  
    for (let i = 0; i < reverseMoves.length; i++) {
  
      await new Promise(resolve => {
        setTimeout(() => {
          reverseMoves[i].click();
          resolve();
        }, 400);
      })
      
    }
  
   /*  reverseMoves.forEach(await (el) => {
  
      setTimeout(()=>{
        el.click()
      }, timestamp)
  
      timestamp += 400
  
    })
   */
    //reinicio la memoria
  
    setDataLocalStorage([], "movementMemory")
  
    commandBtn.disabled = false
  }
  
  // almacena los movimiento realizados
  
export const movementMemory = (movement) => {
    const movementHistory = getDataLocalStorage("movementMemory")
    
    movementHistory.push(movement)
  
    setDataLocalStorage(movementHistory, "movementMemory")
  
  }
  
  // funcion que permite la animacion de los botones.
  
export const btnAnimation = (btn) => {
    const buttonID = btn.id.split("_")
    let containerID = ""
  
    buttonID.forEach(el => containerID += el + "-")
  
    containerID += "container"
  
    const DOMContainer = document.querySelector(`#${containerID}`)
  
    const DOMButton = DOMContainer.querySelector(".button-container")
  
    const rotateValue = Number(DOMButton.getAttribute("rotate"))
  
    const newRotateValue = rotateValue - 360
  
    DOMButton.setAttribute("rotate", newRotateValue)
  
    DOMButton.style.transform = `rotateZ(${newRotateValue}deg)`
  
  }