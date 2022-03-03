const ColorObject = require('./Colors');

var DefaultUserStats = new Object()

DefaultUserStats = {
    health: 10,
    strength: 10,
    dexterity: 10,
    intelligence: 10,
    luck: 10,
    charisma: 10
}

const CreateUserStat = function(Values) {
    try {
        if (Values === undefined) {
            throw new Error('Values is undefined');
        }
        else {
            let UserStat = new DefaultUserStats()
            UserStat = {
                health: Values.health,
                strength: Values.strength,
                dexterity: Values.dexterity,
                intelligence: Values.intelligence,
                luck: Values.luck,
                charisma: Values.charisma
            }
            return UserStat
        }
    } catch (error) {
        return console.error(error)
    }
}

var DefaultWeaponStats = new Object()

DefaultWeaponStats = {
    dagger: 1,
    sword: 1,
    mace: 1,
    staff: 1,
    bow: 1,
    crossbow: 1,
    axe: 1,
    spear: 1,
    fist: 1
}

const CreateWeaponStat = function(Values) {
    try {
        if (Values === undefined) {
            throw new Error('Values is undefined');
        }
        else {
            let WeaponStat = new DefaultWeaponStats()
            WeaponStat = {
                dagger: Values.dagger,
                sword: Values.sword,
                mace: Values.mace,
                staff: Values.staff,
                bow: Values.bow,
                crossbow: Values.crossbow,
                axe: Values.axe,
                spear: Values.spear,
                fist: Values.fist
            }
            return WeaponStat
        }
    } catch (error) {
        return console.error(error)
    }
}

var DefaultApperance = new Object()

DefaultApperance = {
    model: 0,
    eyes: 0,
    hair: 0,
    hairColor: ColorObject.RGBColorObject,
    eyesColor: ColorObject.RGBColorObject,
    skinColor: ColorObject.RGBColorObject
}

const CreateApperance = function(Values) {
    try {
        if (Values === undefined) {
            throw new Error('Values is undefined');
        }
        else {
            let Apperance = new DefaultApperance()
            Apperance = {
                model: Values.model,
                eyes: Values.eyes,
                hair: Values.hair,
                hairColor: Values.hairColor,
                eyesColor: Values.eyesColor,
                skinColor: Values.skinColor
            }
            return Apperance
        }
    } catch (error) {
        return console.error(error)
    }
}

module.exports = {
    DefaultUserStats,
    CreateUserStat,
    DefaultWeaponStats,
    CreateWeaponStat,
    DefaultApperance,
    CreateApperance
}



