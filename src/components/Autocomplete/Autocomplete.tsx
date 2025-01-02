import { ReactSearchAutocomplete } from 'react-search-autocomplete';

export interface Item {
  id: string;
  name: string;
  iconUrl?: string;
}

interface AutocompleteProps<T extends Item> {
  items: T[];
  handleOnSelect: (item: T) => void;
  handleSearch: (query: string) => void;
}

export const Autocomplete = <T extends Item>({
  items,
  handleOnSelect,
  handleSearch,
}: AutocompleteProps<T>) => {
  return (
    <div>
      <ReactSearchAutocomplete
        items={items}
        onSearch={handleSearch}
        onSelect={handleOnSelect}
        autoFocus
        formatResult={(item: T) => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={item.iconUrl}
              alt={item.name}
              style={{ width: '30px', height: '30px', marginRight: '10px' }}
            />
            <span>{item.name}</span>
          </div>
        )}
      />
    </div>
  );
};
