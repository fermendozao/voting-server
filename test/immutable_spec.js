import {expect} from 'chai';
import {List, Map} from 'immutable';

describe('Number immutability', () => {
  describe('a number', () => {
    function increment(currentState) {
      return currentState + 1;
    }

    it ('Number is immutable', () => {
      let state = 42;
      let nextState = increment(state);

      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    });
  });
});


describe('List immutability', () => {
  describe('A List', () => {
    function addMovie(currentState, movie) {
      return currentState.push(movie);
    }

    it ('List is immutable', () => {
      let state = List.of('Trainspotting', '28 Days Later');
      let nextState = addMovie(state, 'Sunshine');

      expect(nextState).to.equal(List.of(
        'Trainspotting',
        '28 Days Later',
        'Sunshine'
      ));
      expect(state).to.equal(List.of(
        'Trainspotting',
        '28 Days Later',
      ));
    });
  });
});


describe('Map immutability', () => {
  describe('A Map', () => {
    function addMovie(currentState, movie) {
      return currentState.set(
        'movies',
        currentState.get('movies').push(movie)
      )
    }

    it('Map is immutable', () => {
      let state = Map({
        movies: List.of('Trainspotting', '28 Days Later')
      });
      let nextState = addMovie(state, 'Sunshine');

      expect(nextState).to.equal(Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later',
          'Sunshine'
        )
      }));
      expect(state).to.equal(Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later'
        )
      }));
    });
  });
});
