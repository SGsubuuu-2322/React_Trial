// import React from "react";

import { useForm } from "react-hook-form";

// import { useState } from "react";
// import { useRef } from "react";

function Form() {
  //   const name = useRef(null);
  //   const age = useRef(null);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(name.current.value);
  //     console.log(age.current.value);
  //   };

  //   const [val, setVal] = useState({ name: "" });

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(val.name);
  //   };

  const { register, handleSubmit } = useForm();

  return (
    <div>
      {/* <form action="post" onSubmit={handleSubmit} className="p-4 flex">
        <input
          //   ref={name}
          onChange={(event) => setVal({ name: event.target.value })}
          type="text"
          name="name"
          placeholder="Enter your name"
        />
        <input
        //   ref={age}
          type="number"
          name="age"
          placeholder="Enter your age"
        />
        <input type="submit" value="Submit" />
      </form> */}
      <form action="post" onSubmit={handleSubmit((data) => console.log(data))}>
        <input
          {...register("name")}
          type="text"
          name="name"
          placeholder="name"
        />
        <input
          {...register("email")}
          type="email"
          name="email"
          placeholder="email"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
