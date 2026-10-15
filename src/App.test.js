import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// jsdom n'implémente pas ces API de rendu
beforeAll(() => {
  window.scrollTo = jest.fn();
  Element.prototype.scrollIntoView = jest.fn();
  window.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  };
});

beforeEach(() => {
  window.location.hash = '';
});

test('affiche la section Projets avec la liste des projets', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { level: 2, name: 'Mes projets' })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: /GestiPerso/i })
  ).toBeInTheDocument();
});

test("ouvre la page de détail d'un projet au clic", async () => {
  render(<App />);

  userEvent.click(screen.getByRole('button', { name: /GestiPerso/i }));

  const title = await screen.findByRole('heading', {
    level: 1,
    name: 'GestiPerso',
  });

  expect(title).toBeInTheDocument();
  expect(screen.getByText(/retour aux projets/i)).toBeInTheDocument();
  expect(screen.getByText(/points clés/i)).toBeInTheDocument();
  expect(screen.getByText(/À propos du projet/i)).toBeInTheDocument();
  expect(window.location.hash).toBe('#/projets/2');
});

test("revient à la liste des projets avec le bouton retour", async () => {
  render(<App />);

  userEvent.click(screen.getByRole('button', { name: /GoPark/i }));
  await screen.findByRole('heading', { level: 1, name: 'GoPark' });

  userEvent.click(screen.getByText(/retour aux projets/i));

  await waitFor(() => {
    expect(
      screen.getByRole('heading', { level: 2, name: 'Mes projets' })
    ).toBeInTheDocument();
  });
});
