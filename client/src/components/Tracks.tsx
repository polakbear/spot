import { useGetGenresQuery } from '../gen';
import { Option, Tokenizer } from '@gforge/react-typeahead-ts';
import React from 'react';

function Tracks() {
  const { data } = useGetGenresQuery();
  let genres = data?.genres?.genres?.map((genre?) => {
    return genre?.name as Option;
  });
  const selectedGenres: any = [];
  return (
    <>
      <Tokenizer
        options={genres ?? []}
        onTokenAdd={function (genre) {
          selectedGenres.push(genre);
        }}
      />
    </>
  );
}

export default Tracks;
