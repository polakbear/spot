import { useGetGenresQuery } from '../gen';
import { Option, Tokenizer } from '@gforge/react-typeahead-ts';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function Genres() {
  const { data } = useGetGenresQuery();
  let genres = data?.genres?.genres?.map((genre?) => {
    return genre?.name as Option;
  });
  const selectedGenres: any = [];
  return (
    <Box color="text.primary" height={300} defaultValue={'foo'} clone>
      <Tokenizer
        renderAbove={true}
        showOptionsWhenEmpty={false}
        options={genres ?? []}
        placeholder={'rock, pop...'}
        onTokenAdd={function (genre) {
          selectedGenres.push(genre);
        }}
      />
    </Box>
  );
}

export default Genres;
