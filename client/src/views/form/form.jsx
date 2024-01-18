import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./form.module.css";
import validate from "./validate";
import axios from "axios";
import { getTemperaments } from "../../redux/actions";

const Form = () => {
    const dispatch = useDispatch();
    const allTemperaments = useSelector((state) => state.temperaments);

    useEffect(() => {
        dispatch(getTemperaments());
    }, []);

    const [form, setForm] = useState({
        name: "",
        image: "",
        height: "",
        weight: "",
        lifeSpan: "",
        temperaments: [],
    });

    const [errors, setErrors] = useState({
        name: "",
        image: "",
        height: "",
        weight: "",
        lifeSpan: "",
    });

    const changeHandler = (event) => {
        const { name, value, type, checked } = event.target;

        if (type === "checkbox") {
            const updatedTemperaments = checked
                ? [...form.temperaments, value]
                : form.temperaments.filter((temp) => temp !== value);

            setForm({
                ...form,
                temperaments: updatedTemperaments,
            });
        } else {
            setForm({
                ...form,
                [name]: value,
            });

            setErrors(
                validate({
                    ...form,
                    [name]: value,
                })
            );
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(form);
        axios
            .post("http://localhost:3001/dog", form)
            .then((res) => alert(res))
            .catch((err) => alert(err));
    };

    return (
        <div className={style.formContainer} onSubmit={submitHandler}>
            <form className={style.container}>
                <div className={style.contentContainer}>
                    <label>Breed:</label>
                    <input
                        className={style.input}
                        type="text"
                        value={form.name}
                        onChange={changeHandler}
                        name="name"
                    />
                </div>
                {errors.name && (
                    <span className={style.span}>{errors.name}</span>
                )}
                <div className={style.contentContainer}>
                    <label>Image:</label>
                    <input
                        className={style.input}
                        type="text"
                        value={form.image}
                        onChange={changeHandler}
                        name="image"
                    />
                </div>
                {errors.image && (
                    <span className={style.span}>{errors.image}</span>
                )}
                <div className={style.contentContainer}>
                    <label>Height:</label>
                    <input
                        className={style.input}
                        type="text"
                        value={form.height}
                        onChange={changeHandler}
                        name="height"
                    />
                </div>
                {errors.height && (
                    <span className={style.span}>{errors.height}</span>
                )}
                <div className={style.contentContainer}>
                    <label>Weight:</label>
                    <input
                        className={style.input}
                        type="text"
                        value={form.weight}
                        onChange={changeHandler}
                        name="weight"
                    />
                </div>
                {errors.weight && (
                    <span className={style.span}>{errors.weight}</span>
                )}
                <div className={style.contentContainer}>
                    <label>Life Span:</label>
                    <input
                        className={style.input}
                        type="text"
                        value={form.lifeSpan}
                        onChange={changeHandler}
                        name="lifeSpan"
                    />
                </div>
                {errors.lifeSpan && (
                    <span className={style.span}>{errors.lifeSpan}</span>
                )}

                <div className={style.temperament}>
                    <label
                        className={style.labelTemperaments}
                        htmlFor="temperament"
                    >
                        Temperaments:
                    </label>
                    <div className={style.boxTemperaments}>
                        {allTemperaments.map((temperament) => (
                            <div key={temperament}>
                                <input
                                    type="checkbox"
                                    value={temperament}
                                    onChange={changeHandler}
                                    checked={form.temperaments.includes(
                                        temperament
                                    )}
                                />
                                <label className={style.itemTemperament}>
                                    {temperament}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.buttonContainer}>
                    <button className={style.button} type="submit">
                        CREATE
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
