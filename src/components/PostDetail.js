import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';

import { fetchPost } from '../actions';

class PostDetail extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.postId); // precisamos passar o id
  }

  render() {
    const { post } = this.props;
    const postId = this.props.postId;



    if (!post) {
      return <Text>Carregando . . .</Text>;
    }
    var wantedData = post.filter(function (i) {
      return i.id === postId;
    });
    return (
      <View style={styles.detailStyle}>
        <View style={styles.imageStyle}>
          <Image source={{ uri: 'https://www.limaonagua.com.br/wp-content/uploads/2015/07/25-quartos-de-adolescentes-decorados.jpg' }} style={{ width: 240, height: 240 }} />
        </View>
        <View style={styles.midleboxStyle}>
          <Text style={styles.titleStyle}>{wantedData[0].title}</Text>
          <Text style={styles.bodyStyle}>{wantedData[0].description}</Text>

          <View style={styles.underTextStyle}>
            <Text style={styles.priceStyle}>Valor: R$ {wantedData[0].price}</Text>
            <View></View>
            <Text style={styles.amountStyle}>Em Estoque: {wantedData[0].amount}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  detailStyle: {
    flex: 1,
    flexDirection: 'column',

  },
  imageStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#FFF',
  },

  titleStyle: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bodyStyle: {
    color: '#000',
    fontSize: 16,
  },
  priceStyle: {
    color: '#000',
    fontSize: 20
  },
  amountStyle: {
    color: '#000',
    fontSize: 20
  },
  midleboxStyle: {
    margin: 10
  },
  underTextStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  }
});

const mapStateToProps = (state) => {
  return { post: state.posts.selected };
};

export default connect(mapStateToProps, { fetchPost })(PostDetail);
