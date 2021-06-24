import React from 'react';


export default function Contact(){
    return(
        <div className="container">
        <section id="about" className="card border-light">
            <h2 className="card-header">Contact</h2>
            <form className="card-body">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="4" required></textarea>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
        </section>
        </div>
    )
}