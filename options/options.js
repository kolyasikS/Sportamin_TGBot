export const helpOptions = {
    reply_markup: JSON.stringify({
       inline_keyboard: [
           [{text: 'How to use the site?', callback_data: 'help_1'}],
           [{text: 'How to upload my course?', callback_data: 'help_2'}],
           [{text: 'How to buy a subscribe on a course?', callback_data: 'help_3'}],
           [{text: '<- Back', callback_data: 'to_back'}],
       ]
    })
}
export const workoutOptions = {
    reply_markup: JSON.stringify({
       inline_keyboard: [
           [{text: 'Timetable', callback_data: 'workout_timetable'}],
           [{text: 'Diet', callback_data: 'workout_diet'}],
           [{text: 'Parameters', callback_data: 'workout_parameters'}],
           [{text: '<- Back', callback_data: 'to_back'}],
       ]
    })
}

export const menuOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Help', callback_data: 'help'}, {text: 'Workout', callback_data: 'workout'}],
        ]
    })
}
export const CRUDMenuOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Set new', callback_data: 'crud_update'}]
        ]
    })
}