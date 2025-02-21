import React from 'react';
import ImgMediaCard from '../components/Card';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh"
    }}>
      <ImgMediaCard />
    </div>
  );
};

export default Home;
