/*import React, { useState, useEffect } from "react";
import axios from "axios";
import validate from "./validate";
import { useDispatch, useSelector } from "react-redux";
import {getTemperaments } from "../../redux/actions";
import style from "./form.module.css";

const Form = () => {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);
  const [selectedTemperaments, setSelectedTemperaments] = useState([]);

  const [form, setForm] = useState({
    image: "",
    name: "",
    height: "",
    weight: "",
    lifeSpan: "",
    temperaments: [],
  });
  const [errors, setErrors] = useState({
    image: "",
    name: "",
    height: "",
    weight: "",
    lifeSpan: "",
    temperaments: [],
  });
  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
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
  };
  const submitHandler = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/dog", form)
      .then((response) => {
        console.log(response.data);
        alert("Dog successfully added");
        setForm({
            image: "",
            name: "",
            height: "",
            weight: "",
            lifeSpan: "",
            temperaments: [],
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Error adding dog");
      });
  };
  
  const handleCheckboxChange = (event) => {
    const temperament = event.target.value;
    if (event.target.checked) {
      setSelectedTemperaments([...selectedTemperaments, temperament]);
    } else {
      setSelectedTemperaments(
        selectedTemperaments.filter((temp) => temp !== temperament)
      );
    }
  };

  const deleteHandler = (temp) => {
    // esta f(n) me permite borrar un temp que no quiera antes de crear el perro
    setForm({
      temperaments: form.temperaments.filter((inst) => inst !== temp),
    });
  };

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  return (
    <form onSubmit={submitHandler} className={style.formContainer}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={form.name}
          onChange={(event) => changeHandler(event)}
          name="name"
          placeholder="example: Paco Pisoni"
        />
        {errors.name && <span>{errors.name}</span>}
      </div>

      <div>
        <label>Image</label>
        <input
          type="text"
          value={form.image}
          onChange={(event) => changeHandler(event)}
          name="image"
          placeholder="example: https://ibb.co/6sdkMdf.jpg"
        />
        {errors.image && <span>{errors.image}</span>}
      </div>

      <div>
        <label>Height</label>
        <input
          type="text"
          value={form.height}
          onChange={(event) => changeHandler(event)}
          name="height"
          placeholder="example: 35 cm"
        />
        {errors.height && <span>{errors.height}</span>}
      </div>

      <div>
        <label>Weight</label>
        <input
          type="text"
          value={form.weight}
          onChange={changeHandler}
          name="weight"
          placeholder="example: 8 kg"
        />
        {errors.weight && <span>{errors.weight}</span>}
      </div>

      <div>
        <label>Life Span</label>
        <input
          type="text"
          value={form.lifeSpan}
          onChange={(event) => changeHandler(event)}
          name="lifeSpan"
          placeholder="example: 10 - 15 years"
        />
      </div>

      <div>
        <label>Selecciona los temperamentos:</label>
        <div className="temperament-container">
          {temperaments.map((temperament, index) => (
            <div className="temperament-item" key={index}>
              <input
                className="temperament-checkbox"
                type="checkbox"
                id={`temperament-${index}`}
                name="temperaments"
                value={temperament}
                checked={selectedTemperaments.includes(temperament)}
                onChange={handleCheckboxChange}
              />
              <label htmlFor={`temperament-${index}`}>{temperament}</label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <button
          type="submit"
        >
          Create my dog
        </button>
        {errors.temperaments && <strong>{errors.temperaments}</strong>}
      </div>

      <div>
        {form.temperaments.map((temp) => (
          <div>
            <p>{temp}</p>
            <button onClick={() => deleteHandler(temp)}>delete</button>
          </div>
        ))}
      </div>
    </form>
  );
};

export default Form;*/