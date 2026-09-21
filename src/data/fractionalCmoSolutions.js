import solutions from './fractionalCmoSolutions.json';

export const fractionalCmoSolutions = solutions;

export const cmoSlugs = solutions.map((s) => s.slug);

export function getCmoSolutionBySlug(slug) {
  return solutions.find((s) => s.slug === slug);
}
