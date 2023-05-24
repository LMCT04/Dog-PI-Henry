/*import { useState } from 'react';
import style from './form.module.css';
import validate from './validate';
import axios from 'axios';
import { getTemperaments } from '../../redux/actions'

const Form = () => {
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
    temperaments: "",
  });

  const temperaments = getTemperaments.map((temperament) => temperament.name);

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    if (property === "temperaments") {
      const selectedTemperaments = form.temperaments.slice();
      if (!selectedTemperaments.includes(value)) {
        selectedTemperaments.push(value);
      }

      setForm({
        ...form,
        [property]: selectedTemperaments,
      });
    } else {
      setErrors(
        validate({
          ...form,
          [property]: value,
        })
      );

      setForm({
        ...form,
        [property]: value,
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
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
        {errors.name && <span className={style.span}>{errors.name}</span>}
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
        {errors.image && <span className={style.span}>{errors.image}</span>}
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
        {errors.height && <span className={style.span}>{errors.height}</span>}
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
        {errors.weight && <span className={style.span}>{errors.weight}</span>}
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
        {errors.lifeSpan && <span className={style.span}>{errors.lifeSpan}</span>}
        <div className={style.contentContainer}>
          <label>Temperaments:</label>
          <select
            className={style.input}
            value=""
            onChange={changeHandler}
            name="temperaments"
            multiple
          >
            {temperaments.map((temperament) => (
              <option key={temperament} value={temperament}>
                {temperament}
              </option>
            ))}
          </select>
        </div>
        {errors.temperaments && (
          <span className={style.span}>{errors.temperaments}</span>
        )}
        <div className={style.buttonContainer}>
          <button className={style.button} type="submit">
            CREATE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;*/
