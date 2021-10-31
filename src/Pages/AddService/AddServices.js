import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css'

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://thawing-escarpment-98208.herokuapp.com/services', data)
        .then(res => {
            if(res.data.insertedId){
                alert('successfully added')
                reset()
            }
        })
    }
    return (
        <div className="add-services">
            <h2>Add services</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name"/>
            <input {...register("packages")} placeholder="Add Packages"/>
            <input {...register("img")} placeholder="Image URL"/>
            <textarea className="mb-2" {...register("description")} placeholder="Description"/> 
            <input type="number" {...register("price")} placeholder="Price"/>
            <input type="submit" />
            </form>
        </div>
    );
};

export default AddServices;