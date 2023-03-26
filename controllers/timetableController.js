import {CRUDMenu} from "../menus/menus.js";

export async function readTimetable(timetable, chatID) {
    await CRUDMenu.send(chatID, timetable.text ? timetable.get() : `You haven't recorded anything yet...`);
}
export async function updateTimetable(timetable, text) {
    timetable.set(text);
    timetable.isBeingEdited = false;
}