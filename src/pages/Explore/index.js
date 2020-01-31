import React from 'react';
import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BottomGradient from '~/components/BottomGradient';
import FloatingActionButton from '~/components/FloatingActionButton';
import ListHeader from '~/components/ListHeader';
import SearchBar from '~/components/SearchBar';

import data from './data';
import ExploreItem from './ExploreItem';
import PinnedList from './PinnedList';
import {Container} from './styles';

export default function Explore() {
  return (
    <>
      <Container>
        <FlatList
          contentContainerStyle={{
            paddingVertical: 80,
          }}
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            switch (item.type) {
              case 'header':
                return <ListHeader>{item.header}</ListHeader>;
              case 'pinned':
                return <PinnedList />;
              case 'item':
                return <ExploreItem />;
              default:
                return <ListHeader>{item.type}</ListHeader>;
            }
          }}
        />
      </Container>

      <SearchBar />

      <BottomGradient />

      <FloatingActionButton icon="playlist-add" />
    </>
  );
}

Explore.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({tintColor}) => ( /* eslint-disable-line */
    <Icon name="explore" color={tintColor} size={24} />
  ),
};
