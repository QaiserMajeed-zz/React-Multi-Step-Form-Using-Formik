// import * as React from "react";
// import { render } from "react-dom";
// import { Formik, Field } from "formik";

// export function checkbox(props:any) {
//     return (
//       <Field name={props.name}>
//       //@ts-ignore
//         {({ field, form }) => (
          
//             <input
//               type="checkbox"
//               {...props}
//               checked={field.value.includes(props.value)}
//               onChange={() => {
//                 if (field.value.includes(props.value)) {
//                   const nextValue = field.value.filter(
//                     (value:any) => value !== props.value
//                   );
//                   form.setFieldValue(props.name, nextValue);
//                 } else {
//                   const nextValue = field.value.concat(props.value);
//                   form.setFieldValue(props.name, nextValue);
//                 }
//               }}
//             />
           
          
//         )}
//       </Field>
//     );
//   }