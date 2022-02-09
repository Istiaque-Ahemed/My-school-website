import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const PostNotices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/schoolNotices', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Notices Posted')
                    reset()
                }
            })
    };

    return (
        <>
            <h3>Add Notices</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("notice")} />
                <input type="submit" />
            </form>
        </>
    );

};

export default PostNotices;     