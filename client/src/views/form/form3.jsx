/*import React from 'react';
import { useState, useEffect } from 'react';
import styles from '../assets/styles/components/views/FormPage.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ErrorComun from '../components/ErrorComun';
import {getAllTemperaments } from '../redux/actions';
import axios from 'axios';
import { verificarCampos, verificarOrden, validate } from '../utils/validateFormPage';

//important: Aqui termina la validacion

const FormPage = () => {
	const mostrandoMensajeError = (error, mensaje) => {
		setAlerta({ error: error, mensaje: mensaje });
		setTimeout(() => {
			setAlerta({});
		}, 2000);
		return;
	};

	const URL_BASE = 'http://localhost:3001';

	const [selectedTemperaments, setSelectedTemperaments] = useState([]);
	const [ids, setIds] = useState([]);

	const dispatch = useDispatch();

	//Trae todos los temperamentos
	const allTemperaments = useSelector((state) => state.temperaments);

	useEffect(() => {
		dispatch(getAllTemperaments());
	}, []);

	//Creo el estado para el formulario
	const [form, setForm] = useState({
		name: '',
		image: '',
		heightMin: '',
		heightMax: '',
		weightMin: '',
		weightMax: '',
		temperament: '',
		life_spanMin: '',
		life_spanMax: '',
	});

	

	//Creo un formulario para los errores
	const [errors, setErrors] = useState({
		name: '',
		image: '',
		heightMin: '',
		heightMax: '',
		weightMin: '',
		weightMax: '',
		life_spanMin: '',
		life_spanMax: '',
	});

	const allIdsNames = async (arrayNames) => {
		let listTemperament = { listTemperaments: arrayNames };
		const idReturn = await axios.put(
			`${URL_BASE}/dogs/temperaments`,
			listTemperament,
		);
		setIds(idReturn.data);
	};

	useEffect(() => {
		allIdsNames(selectedTemperaments);
	}, [selectedTemperaments]);

	const navigate = useNavigate();

	//important: Fijarme este metodo falta terminar
	async function createDog({
		name,
		image,
		heightMin,
		heightMax,
		weightMin,
		weightMax,
		life_spanMax,
		life_spanMin,
	}) {
		const newDog = {
			name: name,
			image: image,
			height: `${heightMax} - ${heightMin}`,
			weight: `${weightMax} - ${weightMin}`,
			temperament: ids,
			life_span: `${life_spanMax} - ${life_spanMin} years`,
		};

		console.log(newDog)

		await axios
			.post(`${URL_BASE}/dogs`, newDog)
			.then((res) => {
				mostrandoMensajeError(false,"Creado con exito");
				window.location.reload();	
			})
			.catch((error) => {
				mostrandoMensajeError(true,"La raza ya existe!");
				window.location.reload();
			});

		
	}

	//Esta funcion va escribiendo en tiempo real
	//los atributos del formulario en el estado

	const handleChange = (event) => {
		const property = event.target.name;
		const value = event.target.value;

		console.log(value);

		setForm({ ...form, [property]: value, temperament: selectedTemperaments });

		setErrors(
			validate(
				{ ...form, [property]: value, temperament: selectedTemperaments },
				errors,
			),
		);
	};


	const submitHandler = (event) => {
		event.preventDefault();

		if (!verificarCampos(form)) {
			mostrandoMensajeError(true, 'Completa los campos!');
			return;
		}
		if (selectedTemperaments.length === 0){
			mostrandoMensajeError(true, 'Elija al menos un temperamento!');
			return;
		}
			if (!verificarOrden(form)) {
				mostrandoMensajeError(true, 'Debe ser menor al maximo!');
				return;
			}

		createDog(form);
	};

	const [alerta, setAlerta] = useState({});
	const { mensaje, error } = alerta;

	const handleChangeOption = (event) => {
		const selectedTemperament = event.target.value;
		if (event.target.checked) {
			setSelectedTemperaments([...selectedTemperaments, selectedTemperament]);
		} else {
			setSelectedTemperaments(
				selectedTemperaments.filter(
					(temperament) => temperament !== selectedTemperament,
				),
			);
		}
	}
}*/