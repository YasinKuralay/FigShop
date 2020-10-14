import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from './Header.js';

it('Mounts and unmounts the Header component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
