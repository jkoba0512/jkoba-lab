---
title: "Readout adaptation in simulated arm reaching: learned compensation and performance after updates stop"
authors:
  - me
date: "2026-11-12T00:00:00Z"
publishDate: "2026-06-15T00:00:00Z"
publication_types: ["manuscript"]
publication: "*bioRxiv*"
publication_short: ""
abstract: "When an arm learns to compensate for a force that deflects its movement, removing the force can produce an opposite deviation, or after-effect. We evaluate what the controller retains by measuring the after-effect, the learned torque correction, and tracking performance after weight updates stop. We use a simulated torque-driven planar two-link arm reaching in eight directions under velocity-dependent sideways forces. Only an external linear torque readout adapts online; the parameters generating its features stay fixed. Features come from three configurations of closed-form continuous-time (CfC) networks, an echo-state network, or a radial-basis-function layer. All three CfC configurations, including neural circuit policy wiring, are trained for 400 epochs. These five feature-based variants use least-mean-squares (LMS) learning; a sixth uses recursive least squares (RLS) on the dense-backbone CfC readout. Learning rates are selected on three model initializations and evaluated on ten separate initializations under three force fields. All six variants improve tracking relative to their fixed-readout baselines and pass our after-effect criterion in every evaluation run. Diagnostics on the same ten evaluation initializations in the main field (60 conditions) quantify differences behind this shared decision: the median normalized squared residual between the learned output change and ideal compensation ranges from 0.0097 to 0.383 across implementations on common prescribed inputs. With updates stopped and feedback control active, all final readouts retain useful compensation, reducing tracking error by 40-97% relative to their pre-adaptation versions. Compared with the final adaptive cycle, the five LMS variants have median fixed-readout error ratios of 2.28-5.87, while RLS remains nearly unchanged. These measurements distinguish the performance achieved during adaptation from that retained in the final weights. They provide a concrete evaluation procedure for readout adaptation: measure the learned output correction and test the final controller with updates off, alongside behavioral after-effects. The comparison characterizes complete implementations in this task; differences in preparation and hyperparameters limit attribution to feature representations or update rules alone."
tags:
  - Liquid Neural Networks
  - Continuous-Time Networks
  - Motor Control
  - Cerebellar Adaptation
  - Force-Field Adaptation
  - Computational Neuroscience
featured: false
links:
  - type: doi
    id: "10.64898/2026.06.11.731593"
  - type: code
    url: https://doi.org/10.5281/zenodo.24094939
---
