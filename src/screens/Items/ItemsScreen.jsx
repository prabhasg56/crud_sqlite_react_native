import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, fetchItems } from '../../database/itemsModel';
import { removeItem, setItems } from '../../redux/Features/itemsSlice';
import ScreenWrapper from '../../components/ScreenWrapper';
import Item from '../../components/Items/Item';
import CustomButton from '../../components/Common/CustomButton';
import CustomText from '../../components/Common/CustomText';
import { primaryColor } from '../../styles/GlobalStyles';
import { useFocusEffect } from '@react-navigation/native';

const ItemsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  const items = useSelector(state => state.items.items);

  const loadItems = async () => {
    const data = await fetchItems();
    dispatch(setItems(data));
  };

  useFocusEffect(
    useCallback(() => {
      loadItems();
    }, [])
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await loadItems();
    setRefreshing(false);
  };

  const handleAddEditScreenNavigation = () => {
    navigation.navigate('AddEditScreen');
  };

  const handleDelete = useCallback(async (id) => {
    try {
      await deleteItem(id);
      dispatch(removeItem(id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  }, [dispatch]);

  const handleEdit = useCallback((item) => {
    navigation.navigate('AddEditScreen', { item });
  }, [navigation]);

  const renderItems = useCallback(({ item }) => (
    <Item item={item} onDelete={handleDelete} onEdit={handleEdit} />
  ), [handleDelete, handleEdit]);

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {items?.length ? <CustomText style={styles.heading}>Your Task List</CustomText> : null}

        <FlatList
          data={items}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItems}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListEmptyComponent={
            <View style={styles.empty}>
              <CustomText>No items available. Please add a new task.</CustomText>
            </View>
          }
        />
        <CustomButton onPress={handleAddEditScreenNavigation} label="+ Add Item" />
      </View>
    </ScreenWrapper>
  );
};

export default ItemsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  empty: {
    alignItems: 'center',
    marginTop: 20
  },
  heading: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
    color:primaryColor
  }

});
