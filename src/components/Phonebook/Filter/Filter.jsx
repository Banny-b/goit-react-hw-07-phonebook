import { useDispatch, useSelector } from 'react-redux';
import { filterValue, selectFilter } from '../../../redux/filterSlise';
import { Input, Span } from './Filter.styled';


export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const onChange = (event) => {
    dispatch(filterValue(event.target.value.toLowerCase()));
  }
  return (
    <label htmlFor="filter">
      <Span>Find contacts by name</Span>
      <Input onChange={onChange} type="filter" name="filter" value={filter}/>
    </label>
  );
};