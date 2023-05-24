const validate = ({name,image,lifeSpan,temperaments})=>{
    const errors = {}
    const regexImg = /(http(s?):)([/|.|\w|\s|-])*.(?:jpg|gif|png|pnj)/;
    let regexName= /([0-9])+/;

    if(!name.trim()) {
        errors.name= "breed is a required field"
    } else if (name.length >40 || name.length <2) {
        errors.name= "enter between 1 and 40 characters"
    } else if (regexName.test(name.trim())) {
        errors.name= "numbers are not allowed"
    }

    if(!lifeSpan){
        errors.lifeSpan= "life span is a required field"
    } 


    if (!image.trim()) {
        errors.image= "image is a required field"
    } else if (!regexImg.test(image.trim())) {
        errors.image= "Please insert a valid file"
    }

    if (!temperaments) {
        errors.temperaments= "Please choose at least one temperament"
    }

    return errors
}
export default validate;