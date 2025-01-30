import React from "react";

export const EventHandling = () => {
  //     function handleButtonClick() {
  //         alert("Hey I am onClick Event")
  //     }
  const handleButtonClick = (event) => {
    console.log(event);
    
    alert("Hey onclick event here");
  };
    return (
      <>
        <button onClick={handleButtonClick}>Click Me here</button>
        <br/>
        <button onClick={() => handleButtonClick(event)}>Click Me 2 here</button>
      </>
    );
  };

