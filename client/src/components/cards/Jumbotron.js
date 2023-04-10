import React from 'react';

const Jumbotron = ({title, subtitle = "Welcome to Marketry",}) => {
    return (
        <div className="container-fluid jumbotron" style={{ marginTop: "-8px", height: "200px" }}>
            <div className="row">
                <div className="col text-center p-5"></div>
                <h1 className="fw-bold">{title}</h1>
                <p className="lead">{subtitle}</p>
            </div>
        </div>
    );
};

export default Jumbotron;