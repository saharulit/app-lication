import React from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

interface ToolBarProps {
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAddButton: () => void;
}

const ToolBar: React.FC<ToolBarProps> = ({ onSearchChange, onAddButton }) => {
  return (
    <div className="flex flex-row w-full gap-3">
      <div className="grow">
        <Input
          name="search"
          type="text"
          placeholder="Search"
          onChange={onSearchChange}
        />
      </div>
      <div className="grow" />
      <Button onClick={onAddButton}>+ Add</Button>
    </div>
  );
};

export default ToolBar;
