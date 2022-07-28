import React from 'react';
import { List as ListChakra, ListIcon, ListItem } from '@chakra-ui/react';

interface Props {
  items: any;
  spacing?: number;
}

const ListSkills: React.FC<Props> = ({ items, spacing }) => {
  return (
    <ListChakra spacing={spacing}>
      {items.map((item: any) => {
        return (
          <ListItem key={item.name}>
            <ListIcon as={item.icon} color="blue.500" fontSize="2xl" />
            {item.name}
          </ListItem>
        );
      })}
    </ListChakra>
  );
};

export default ListSkills;

ListSkills.defaultProps = {
  spacing: 4,
};
