const validate = ({name,image,lifeSpan,temperaments, weight, height})=>{
    const errors = {}
    const regexImg = /(http(s?):)([/|.|\w|\s|-])*.(?:jpg|gif|png|pnj)/;
    let regexName= /([0-9])+/;

    if(!name.trim()) {
        errors.name= "This is a required field"
    } else if (name.length >40 || name.length <2) {
        errors.name= "enter between 1 and 40 characters"
    } else if (regexName.test(name.trim())) {
        errors.name= "numbers are not allowed"
    }

    if(!lifeSpan){
        errors.lifeSpan= "This is a required field, (e.g. 40 - 55 years)"
    } 


    if (!image.trim()) {
        errors.image= "This is a required field"
    } else if (!regexImg.test(image.trim())) {
        errors.image= "Please insert a valid file"
    }

    if (!temperaments) {
        errors.temperaments= "Please choose at least one temperament"
    }

    if(!height) {
        errors.height = 'This is a required field, (e.g. 40 - 55)'
    }

    if(!weight) {
        errors.weight = 'This is a required field, (e.g. 40 - 55)'
    }

    return errors
}
export default validate;