export const btn_up = document.querySelector("#f_up")
export const btn_up_R = document.querySelector("#f_up_R")
export const btn_down = document.querySelector("#f_down")
export const btn_down_R = document.querySelector("#f_down_R")
export const btn_left = document.querySelector("#f_left")
export const btn_left_R = document.querySelector("#f_left_R")
export const btn_right = document.querySelector("#f_right")
export const btn_right_R = document.querySelector("#f_right_R")
export const btn_front = document.querySelector("#f_front")
export const btn_front_R = document.querySelector("#f_front_R")
export const btn_back = document.querySelector("#f_back")
export const btn_back_R = document.querySelector("#f_back_R")
export const btn_middleY = document.querySelector("#f_middleY")
export const btn_middleY_R = document.querySelector("#f_middleY_R")
export const btn_middleX = document.querySelector("#f_middleX")
export const btn_middleX_R = document.querySelector("#f_middleX_R")
export const btn_middleZ = document.querySelector("#f_middleZ")
export const btn_middleZ_R = document.querySelector("#f_middleZ_R")

export const dragMovements = {
    A_1_E: {
        A_2_D: btn_up_R,
        A_2_E: btn_middleX,
        A_3_E: btn_middleX,
        A_2_F: btn_up,
        B_1_D: btn_back,
        B_1_E: btn_middleX_R,
        C_1_E: btn_middleX_R,
        B_1_F: btn_back_R
    },
    A_2_E: {
        A_1_E: btn_middleX_R,
        A_2_D: btn_middleZ_R,
        A_2_F: btn_middleZ,
        A_3_E: btn_middleX
    },
    A_2_D:{
        A_1_E: btn_up,
        A_2_E: btn_middleZ,
        A_2_F: btn_middleZ,
        A_3_E: btn_up_R,
        B_1_D: btn_left_R,
        B_2_D: btn_middleZ_R,
        C_2_D: btn_middleZ_R,
        B_3_D: btn_left
    },
    A_2_F:{
        A_1_E: btn_up_R,
        A_2_D: btn_middleZ_R,
        A_2_E: btn_middleZ_R,
        A_3_E: btn_up,
        B_1_F: btn_right,
        B_2_F: btn_middleZ,
        B_3_F: btn_right_R,
        C_2_F: btn_middleZ,
    },
    A_3_E:{
        A_2_D: btn_up,
        A_2_E: btn_middleX_R,
        A_1_E: btn_middleX_R,
        A_2_F: btn_up_R,        
        B_3_D: btn_front_R,
        B_3_E: btn_middleX,
        C_3_E: btn_middleX,
        B_3_F: btn_front
    },
    B_1_D:{
        A_1_E: btn_back_R,
        B_1_E: btn_middleY_R,
        B_1_F: btn_middleY_R,
        C_1_E: btn_back,        
        A_2_D: btn_left,
        B_2_D: btn_middleY,
        B_3_D: btn_middleY,
        C_2_D: btn_left_R
    },    
    B_1_E: {
        A_1_E: btn_middleX,
        B_1_D: btn_middleY,
        B_1_F: btn_middleY_R,
        C_1_E: btn_middleX_R
    },
    B_1_F:{
        A_1_E: btn_back,
        B_1_E: btn_middleY,
        B_1_D: btn_middleY,
        C_1_E: btn_back_R,        
        A_2_F: btn_right_R,
        B_2_F: btn_middleY_R,
        B_3_F: btn_middleY_R,
        C_2_F: btn_right
    },
    B_2_D: {
        A_2_D: btn_middleZ,
        B_1_D: btn_middleY_R,
        B_3_D: btn_middleY,
        C_2_D: btn_middleZ_R
    },
    B_2_F: {
        A_2_F: btn_middleZ_R,
        B_1_F: btn_middleY,
        B_3_F: btn_middleY_R,
        C_2_F: btn_middleZ
    },
    B_3_D:{
        A_2_D: btn_left_R,
        B_2_D: btn_middleY_R,
        B_1_D: btn_middleY_R,
        C_2_D: btn_left,        
        A_3_E: btn_front,
        B_3_E: btn_middleY,
        B_3_F: btn_middleY,
        C_3_E: btn_front_R
    },
    B_3_E: {
        A_3_E: btn_middleX_R,
        B_3_D: btn_middleY_R,
        B_3_F: btn_middleY,
        C_3_E: btn_middleX
    },
    B_3_F:{
        A_2_F: btn_right,
        B_2_F: btn_middleY,
        B_1_F: btn_middleY,
        C_2_F: btn_right_R,        
        A_3_E: btn_front_R,
        B_3_E: btn_middleY_R,
        B_3_D: btn_middleY_R,
        C_3_E: btn_front
    },
    C_1_E:{
        B_1_D: btn_back_R,
        B_1_E: btn_middleX,
        A_1_E: btn_middleX,
        B_1_F: btn_back,
        C_2_D: btn_down,
        C_2_E: btn_middleX_R,
        C_3_E: btn_middleX_R,
        C_2_F: btn_down_R
    },
    C_2_D:{
        B_1_D: btn_left,
        B_2_D: btn_middleZ,
        A_2_D: btn_middleZ,
        B_3_D: btn_left_R,
        C_1_E: btn_down_R,
        C_2_E: btn_middleZ_R,
        C_2_F: btn_middleZ_R,
        C_3_E: btn_down
    },
    C_2_E: {
        C_1_E: btn_middleX,
        C_2_D: btn_middleZ,
        C_2_F: btn_middleZ_R,
        C_3_E: btn_middleX_R
    },
    C_2_F:{
        B_1_F: btn_right_R,
        B_2_F: btn_middleZ_R,
        A_2_F: btn_middleZ_R,
        B_3_F: btn_right,
        C_1_E: btn_down,
        C_2_E: btn_middleZ,
        C_2_D: btn_middleZ,
        C_3_E: btn_down_R
    },
    C_3_E:{
        B_3_D: btn_front,
        B_3_E: btn_middleX_R,
        A_3_E: btn_middleX_R,
        B_3_F: btn_front_R,        
        C_2_D: btn_down_R,
        C_2_E: btn_middleX,
        C_1_E: btn_middleX,
        C_2_F: btn_down
    }
}


