import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MediaRow from './MediaRow';

describe('MediaRow', () => {
  test('renders image with correct src and alt', () => {
    const image = { src: 'test-image.jpg', alt: 'Test Image' };
    render(<MediaRow image={image} content={<div>Test Content</div>} actions={<div>Test Actions</div>} />);
    const imgElement = screen.getByAltText(/test image/i);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', 'test-image.jpg');
  });

  test('renders content correctly', () => {
    const image = { src: 'test-image.jpg', alt: 'Test Image' };
    render(<MediaRow image={image} content={<div>Test Content</div>} actions={<div>Test Actions</div>} />);
    const contentElement = screen.getByText(/test content/i);
    expect(contentElement).toBeInTheDocument();
  });

  test('renders actions correctly', () => {
    const image = { src: 'test-image.jpg', alt: 'Test Image' };
    render(<MediaRow image={image} content={<div>Test Content</div>} actions={<div>Test Actions</div>} />);
    const actionsElement = screen.getByText(/test actions/i);
    expect(actionsElement).toBeInTheDocument();
  });

});
