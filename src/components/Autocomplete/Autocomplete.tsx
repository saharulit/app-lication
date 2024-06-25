// import { useState } from "react";
// import Input from "../Input/Input";

// interface AutocompleteProps {
//   options?: { label: string, value: string }[];
//   placeholder: string;
// }

// export default function Autocomplete({ options, placeholder }: AutocompleteProps) {
//   const [inputValue, setInputValue] = useState('');
//   const [filteredOptions, setFilteredOptions] = useState(options);

//   const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInputValue(e.target.value);
//     console.log(e.target.value);
//     console.log('fire change');
//     // setFilteredOptions(options.filter(option => option.label.toLowerCase().includes(e.target.value.toLowerCase())));
//   }
//   return (
//     <>
//     {inputValue}
//     <Input type="text" placeholder={placeholder} onInput={handleInput}/>
//     <div className="bg-white rounded-lg p-4">
//       {filteredOptions?.map((option, index) => (
//         <div key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
//           {option.label}
//         </div>
//       ))}
//     </div>
//     </>
//   )
// }