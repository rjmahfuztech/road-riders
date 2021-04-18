import React, { useState } from 'react';
import Sidebar from '../Sheared/Sidebar/Sidebar';

const AddService = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleAddService = e => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('price', info.price);
        formData.append('description', info.description);

        fetch('https://fathomless-cliffs-04770.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Service added successfully')
                }
            })
            .catch(error => {
                console.error(error)
            })
        e.preventDefault();
    };

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleChangeFile = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    return (
        <div className="container">
            <div className="margin">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-9">
                        <form onSubmit={handleAddService}>
                            <h2 className="mb-5">Add Service</h2>
                            <div className="row">
                                <div className="mb-3 col-md-4">
                                    <label className="form-label">Service Title</label>
                                    <input onBlur={handleBlur} name="title" type="text" className="form-control" placeholder="Service title" required />
                                </div>
                                <div className="mb-3 col-md-2">
                                    <label className="form-label">Price</label>
                                    <input onBlur={handleBlur} name="price" type="number" className="form-control" placeholder="Price" required />
                                </div>
                                <div className="mb-3 col-md-4">
                                    <label className="form-label">Upload Image</label>
                                    <label htmlFor="file-style" className="text-center form-control">Select Image</label>
                                    <input type="file" id="file-style" onChange={handleChangeFile} className="d-none" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-3 col-md-10">
                                    <label className="form-label">Description</label>
                                    <textarea onBlur={handleBlur} name="description" className="form-control" rows="6" placeholder="Service description" required></textarea>
                                </div>
                            </div>
                            <div className="mb-3 text-right col-md-10">
                                <div className="btn-bg-color">
                                    <button type="submit" className="btn text-white btn-style">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;