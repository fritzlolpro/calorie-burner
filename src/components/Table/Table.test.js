import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Table from './Table';

Enzyme.configure({ adapter: new Adapter() });

describe('Table', () => {
  it('Defined', () => {
    expect(Table).toBeDefined();
  });

  it('Renders without props', () => {
    const tree = shallow(<Table />);
    expect(tree).toMatchSnapshot();
  });

  const props = {
    values: [
      {
        exercise: 'Vodkaball',
        calories: 666,
      },
      {
        exercise: 'Sleeping',
        calories: 0,
      },
    ],
    time: 10,
    serchString: 'AAAAA',
  };

  it('Renders with props', () => {
    const tree = shallow(<Table {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
