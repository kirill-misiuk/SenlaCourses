import React from 'react';
import ReactJson from 'react-json-view';

const InputField = (props) => {
  const {input, meta, label, type} = props;
  return (
      <div>
        <label>{label}</label>
        <input {...input} type={type} />
        {(meta.error && meta.touched) && <span style={{color: 'red'}}>{meta.error}</span>}
      </div>
  );
};

export default InputField;

// 1
// const InputField = (props) => {
//   // console.log(props);
//   const {input, meta, label, type} = props;
//   return (
//       <div>
//         <label>{label}</label>
//         <input {...input} type={type} />
//       </div>
//   );
// };

// 2
// const InputField = (props) => {
//   // console.log(props);
//   const {input, meta, label, type} = props;
//   return (
//       <div>
//         <label>{label}</label>
//         <input {...input} type={type} />
//         <ReactJson src={meta} />
//       </div>
//   );
// };

// 3
// const InputField = (props) => {
//   // console.log(props);
//   const {input, meta, label, type} = props;
//   return (
//       <div>
//         <label>{label}</label>
//         <input {...input} type={type} />
//         {/* <ReactJson src={meta} /> */}
//         {meta.error && <span style={{color: 'red'}}>{meta.error}</span>}
//       </div>
//   );
// };