// import React from 'react';

const Intro = ({ texto }) => {

  return (
    // <div>
    //   <h1>{texto}</h1>
    //   <h2>Saludos desde React</h2>
    // </div>
    // <React.Fragment>
    //   <h1>{texto}</h1>
    //   <h2>Saludos desde React</h2>
    // </React.Fragment>
    <>
      <h1>{texto}</h1>
      <h2>Saludos desde React</h2>
    </>
  );
};

export default Intro

