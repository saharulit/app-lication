import React from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

interface ToolBarProps {
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ToolBar: React.FC<ToolBarProps> = ({ onSearchChange }) => {
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
      <Button>+ Add</Button>
    </div>
  );
};

export default ToolBar;
