import React from 'react';
import { TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Moment from 'moment';
const ListItem = ({ item, onItemPress }) => {
  const { title, price, updated_at } = item;

  return (

    <TouchableOpacity onPress={() => onItemPress(item.id)}>
      <Card>
        <CardItem>
          <Left>
            <Body>
              <Text style={styles.txtTitulo}>{title}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{ uri: 'https://www.limaonagua.com.br/wp-content/uploads/2015/07/25-quartos-de-adolescentes-decorados.jpg' }} style={styles.foto} />
        </CardItem>
        <CardItem>
          <Left>
            <Text>R$ {price}</Text>
          </Left>
          <Body>
          </Body>
          <Right>
            <Text>Postado: </Text>
            <Text>{Moment(updated_at).format('DD MMM YY')}</Text>
          </Right>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  item: {
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 10,
    padding: 10,
    flexDirection: 'row'
  },
  foto: {
    height: 200,
    width: null,
    flex: 1
  },
  destalhesItem: {
    marginLeft: 20,
    flex: 1
  },
  txtTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  txtValor: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  txtDetalhes: {
    fontSize: 16
  }
});

export default ListItem;
