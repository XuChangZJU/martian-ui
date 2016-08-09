/**
 * Created by Hey on 2016/8/9.
 */
import React from "react";
import {StyleSheet, View, Image, Text} from "react-native";
const UIExplorerBlock = require('UIExplorerBlock');
const UIExplorerPage = require('UIExplorerPage');
const Swiper = require('martian-ui').MtSwiper;

const SwiperExample = React.createClass({
  statics: {
    title: 'MtSwiper',
    description: 'Swiper component for gallery and so on',
  },

  getInitialState: function() {
    return {
      selected1: null,
      selected2: null,
    };
  },

  render() {
    return (
      <UIExplorerPage title="MtSwiper">
        <UIExplorerBlock title="Plain Swiper" >
          <View style={{height:240 , alignItems: 'center'}}>
          <Swiper
            height={200}
            width={300}
          >
            <View style={styles.slide}>
              <Image style={styles.image} source={{uri: 'http://c.hiphotos.baidu.com/image/w%3D310/sign=0dff10a81c30e924cfa49a307c096e66/7acb0a46f21fbe096194ceb468600c338644ad43.jpg'}} />
            </View>
            <View style={styles.slide}>
              <Image style={styles.image} source={{uri: 'http://a.hiphotos.baidu.com/image/w%3D310/sign=4459912736a85edffa8cf822795509d8/bba1cd11728b4710417a05bbc1cec3fdfc032374.jpg'}} />
            </View>
            <View style={styles.slide} >
              <Image style={styles.image} source={{uri: 'http://e.hiphotos.baidu.com/image/w%3D310/sign=9a8b4d497ed98d1076d40a30113eb807/0823dd54564e9258655f5d5b9e82d158ccbf4e18.jpg'}} />
            </View>
            <View style={styles.slide} >
              <Image style={styles.image} source={{uri: 'http://e.hiphotos.baidu.com/image/w%3D310/sign=2da0245f79ec54e741ec1c1f89399bfd/9d82d158ccbf6c818c958589be3eb13533fa4034.jpg'}} />
            </View>
          </Swiper>
          </View>
        </UIExplorerBlock>
        <UIExplorerBlock title="Plain Swiper with custom dot Style" >
          <View style={{height:240 , alignItems: 'center'}}>
            <Swiper
              height={200}
              width={300}
              activeDotStyle={{backgroundColor: 'red'}}
            >
              <View style={styles.slide}>
                <Image style={styles.image} source={{uri: 'http://c.hiphotos.baidu.com/image/w%3D310/sign=0dff10a81c30e924cfa49a307c096e66/7acb0a46f21fbe096194ceb468600c338644ad43.jpg'}} />
              </View>
              <View style={styles.slide}>
                <Image style={styles.image} source={{uri: 'http://a.hiphotos.baidu.com/image/w%3D310/sign=4459912736a85edffa8cf822795509d8/bba1cd11728b4710417a05bbc1cec3fdfc032374.jpg'}} />
              </View>
              <View style={styles.slide} >
                <Image style={styles.image} source={{uri: 'http://e.hiphotos.baidu.com/image/w%3D310/sign=9a8b4d497ed98d1076d40a30113eb807/0823dd54564e9258655f5d5b9e82d158ccbf4e18.jpg'}} />
              </View>
              <View style={styles.slide} >
                <Image style={styles.image} source={{uri: 'http://e.hiphotos.baidu.com/image/w%3D310/sign=2da0245f79ec54e741ec1c1f89399bfd/9d82d158ccbf6c818c958589be3eb13533fa4034.jpg'}} />
              </View>
            </Swiper>
          </View>
        </UIExplorerBlock>
        <UIExplorerBlock title="Plain Swiper with custom pagination" >
          <View style={{height:240 , alignItems: 'center',width: 300}}>
            <Swiper
              height={200}
              renderPagination={renderPagination}
            >
              <View style={styles.slide}>
                <Image style={styles.image} source={{uri: 'http://c.hiphotos.baidu.com/image/w%3D310/sign=0dff10a81c30e924cfa49a307c096e66/7acb0a46f21fbe096194ceb468600c338644ad43.jpg'}} />
              </View>
              <View style={styles.slide}>
                <Image style={styles.image} source={{uri: 'http://a.hiphotos.baidu.com/image/w%3D310/sign=4459912736a85edffa8cf822795509d8/bba1cd11728b4710417a05bbc1cec3fdfc032374.jpg'}} />
              </View>
              <View style={styles.slide} >
                <Image style={styles.image} source={{uri: 'http://e.hiphotos.baidu.com/image/w%3D310/sign=9a8b4d497ed98d1076d40a30113eb807/0823dd54564e9258655f5d5b9e82d158ccbf4e18.jpg'}} />
              </View>
              <View style={styles.slide} >
                <Image style={styles.image} source={{uri: 'http://e.hiphotos.baidu.com/image/w%3D310/sign=2da0245f79ec54e741ec1c1f89399bfd/9d82d158ccbf6c818c958589be3eb13533fa4034.jpg'}} />
              </View>
            </Swiper>
          </View>
        </UIExplorerBlock>
      </UIExplorerPage>
    );
  },

});

const renderPagination = (index, total, context) => {
  return (
    <View style={{
      position: 'absolute',
      bottom: 10,
      right: 10,
    }}>
      <Text>
        <Text style={{
          color: '#007aff',
          fontSize: 20
        }}>{index + 1}</Text>/{total}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  image: {
    flex: 1,
  }
});


module.exports = SwiperExample;

