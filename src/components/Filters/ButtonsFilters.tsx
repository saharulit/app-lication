import React from 'react';
import Button from '../Button/Button';

export interface ButtonFilter {
  title?: string; //if no title, value would be the title
  value: string;
}

export interface ButtonsFiltersProps {
  filters: ButtonFilter[];
  selectedValues?: string[];
  onFilterChange: (value: string) => void;
}

const ButtonsFilters: React.FC<ButtonsFiltersProps> = ({
  filters,
  selectedValues,
  onFilterChange,
}) => {
  return (
    <div>
      {filters.map((filter) => (
        <Button
          key={filter.value}
          selected={selectedValues?.includes(filter.value)}
          mode="secondary"
          // style={{
          //   backgroundColor: filter.value === selectedValue ? 'blue' : 'gray',
          //   color: 'white',
          //   margin: '0 5px',
          //   padding: '10px',
          //   border: 'none',
          //   borderRadius: '5px',
          //   cursor: 'pointer',
          // }}
          onClick={() => onFilterChange(filter.value)}
        >
          {filter.title || filter.value}
        </Button>
      ))}
    </div>
  );
};

export default ButtonsFilters;
