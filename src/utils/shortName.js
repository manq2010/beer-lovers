import React from 'react';

const shortName = (name, size) => {
  if (name.length > size) {
    return name.split(' ')[0];
  }
  return (

    <div>
      {name}
    </div>
  );
};

export default shortName;

// const shortName = (name) => {
//   if (name.length > 12) {
//     return name.split(' ')[0];
//   }
//   return name;
// };
