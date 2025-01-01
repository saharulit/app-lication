import { ReactSearchAutocomplete } from 'react-search-autocomplete';

interface Item {
  id: string;
  name: string;
  logo?: string;
}

interface AutocompleteProps<T extends Item> {   
  items: T[];
}

export const Autocomplete = <T extends Item>({ items }: AutocompleteProps<T>) => {
  const handleOnSelect = (item: T) => {
    console.log('Selected item:', item);
  };

  return (
    <div>
      <ReactSearchAutocomplete
        items={items}
        onSelect={handleOnSelect}
        autoFocus
        formatResult={(item: T) => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={item.logo}
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
