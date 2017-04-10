import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BeerCard from '../BeerList/BeerCard';

import * as favouriteActions from '../FavouriteList/actions';

class FavouriteList extends Component {
	constructor(props) {
		super(props);

	}

	renderBeers() {
    const isFavourited = beerId => {
      const favouriteIds = this.props.favouriteList.map(fav => fav.id);
      return favouriteIds.includes(beerId);
    };

    return this.props.favouriteList.map(beer => {
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
      <section className="section">
        {this.renderBeers()}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    favouriteList: state.favouriteListReducer.favouriteList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
			addFavourite: favouriteActions.addFavourite,
      removeFavourite: favouriteActions.removeFavourite,
    }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavouriteList);
