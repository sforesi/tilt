// import React, {useState} from 'react';

// function Form(props) {
//   const [gameTitle, setGameTitle] = useState('')

//   const handleSubmit = e => {
//     e.preventDefault();
//     props.handleSubmit(gameTitle)
//     setGameTitle('')
//   };

//   const handleChange = e => {
//     const title =  e.target.value
//     setGameTitle(title)
//   };

//     return (
//       <>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="gameTitle">BLABLABLA</label>
//           <input
//             id="gameTitle"
//             type="text"
//             value={gameTitle}
//             onChange={handleChange}
//           />
//           <input type="submit" value="Find GAME" />
//         </form>
//       </>
//     );
// }

// export default Form;