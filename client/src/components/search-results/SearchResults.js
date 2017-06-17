import React, { Component } from 'react';
import { BpkExtraLargeSpinner } from 'bpk-component-spinner';
import {AutoSizer, List, WindowScroller} from 'react-virtualized';
import SearchResult from './SearchResult';
import './SearchResults.scss';



class SearchResults extends Component {
  constructor() {
    super();
    this.rowRenderer = this.rowRenderer.bind(this);
  }

  render() {
    const {itineraries} = this.props;

    return (
      <div className="SearchResults" >
        {
          itineraries.length 
          ? (
            <WindowScroller>
              {({ height, isScrolling, onChildScroll, scrollTop }) => (
                <AutoSizer disableHeight>
                  {({ width }) => (
                    <List
                      autoHeight
                      width={width}
                      height={height}
                      isScrolling={isScrolling}
                      onScroll={onChildScroll}
                      scrollTop={scrollTop}
                      rowCount={itineraries.length}
                      rowHeight={196 + 12}
                      rowRenderer={this.rowRenderer}
                      overscanRowCount={2}
                    />
                  )}
                </AutoSizer>
              )}
            </WindowScroller>
          ) : (
            <div className="SearchResults__spinner">
              <BpkExtraLargeSpinner />
              <div>Searching</div>
            </div>
          )
        }
      </div>
    );
  }
  
  
  rowRenderer({index, style}) {
    style.height -= 6; 
    return <SearchResult result={this.props.itineraries[index]} key={index} style={{...style}} />;
  }
}

export default SearchResults;
