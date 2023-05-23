import style from './form.module.css'


const Form = () => {
    return(
        <div className={style.formContainer} >
            <form className={style.container} >
                <div className={style.contentContainer} >
                    <label> Breed: </label>
                    <input className={style.input} ></input>
                </div>
                <div className={style.contentContainer} >
                    <label> Image: </label>
                    <input className={style.input} ></input>
                </div>
                <div className={style.contentContainer} >
                    <label> Height: </label>
                    <input className={style.input} ></input>
                </div>
                <div className={style.contentContainer} >
                    <label> Weight: </label>
                    <input className={style.input} ></input>
                </div>
                <div className={style.contentContainer} >
                    <label> Life Span: </label>
                    <input className={style.input} ></input>
                </div>
                <div className={style.contentContainer} >
                    <label> Temperaments: </label>
                    <input className={style.input} ></input>
                </div>
                <div className={style.contentContainer} >
                    <label> Created: </label>
                    <input className={style.input} ></input>
                </div>
                <div className={style.buttonContainer} >
                    <button className={style.button} > SEND </button>
                </div>
            </form>
        </div>
    )
}

export default Form