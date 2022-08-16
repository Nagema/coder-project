import React, { useContext }from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import constants from '../../utils/constants';
import { Search } from '../../context/SearchContext';

function SearchInput() {

  const { searchInput, setSearchInput } = useContext(Search);

  return (
    <>
        <Form className="d-flex">
            <FormControl
                type="search"
                placeholder={constants.search}
                className="me-2"
                aria-label="Search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
        </Form>
    </>
  )
}

export default SearchInput