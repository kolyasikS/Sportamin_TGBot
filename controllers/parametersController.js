import {CRUDMenu} from "../menus/menus.js";

export async function readParameters(parameters, chatID) {
    await CRUDMenu.send(chatID, parameters.text ? parameters.get() : `You haven't recorded anything yet...`);

}