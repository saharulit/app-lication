import React from 'react';
import Button from '../Button/Button';

export interface ButtonFilter {
  title?: string; //if no title, value would be the title
  value: string;
}

export interface ButtonsFiltersProps {
  name: string
  filters: ButtonFilter[];
  selectedValues?: string[];
  onAddFilter:  (name: string, value: string | string[]) => void;
  onRemoveFilter:  (name: string, value: string | string[]) => void;
}

const ButtonsFilters: React.FC<ButtonsFiltersProps> = ({
  name,
  filters,
  selectedValues,
  onAddFilter,
  onRemoveFilter,
}) => {
  return (
    <div>
      {filters.map((filter) => (
        <Button
          key={filter.value}
          selected={selectedValues?.includes(filter.value)}
          mode="secondary"
          onClick={
            selectedValues?.includes(filter.value)
              ? () => onRemoveFilter(name, filter.value)
              : () => onAddFilter(name, filter.value)
          }
        >
          {filter.title || filter.value}
        </Button>
      ))}
    </div>
  );
};

export default ButtonsFilters;
