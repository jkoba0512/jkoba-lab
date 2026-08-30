---
title: "A Mathematical Model of Reliability-Dependent Sensory Reweighting in Quiet Standing"
authors:
  - me
date: "2026-06-29T00:00:00Z"
publishDate: "2026-06-29T00:00:00Z"
publication_types: ["manuscript"]
publication: "*bioRxiv*"
publication_short: ""
abstract: "Human quiet standing relies on vestibular, proprioceptive, and visual information whose contributions change with sensory context. Dynamic posturography characterizes this reweighting through responses to visual-scene and support-surface perturbations, but a compact mathematical account of how sensory reliability propagates from state estimation to postural action remains incomplete. We develop a minimal quiet-standing model in which sensory reliability is encoded by channel-specific precision parameters that weight sensory prediction errors. A one-link inverted pendulum receives vestibular, proprioceptive, and visual observations, estimates posture using an active-inference variational free-energy objective over temporally embedded states, and selects ankle torque by minimizing the same free-energy form under an upright sensory goal. Changes in sensory conditions enter the model only through the relative channel precisions; body dynamics, the action optimizer, and the upright goal prior are held fixed. A fixed-point analysis yields closed-form predictions: the perturbation-induced belief bias, each channel's state-update contribution, and the resulting posture shifts are set by relative channel precisions, with a stability condition on the upright goal. Closed-loop simulations confirmed these predictions: reducing an unreliable channel's precision reduced perturbation-driven postural shifts by approximately 82%, as predicted, with a matching decrease in that channel's state-update contribution, identifying belief updating as the mechanism of reweighting. A graded reliability-to-precision mapping monotonically controlled sensory contribution, and reweighting required relative, channel-selective precision changes rather than a global reduction. These results provide a compact mathematical account of postural sensory reweighting as relative, context-selective precision control in a closed-loop multisensory system."
tags:
  - Active Inference
  - Computational Neuroscience
  - Postural Control
  - Sensory Reweighting
featured: false
links:
  # DOI is declared here rather than under `hugoblox.ids` so that it renders
  # before Code: the theme appends links derived from `hugoblox.ids` after the
  # `links` array, and its de-duplication check does not catch the overlap.
  - type: doi
    id: "10.64898/2026.06.23.733972"
  - type: code
    url: https://doi.org/10.5281/zenodo.22137360
---
