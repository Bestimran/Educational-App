import React from "react";
import './Home.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Home = () => {
  return (
  <div className="home mx-auto mt-5 rounded">
      <div className="p-5">
        <h5 className="text-danger fs-4">Start your favourite course...</h5>
        <h2 className="fs-1">Now learning from anywhere, and build your bright career.</h2>
        <p className="text-success fs-5">It has survived not only five centuries but also the leap into electronic typesetting.</p>
        <Link to='/course'><Button variant="warning">Start a Courses</Button></Link>
    </div>
  </div>
  );
};

export default Home;
