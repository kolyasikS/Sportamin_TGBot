import {CRUDMenu} from "../menus/menus.js";

export async function readDiet(diet, chatID) {
    await CRUDMenu.send(chatID, diet.text ? diet.get() : `You haven't recorded anything yet...`);
}

export async function updateDiet(diet, text) {

    diet.isBeingEdited = false;
}