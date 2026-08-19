---
title: "When Identifiability Is Not Enough: Terminal Controllability in Task-Compatible Active Calibration"
authors:
  - me
date: "2026-08-02T00:00:00Z"
publishDate: "2026-08-02T00:00:00Z"
publication_types: ["article-journal"]
publication: "*IEEE Robotics and Automation Letters, 11*(10), 11039–11045"
publication_short: ""
abstract: "Robots that operate with uncertain body, tool, or contact parameters must often refine their body models without abandoning the task at hand. This paper shows that active calibration is not solved by identifiability alone: an exploratory trajectory can yield accurate parameters while placing the robot in a state from which the downstream task is hard to complete. We study this failure mode in a minimal redundant planar manipulator with unknown link lengths and a two-phase calibration-to-task protocol. We formulate finite-step task-compatible probing as a higher-order generalization of first-order null-space information-gradient control, allowing the robot to escape first-order task-compatible degeneracy while limiting task drift. Across 50 seeds, finite-step probing eliminates calibration failures but still leaves substantial downstream task failure without terminal controllability management. These failures are not explained by parameter error (AUC = 0.511) or static singularity measures (AUC = 0.490), but short-horizon terminal rollout risk achieves perfect separation (AUC = 1.000), including with oracle parameters. Phase-2 experiments show that longer execution and null-space posture regularization together eliminate the remaining task failures; follow-up checks show that the failure appears in degenerate and near-degenerate starts, while non-degenerate starts succeed with the plain controller. The results support a three-layer view of active calibration: identifiability creation, task-compatible exploration, and post-calibration finite-horizon controllability."
tags:
  - Active Calibration
  - Redundant Manipulators
  - Information Gain
  - Null-Space Control
  - Robot Learning
featured: false
links:
  # DOI is declared here rather than under `hugoblox.ids` so that it renders
  # before Code: the theme appends links derived from `hugoblox.ids` after the
  # `links` array, and its de-duplication check does not catch the overlap.
  - type: doi
    id: "10.1109/LRA.2026.3719194"
  - type: code
    url: https://doi.org/10.5281/zenodo.21390226
---
