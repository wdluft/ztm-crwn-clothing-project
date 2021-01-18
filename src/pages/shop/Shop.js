/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import SHOP_DATA from './shopData';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
