import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

export type FilterValue = string | string[];
export type FilterConfig = {
  allowedFilters: Record<
    string,
    {
      values: FilterValue;
      validate?: boolean;
    }
  >;
};

interface UseFiltersProps {
  config: FilterConfig;
}

interface UseFiltersResult {
  activeFilters: Record<string, string | string[]>;
  addFilter: (name: string, value: string | string[]) => void;
  removeFilter: (name: string, value: string | string[]) => void;
  clearFilters: () => void;
}

const useFilters = ({ config }: UseFiltersProps): UseFiltersResult => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filters, setFilters] = useState<Record<string, string | string[]>>({});

  const validateFilter = useCallback(
    (key: string, value: string | string[]) => {
      const filterConfig = config.allowedFilters[key];
      if (!filterConfig.validate) {
        return value;
      }

      const allowedValues = filterConfig.values;

      if (Array.isArray(allowedValues)) {
        return Array.isArray(value)
          ? value.filter((val) => allowedValues.includes(val))
          : allowedValues.includes(value)
          ? value
          : null;
      }

      return allowedValues.includes(value as string) ? value : null;
    },
    [config.allowedFilters]
  );

  // Parsing the query string and setting the filters
  useEffect(() => {
    const queryParams = queryString.parse(location.search);
    const newFilters = Object.keys(queryParams).reduce((acc, key) => {
      const filterValue = queryParams[key];

      if (key in config.allowedFilters) {
        if (filterValue) {
          const isArrayAllowed = Array.isArray(
            config.allowedFilters[key].values
          );

          if (isArrayAllowed) {
            // Ensure it's an array and filter only allowed values
            acc[key] = Array.isArray(filterValue)
              ? filterValue
                  .flatMap((val) => val?.split(',')) // Split by comma
                  .map((val) => validateFilter(key, val.trim())) // Validate each value
                  .filter((val): val is string => val !== null) // Filter out nulls
              : [
                  filterValue
                    .split(',')
                    .map((val) => validateFilter(key, val.trim())),
                ]
                  .flat()
                  .filter((val): val is string => val !== null);
          } else {
            // Single value filter, ensure it's validated
            acc[key] = validateFilter(
              key,
              Array.isArray(filterValue)
                ? (filterValue[0] as string)
                : filterValue
            );
          }
        }
      }
      return acc;
    }, {} as Record<string, string | string[]>);

    setFilters(newFilters);
  }, [config.allowedFilters, location.search, validateFilter]);

  // Update the URL based on the filters
  const updateUrl = (newFilters: Record<string, string | string[]>) => {
    const queryParams = Object.entries(newFilters).reduce(
      (acc, [key, value]) => {
        if (Array.isArray(value)) {
          acc[key] = value
            .filter((val): val is string => val !== null)
            .join(',');
        } else {
          acc[key] = value;
        }
        return acc;
      },
      {} as Record<string, string>
    );
    navigate({ search: queryString.stringify(queryParams) });
  };

  const addFilter = (name: string, value: string | string[]) => {
    setFilters((prevFilters) => {
      const isArrayAllowed = Array.isArray(config.allowedFilters[name].values);
      const currentValue = prevFilters[name];
      let updatedValue: string | string[];

      if (isArrayAllowed) {
        // Handle array filters (e.g., status)
        updatedValue = Array.isArray(currentValue)
          ? Array.isArray(value)
            ? [...currentValue, ...value]
            : [...currentValue, value]
          : Array.isArray(value)
          ? [currentValue, ...value]
          : [currentValue, value];
      } else {
        // Handle single value filters (e.g., search)
        updatedValue = Array.isArray(value) ? value[0] : value;
      }

      const updatedFilters = { ...prevFilters, [name]: updatedValue };
      updateUrl(updatedFilters);
      return updatedFilters;
    });
  };

  const removeFilter = (name: string, value?: string | string[]) => {
    setFilters((prevFilters) => {
      const currentValue = prevFilters[name];

      if (Array.isArray(currentValue)) {
        const updatedValue = currentValue.filter((val) => val !== value);
        const updatedFilters = { ...prevFilters };

        if (updatedValue.length > 0) {
          updatedFilters[name] = updatedValue;
        } else {
          delete updatedFilters[name];
        }

        updateUrl(updatedFilters);
        return updatedFilters;
      } else {
        const updatedFilters = { ...prevFilters };
        delete updatedFilters[name];
        updateUrl(updatedFilters);
        return updatedFilters;
      }
    });
  };

  const clearFilters = () => {
    setFilters({});
    updateUrl({});
  };

  return {
    activeFilters: filters,
    addFilter,
    removeFilter,
    clearFilters,
  };
};

export default useFilters;
