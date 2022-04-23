import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';
import { CgSearch } from 'react-icons/cg';

interface Props {
  // eslint-disable-next-line no-unused-vars
  handleFilter: (value: string) => void;
}

const SearchInput: React.FC<Props> = ({ handleFilter }) => {
  return (
    <InputGroup mb="10">
      <InputLeftElement pointerEvents="none">
        <CgSearch color="gray.300" />
      </InputLeftElement>
      <Input
        type="tel"
        placeholder="Search for a post by title"
        onChange={(e) => handleFilter(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchInput;
