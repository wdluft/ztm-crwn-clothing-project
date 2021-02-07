/* eslint-disable no-undef */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { selectCollection } from '../../redux/shop/shop-selectors';
import CollectionItem from '../../components/collection-item/CollectionItem';

const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    font-size: 38px;
    margin: 0 auto 30px;
  }

  .items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    & .collection-item {
      margin-bottom: 30px;
    }
  }
`;

const Collection = ({ collection }) => {
  const { title, items } = collection;

  return (
    <CollectionContainer>
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </CollectionContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
