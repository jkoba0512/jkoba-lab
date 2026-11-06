---
title: "A Mathematical Model of Reliability-Dependent Sensory Reweighting in Quiet Standing"
authors:
  - me
date: "2026-06-29T00:00:00Z"
publishDate: "2026-06-29T00:00:00Z"
publication_types: ["manuscript"]
publication: "*bioRxiv*"
publication_short: ""
abstract: "Human quiet standing relies on vestibular, proprioceptive, and visual information whose contributions change with sensory context. Posturography characterizes this reweighting through responses to visual and support-surface perturbations, but a compact account of how sensory reliability propagates from state estimation to postural action remains incomplete. We develop a minimal quiet-standing model in which sensory reliability is encoded by channel-specific precision parameters that weight sensory prediction errors. A one-link inverted pendulum with intrinsic ankle stiffness estimates posture by minimizing an active-inference free-energy objective and selects ankle torque by minimizing the same objective under a restorative sensory goal. A fixed-point analysis predicts in closed form the perturbation-induced belief bias, each channel's state-update contribution, the steady posture, and a linear stability condition from the precisions, goal dynamics, and intrinsic stiffness. Closed-loop simulations in 115 trials matched the predicted equilibria to within 0.001 degrees wherever the loop settled; the two conditions predicted unstable diverged or drifted. Reducing an unreliable channel's precision eightfold reduced perturbation-driven posture shifts by 82%, with a matching decrease in that channel's state-update contribution. Intrinsic stiffness left this reduction essentially unchanged for visual and sensory-only perturbations but bounded it for physical support tilts. A global precision reduction did not reduce the shift, and a within-trial precision switch showed belief updating, not a separate action gain, carrying the change to ankle torque. The results give a compact mathematical account of postural sensory reweighting as relative, context-selective precision control in a closed multisensory loop."
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
