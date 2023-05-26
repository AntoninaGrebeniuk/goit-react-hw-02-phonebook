// import { nanoid } from 'nanoid';
import { FilterLabel, FilterInput } from './Filter.styled';

// filterInput = nanoid();
export function Filter() {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" name="filter" />
    </FilterLabel>
  );
}
