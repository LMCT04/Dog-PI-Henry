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
            .then((res) => {
                console.log(res);
                alert("Perro creado exitosamente");
            })
            .catch((err) => {
                console.error(err);
                alert("Error al crear el Perro");
            });
    };

    return (
        <>
            <div className={style.background}>
                <div className={style.boxTitle}>
                    <h1 className={style.h1}>
                        COMPLETE THE FORM AND CREATE A DOG
                    </h1>
                </div>
                <div className={style.boxForm}>
                    <div className={style.formBox} onSubmit={submitHandler}>
                        <form className={style.form}>
                            <div className={style.box1}>
                                <div className={style.bodyForm}>
                                    <div className={style.inpCont}>
                                        <label className={style.lb}>
                                            Breed:
                                        </label>

                                        <input
                                            className={style.input}
                                            type="text"
                                            value={form.name}
                                            onChange={changeHandler}
                                            name="name"
                                        />
                                        {errors.name && (
                                            <span className={style.span}>
                                                {errors.name}
                                            </span>
                                        )}
                                    </div>
                                    <div className={style.inpCont}>
                                        <label className={style.lb}>
                                            Image:
                                        </label>

                                        <input
                                            className={style.input}
                                            type="text"
                                            value={form.image}
                                            onChange={changeHandler}
                                            name="image"
                                        />
                                        {errors.image && (
                                            <span className={style.span}>
                                                {errors.image}
                                            </span>
                                        )}
                                    </div>
                                    <div className={style.inpCont}>
                                        <label className={style.lb}>
                                            Height:
                                        </label>

                                        <input
                                            className={style.input}
                                            type="text"
                                            value={form.height}
                                            onChange={changeHandler}
                                            name="height"
                                        />
                                        {errors.height && (
                                            <span className={style.span}>
                                                {errors.height}
                                            </span>
                                        )}
                                    </div>
                                    <div className={style.inpCont}>
                                        <label className={style.lb}>
                                            Weight:
                                        </label>

                                        <input
                                            className={style.input}
                                            type="text"
                                            value={form.weight}
                                            onChange={changeHandler}
                                            name="weight"
                                        />
                                        {errors.weight && (
                                            <span className={style.span}>
                                                {errors.weight}
                                            </span>
                                        )}
                                    </div>
                                    <div className={style.inpCont}>
                                        <label className={style.lb}>
                                            Life Span:
                                        </label>

                                        <input
                                            className={style.input}
                                            type="text"
                                            value={form.lifeSpan}
                                            onChange={changeHandler}
                                            name="lifeSpan"
                                        />
                                        {errors.lifeSpan && (
                                            <span className={style.span}>
                                                {errors.lifeSpan}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className={style.btnBox}>
                                    <button className={style.btn} type="submit">
                                        CREATE
                                    </button>
                                </div>
                            </div>
                            <div className={style.content3}>
                                <div className={style.scrollBg}>
                                    <div className={style.titleTemps}>
                                        <label
                                            className={style.h1b}
                                            htmlFor="temperament"
                                        >
                                            SELECT THE TEMPERAMENTS
                                        </label>
                                    </div>
                                    <div className={style.scrollBox}>
                                        {allTemperaments.map((temperament) => (
                                            <div
                                                key={temperament}
                                                className={style.temps}
                                            >
                                                <input
                                                    type="checkbox"
                                                    value={temperament}
                                                    onChange={changeHandler}
                                                    checked={form.temperaments.includes(
                                                        temperament
                                                    )}
                                                />
                                                <label
                                                    className={
                                                        style.itemTemperament
                                                    }
                                                >
                                                    {temperament}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form;
