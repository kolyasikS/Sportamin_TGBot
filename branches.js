
const branches = {
    timetable: {
        current: false,
        value: null
    },
    diet: {
        current: false,
        value: null
    },
    parameters: {
        current: false,
        value: null
    },
};
export function initBranches(_branches) {
    for (const branchKey in branches) {
        for (let i = 0; i < _branches.length; i++) {
            if (branchKey == _branches[i].__proto__.constructor.name.toLowerCase()) {
                branches[branchKey].value = _branches[i];
                break;
            }
        }
    }
}
export function setBranch(branch) {
    for (const branchKey in branches) {
        if (branches[branchKey].value != branch) {
            branches[branchKey].current = false;
        } else {
            branches[branchKey].current = true;
        }
    }
}

export function getBranch() {
    for (const branchKey in branches) {
        if (branches[branchKey].current) {
            return [branches[branchKey].value, branches[branchKey].value.__proto__.constructor.name];
        }
    }
}