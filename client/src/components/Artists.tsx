import { useSearchArtistsQuery } from '../gen';
import { Option, Tokenizer } from '@gforge/react-typeahead-ts';
import React, { useState } from 'react';
import Box from '@material-ui/core/Box';

function Artists() {
  const searchString = '';
  const { data } = useSearchArtistsQuery({ variables: { searchString } });
  const [foo, setFoo] = useState('');

  let artists = data?.artists?.artists?.map((artist?) => {
    return artist?.name as Option;
  });
  const selectedArtists: any = [];

  return (
    <Box color="text.primary" height={300} defaultValue={'foo'} clone>
      <Tokenizer
        options={artists ?? []}
        onTokenAdd={(artist) => {
          setFoo(artist as string);
        }}
      />
    </Box>
  );
}

export default Artists;
