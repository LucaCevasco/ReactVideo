/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import VideoNotFound from '../components/VideoNotFound';
import '../assets/styles/App.scss';

const Home = (props) => {
  const { isSearching, myList, trends, originals, searching } = props;
  if (isSearching) {
    return searching.length > 0 ? (
      <>
        <Header />
        <Search isHome />
        <Categories title='Búsqueda'>
          <Carousel>
            {searching.map((item) => (
              <CarouselItem key={item.id} {...item} isMyList={true} />
            ))}
          </Carousel>
        </Categories>
      </>
    ) : (
      <VideoNotFound />
    );
  };
  return (
    <div>
      <Header />
      <Search isHome />
      {myList.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {myList.map((item) => <CarouselItem key={item.id} {...item} isList />)}
          </Carousel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carousel>
          {trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Categories title='Producciones originales'>
        <Carousel>
          {originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    </div>
  );
};

// funcion para definir los estados que pedira connect
// se depositan en variables y luego se utilizan en el componente
const mapStateToProps = (state) => {
  return {
    isSearching: state.isSearching,
    searching: state.searching,
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
