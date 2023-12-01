const body = document.body;
const bodyStyles = window.getComputedStyle(body);
const cubeSeparation = bodyStyles.getPropertyValue("--cube-separation");
const cubeSize = bodyStyles.getPropertyValue("--size-little-cube");

const equivalentCubeSize =  window.innerWidth * (parseInt(cubeSize)  / 100 ) * parseFloat(cubeSeparation)



const negTranslateLittleCube = equivalentCubeSize * -1
const TranslateLittleCube = equivalentCubeSize


export const cubeDefaultPositions = {
    /* ---------UPPER LEVEL-------- */

    A_1_D: {
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: negTranslateLittleCube,
        tY: negTranslateLittleCube,
        tZ: negTranslateLittleCube
    },
    A_2_D: {
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: negTranslateLittleCube,
        tY: negTranslateLittleCube,
        tZ: 0
    },
    A_3_D: {
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: negTranslateLittleCube,
        tY: negTranslateLittleCube,
        tZ: TranslateLittleCube
    },
    A_1_E: {
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: 0,
        tY: negTranslateLittleCube,
        tZ: negTranslateLittleCube
    },
    A_2_E: {
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: 0,
        tY: negTranslateLittleCube,
        tZ: 0
    },
    A_3_E: {
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: 0,
        tY: negTranslateLittleCube,
        tZ: TranslateLittleCube
    },
    A_1_F: {
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: TranslateLittleCube,
        tY: negTranslateLittleCube,
        tZ: negTranslateLittleCube
    },
    A_2_F: {
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: TranslateLittleCube,
        tY: negTranslateLittleCube,
        tZ: 0
    },
    A_3_F: {
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: TranslateLittleCube,
        tY: negTranslateLittleCube,
        tZ: TranslateLittleCube
    },

    /* ---------MEDIUM LEVEL-------- */

    B_1_D: {
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: negTranslateLittleCube,
        tY: 0,
        tZ: negTranslateLittleCube
    },
    B_2_D: {
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: negTranslateLittleCube,
        tY: 0,
        tZ: 0
    },
    B_3_D: {
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: negTranslateLittleCube,
        tY: 0,
        tZ: TranslateLittleCube
    },
    B_1_E: {
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: 0,
        tY: 0,
        tZ: negTranslateLittleCube
    },
    B_2_E: {
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: 0,
        tY: 0,
        tZ: 0
    },
    B_3_E: {
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: 0,
        tY: 0,
        tZ: TranslateLittleCube
    },
    B_1_F: {
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: TranslateLittleCube,
        tY: 0,
        tZ: negTranslateLittleCube
    },
    B_2_F: {
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: TranslateLittleCube,
        tY: 0,
        tZ: 0
    },
    B_3_F: {
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: TranslateLittleCube,
        tY: 0,
        tZ: TranslateLittleCube
    },

    /* ---------LOWER LEVEL-------- */

    C_1_D: {
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: negTranslateLittleCube,
        tY: TranslateLittleCube,
        tZ: negTranslateLittleCube
    },
    C_2_D: {
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: negTranslateLittleCube,
        tY: TranslateLittleCube,
        tZ: 0
    },
    C_3_D: {
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: negTranslateLittleCube,
        tY: TranslateLittleCube,
        tZ: TranslateLittleCube
    },
    C_1_E: {
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: 0,
        tY: TranslateLittleCube,
        tZ: negTranslateLittleCube
    },
    C_2_E: {
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: 0,
        tY: TranslateLittleCube,
        tZ: 0
    },
    C_3_E: {
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: 0,
        tY: TranslateLittleCube,
        tZ: TranslateLittleCube
    },
    C_1_F: {
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: TranslateLittleCube,
        tY: TranslateLittleCube,
        tZ: negTranslateLittleCube
    },
    C_2_F: {
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: TranslateLittleCube,
        tY: TranslateLittleCube,
        tZ: 0
    },
    C_3_F: {
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: TranslateLittleCube,
        tY: TranslateLittleCube,
        tZ: TranslateLittleCube
    }
}

