import React from 'react';
import {FlatList} from 'react-native';

import data from './data';
import PinnedItem from './PinnedItem';
import {Container} from './styles';

export default function PinnedList() {
  return (
    <Container>
      <FlatList
        contentContainerStyle={{
          paddingRight: 32,
          paddingLeft: 16,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        keyExtractor={item => item.id}
        renderItem={() => <PinnedItem />}
      />
    </Container>
  );
}
