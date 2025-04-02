import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { dangerBtnColor, primaryColor } from '../../styles/GlobalStyles';

const Item = ({ item, onDelete, onEdit }) => {
  return (
    <TouchableOpacity  style={styles.container}>
      {/* Item Details */}
      <View style={styles.textContainer}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
          {item.name}
        </Text>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.description}>
          {item.description}
        </Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => onEdit(item)}>
          <AntDesign name="edit" size={20} color={primaryColor} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <AntDesign name="delete" size={20} color={dangerBtnColor} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 1,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
    paddingRight: 10, 
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
});
