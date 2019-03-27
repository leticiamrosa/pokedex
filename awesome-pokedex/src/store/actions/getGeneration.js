const generations = [
  'Geração I',
  'Geração II',
  'Geração III',
  'Geração IV',
  'Geração V',
  'Geração VII',
];

export function getGeneration(generation) {
  return {
    type: 'GET_POKEMON',
    generation,
  };
}

export function getGenerationError(error) {
  return {
    type: 'GET_POKEMON_ERROR',
    error,
  };
}

export function showAllGeneration() {
  return (dispatch) => {
    dispatch(getGeneration(generations));
  };
}
