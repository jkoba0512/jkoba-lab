---
title: "Climbing-fiber-like online readout adaptation in frozen continuous-time networks reproduces force-field adaptation and after-effects"
authors:
  - me
date: "2026-06-15T00:00:00Z"
publishDate: "2026-06-15T00:00:00Z"
publication_types: ["manuscript"]
publication: "*bioRxiv*"
publication_short: ""
hugoblox:
  ids:
    doi: "10.64898/2026.06.11.731593"
abstract: "Robotic motor control built on liquid neural networks and related continuous-time models, such as LTC and CfC, is typically trained offline via backpropagation through time and lacks an explicit mechanism for recalibrating online as plant dynamics change. We ask whether a frozen CfC core, whose liquid state spans a fixed continuous-time basis, can support cerebellar-style online adaptation by adapting only its linear readout with a climbing-fiber-like error signal. In a planar two-link reaching simulation with a velocity-dependent curl force field, we adapt the readout online with a feedback-error-learning (FEL) signal under a least-mean-squares (LMS) rule, leaving the core untouched. The frozen-core readout-only controller re-straightens curl-perturbed reaches and, upon field removal, produces a mirror-image after-effect, a behavioral signature consistent with internal-model learning, which a feedback-only controller does not produce. The result generalizes from a dense CfC to a sparse Neural-Circuit-Policy (NCP) wiring when the recurrent state, rather than the projected motor output, is used as the readout basis; it is robust to force-field strength and direction; and a recursive-least-squares variant adapts faster but de-adapts slowly because its covariance collapses, a rigidity that a covariance-reset safe-forgetting rule removes. Within the explored two-link planar simulation range, we did not find a readout-only failure case that required adapting the frozen core in the tested conditions. In this simulation study, adapting only the readout therefore provides a biologically inspired, low-cost online error-adaptation layer for offline-trained continuous-time controllers."
tags:
  - Liquid Neural Networks
  - Continuous-Time Networks
  - Motor Control
  - Cerebellar Adaptation
  - Force-Field Adaptation
  - Computational Neuroscience
featured: false
links:
  - type: source
    url: https://doi.org/10.64898/2026.06.11.731593
---
