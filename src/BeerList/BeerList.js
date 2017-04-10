import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BeerCard from './BeerCard';
import SearchBar from './SearchBar';

import * as actions from './actions';
import * as favouriteActions from '../FavouriteList/actions';

import './BeerList.css';

class BeerList extends Component {
  constructor(props) {
    super(props);
    this.addFavourite = this.addFavourite.bind(this);
    this.removeFavourite = this.removeFavourite.bind(this);
    this.beerSearch = this.beerSearch.bind(this);
    this.renderBeers = this.renderBeers.bind(this);

  }

  componentDidMount() {
    this.props.actions.getBeers();
  }

  addFavourite(beer) {
    this.props.actions.addFavourite(beer)
  }

  removeFavourite(beer) {
    this.props.actions.removeFavourite(beer);
  }


  beerSearch(e) {
    e.preventDefault();
    this.props.actions.getBeers(this.props.searchValue);
  }

  renderBeers() {
    const isFavourited = beerId => {
      const favouriteIds = this.props.favouriteList.map(fav => fav.id);
      return favouriteIds.includes(beerId);
    };

    return this.props.beerList.map(beer => {
      return (
        <BeerCard
          key={beer.id}
          addFavourite={this.props.actions.addFavourite}
          removeFavourite={this.props.actions.removeFavourite}
          beer={beer}
          isFavourited={isFavourited(beer.id)}
        />
      );
    });
  }

  render() {
    return (
      <div className="section">
        <SearchBar
          onSubmit={this.beerSearch}
          onChange={this.props.actions.updateSearch}
          value={this.props.actions.searchValue}
          isFetching={this.props.isFetching}
        />
        <div className="beerList container is-fluid">
          { this.props.isFetching ?
              null
            :
              this.renderBeers()
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    beerList: state.beerListReducer.beerList,
    searchValue: state.beerListReducer.searchValue,
    favouriteList: state.favouriteListReducer.favouriteList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      updateSearch: actions.updateSearch,
      getBeers: actions.getBeers,
      addFavourite: favouriteActions.addFavourite,
      removeFavourite: favouriteActions.removeFavourite,
    }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerList);
