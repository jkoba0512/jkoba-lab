---
title: Publications
cms_exclude: true

# View.
view: citation

# Optional header image (relative to `static/media/` folder).
banner:
  caption: ''
  image: ''

# Publication detail pages are rendered so that the links author and tag
# term pages generate from `.RelPermalink` resolve. The listing itself does not
# link to them: `layouts/_partials/views/citation.html` renders the title as
# plain text and surfaces DOI/Code instead.
cascade:
  - target:
      kind: page
    build:
      render: always
      list: always
---
