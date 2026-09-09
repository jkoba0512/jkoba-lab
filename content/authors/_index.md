---
# Disable the /authors/ index page, and via the cascade every author term page
# too: author names render as plain text, so co-author pages would be
# unreachable. `content/authors/me/_index.md` opts itself back in, because
# /people/ links to it.
build:
  render: never
cascade:
  - target:
      kind: term
    build:
      render: never
      list: never
---
