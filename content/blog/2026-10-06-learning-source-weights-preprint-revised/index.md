---
title: "Preprint revised: Learning source weights for target-position estimation"
date: "2026-10-06T00:00:00Z"
summary: "Version 2 compares learned fixed weights with an input-dependent rule: recalibration explains much of the improvement, while input-dependent weighting offers an additional benefit with occasional large measurement errors."
paper_doi: "10.64898/2026.06.08.730995"
paper_url: "https://doi.org/10.64898/2026.06.08.730995"
authors:
  - me
tags:
  - Preprint
  - bioRxiv
  - Target-position Estimation
  - Source Weighting
---

Version 2 of our bioRxiv preprint is now available, retitled "Learning source weights for target-position estimation: comparing fixed weights and an input-dependent rule."

The revised study compares recalibration, learned fixed weights, input-dependent weighting, and longer observation histories in simulated target-position estimation. The two-input methods combine the current measurement with the mean of three initial measurements. Learning uses noisy reference measurements, and the estimator receives no current or previous true target position. Calibration, training, validation, and independent evaluation were repeated 100 times in each of four error conditions.

Recalibration and fixed-weight learning explain most of the improvement under reduced measurement accuracy and temporal correlation. With occasional large measurement errors, input-dependent weighting reduces mean squared error by 4.05% relative to learned fixed weights. Its additional benefit is below 0.5% under independent errors and reduced current accuracy, while fixed weights have slightly lower mean error under temporal correlation. Longer observation histories perform better in several conditions. Shared coordinate bias and correlated reference errors limit conclusions about physical accuracy.

DOI: [10.64898/2026.06.08.730995](https://doi.org/10.64898/2026.06.08.730995)

[Read the revised preprint](https://doi.org/10.64898/2026.06.08.730995).
