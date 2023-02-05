import React, { Component } from "react";
import { Search, Grid, Header, Segment } from "semantic-ui-react";
const SearchBar = () => {
  return (
    <Grid>
      <Grid.Column width={6}>
        <Search
          fluid
          // loading={isLoading}
          // onResultSelect={this.handleResultSelect}
          // onSearchChange={_.debounce(this.handleSearchChange, 500, {
          //   leading: true,
          // })}
          // results={results}
          // value={value}
        />
      </Grid.Column>
    </Grid>
  );
};
export default SearchBar;
