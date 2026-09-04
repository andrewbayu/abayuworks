---
name: adityabayu-editorial-visuals
description: Create consistent supporting visuals for adityabayu.com editorial articles using the approved minimalist doodle/sketchnote direction.
---

# Adityabayu Editorial Visuals

Use this skill when creating or replacing supporting visuals for articles on `adityabayu.com`. It applies to diagrams, frameworks, process maps, systems, matrices, and editorial explainers. The featured image may use a separate art direction or an explicit user-provided URL.

## Core direction

- Use a refined editorial doodle / sketchnote style: hand-drawn black ink, imperfect but intentional lines, sparse flat shapes, and generous negative space.
- Use a warm-white paper background with very subtle grain.
- Use charcoal as the drawing and text colour, with restrained cobalt blue and muted yellow accents. Coral is only a small secondary accent.
- Keep labels handwritten/sketched, casual but highly legible. Never use a corporate UI font inside the image.
- Make the visual explain one useful idea from the article. Do not create generic hero art or decoration.
- Default to a landscape 4:3 composition and preserve comfortable margins for responsive cropping.
- Avoid logos, watermarks, photorealism, glossy 3D, dark backgrounds, dashboard screenshots, gradients, and dense microcopy.

## Composition rules

Choose the visual form based on the article concept:

- Pipeline or system flow: left-to-right stages, directional arrows, and a visible transformation.
- Creative or idea portfolio: a sparse matrix of distinct cards, each showing a different reason, angle, or input.
- Measurement or feedback: a circular loop with no more than four clear nodes and directional arrows.
- Operating model: two or three stacked layers with a feedback connection, not a software architecture diagram.
- Framework or comparison: a simple matrix, ladder, or axis with only the labels required to understand the decision.

Every visual should have a clear reading order at article width. Prefer a few large symbols and labels over many small details. If the image needs more than six primary labels, simplify the diagram or split it into multiple visuals.

## Text handling

Use short labels only. Write exact text in the image prompt and require verbatim rendering. Keep labels in uppercase or title case according to the article's design language, but preserve the handwritten treatment. Add a caption in the article explaining the takeaway; do not rely on the image alone for accessibility.

## Production workflow

1. Identify the single concept the visual must clarify and choose the matching composition above.
2. Use the approved pipeline doodle at `public/images/blog/andromeda/pipeline-doodle.png` as the style reference when available.
3. Generate at 4:3 with no logos and no decorative elements that do not carry meaning.
4. Inspect the result for label accuracy, legibility, visual hierarchy, margins, and consistency with the approved reference.
5. Save project-bound assets under `public/images/blog/<article-slug>/` with descriptive names.
6. Wire the asset into the article and keep the existing figure caption factual and useful.
7. Preserve the original asset until the replacement is approved; use a `-doodle` or versioned filename during review.

## Prompt baseline

Start prompts with:

`Use case: infographic-diagram. Asset type: internal editorial illustration for an ad/marketing strategy article. Refined minimalist doodle / sketchnote, black hand-drawn ink, warm-white paper, subtle grain, cobalt-blue and muted-yellow accents, landscape 4:3, generous margins, highly legible handwritten labels, no logos, no watermark, no photorealism, no glossy 3D, no dark background, no dashboard screenshot.`

Then specify the article concept, exact labels, reading order, and what must be preserved or avoided. Do not ask the image model to invent the strategy; provide the structure and labels explicitly.

## Review checklist

- [ ] The image explains a specific article idea.
- [ ] It is landscape 4:3 and remains clear when displayed at article width.
- [ ] The labels are handwritten-looking, exact, and readable.
- [ ] The palette and linework match the approved doodle reference.
- [ ] There is no generic illustration, unnecessary decoration, logo, or watermark.
- [ ] The article has a useful alt text and caption.
