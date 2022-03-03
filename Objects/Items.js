const DefaultWeapon = new Object()

DefaultWeapon = {
    id: 0,
    name: '',
    type: '',
    damage: '',
    range: 0,
    price: 0,
    weight: 0,
    skin: '',
    minLevel: 0,
    class: '',
    rarity: 0,
}

const CreateWeapon = function(Values) {
    try {
        if (Values === undefined) {
            throw new Error('Values is undefined');
        }
        else {
            let Weapon = new DefaultWeapon()
            Weapon = {
                id: Values.id,
                name: Values.name,
                type: Values.type,
                price: Values.price,
                damage: Values.damage,
                range: Values.range,
                weight: Values.weight,
                skin: Values.skin,
                minLevel: Values.minLevel,
                class: Values.class,
                rarity: Values.rarity,
            }
            return Weapon
        }
    } catch (error) {
        return console.error(error)
    }
}

const DefaultArmor = new Object()

DefaultArmor = {
    id: 0,
    type: '',
    armorValue: '',
    weight: 0,
    price: 0,
    minLevel: 0,
    class: '',
    rarity: 0,
}

const CreateArmor = function(Values) {
    try {
        if (Values === undefined) {
            throw new Error('Values is undefined');
        }
        else {
            let Armor = new DefaultArmor()
            Armor = {
                id: Values.id,
                type: Values.type,
                armorValue: Values.armorValue,
                weight: Values.weight,
                price: Values.price,
                minLevel: Values.minLevel,
                class: Values.class,
                rarity: Values.rarity
            }
            return Armor
        }
    } catch (error) {
        return console.error(error)
    }
}

module.exports = {
    DefaultWeapon,
    CreateWeapon,
    DefaultArmor,
    CreateArmor
}