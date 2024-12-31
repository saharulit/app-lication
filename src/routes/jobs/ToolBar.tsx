import React from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import ButtonsFilters from '../../components/Filters/ButtonsFilters';
import { ButtonFilter } from '../../components/Filters/ButtonsFilters';
import { Filters } from 'src/core/entities/appliedJob';
import { statusFilter } from './FiltersConfig';

interface ToolBarProps {
  searchTerm: string;
  activeFilters: Filters;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAddFilter: (name: string, value: string | string[]) => void;
  onRemoveFilter: (name: string, value: string | string[]) => void;
  onAddButton: () => void;
  filters: ButtonFilter[];
}

const ToolBar: React.FC<ToolBarProps> = ({
  searchTerm,
  activeFilters,
  onSearchChange,
  onAddFilter,
  onRemoveFilter,
  onAddButton,
}) => {
  return (
    <div className="flex md:flex-row flex-col w-full gap-3">
      <div className="grow">
        <Input
          name="search"
          type="text"
          placeholder="Search"
          value={searchTerm || ''}
          onChange={onSearchChange}
        />
      </div>
      <ButtonsFilters
        name="status"
        filters={statusFilter}
        selectedValues={(activeFilters?.status as string[]) || []}
        onAddFilter={onAddFilter}
        onRemoveFilter={onRemoveFilter}
      />
      <div className="grow" />
      <Button onClick={onAddButton}>+ Add</Button>
    </div>
  );
};

export default ToolBar;
