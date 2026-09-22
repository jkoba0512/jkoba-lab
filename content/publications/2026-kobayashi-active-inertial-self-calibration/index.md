---
title: "Active Inertial Self-Calibration Beyond Identifiability: Task-Compatible Excitation and Terminal Feasibility"
authors:
  - me
date: "2026-09-22T00:00:00Z"
publishDate: "2026-09-22T00:00:00Z"
publication_types: ["manuscript"]
publication: "*SSRN* (preprint)"
publication_short: ""
abstract: "A robot with an unknown payload must update its dynamics model while operating: choosing informative motions, limiting task disturbance, and judging whether the model suffices. These decisions form three layers that one calibration-error number conflates. We evaluate them in simulation on planar two- and four-revolute-joint arms (2R, 4R) and on a seven-degree-of-freedom KUKA LBR iiwa 14 R820 (iiwa), with a pipeline structurally identical to a hardware experiment: every excitation is a continuous limit-respecting trajectory, tracked in closed loop on a friction plant (with actuator inertia for the iiwa), and identification uses noisy measurements and velocity-derived accelerations. Layer 1 fixes the identifiable base coordinates and excludes torque-invisible directions. Among executable free-excitation policies, a broadband trajectory is strongest and active information gain matches greedy Fisher-information selection. Layer 2 asks how much information survives task constraints: the redundant 4R recovers essentially all free-excitation information via null-space motion, without disturbing the task or exceeding a limit; at 7 DoF, acceleration-estimation bias limits the gain. Layer 3 asks whether the terminal maneuver is feasible: even well-calibrated reach-and-hold can fail under torque, horizon, and velocity limits. An online velocity-aware terminal-feasibility risk computed from the robot's estimate separates task failure better than calibration error (vertical-plane 2R AUC 0.993 vs. 0.549; iiwa 1.000 vs. 0.500); at a go/no-go threshold its torque-only ablation misses 9.5% of planar and 50% of iiwa failures, versus 1.3% and none for the full risk. The diagnosis is sequential: feasibility first, then calibration. Calibration success is not task success."
tags:
  - Active Calibration
  - Inertial Parameter Identification
  - Redundant Manipulators
  - Terminal Feasibility
featured: false
links:
  - type: doi
    id: "10.2139/ssrn.7507404"
  - type: code
    url: https://doi.org/10.5281/zenodo.21469997
---
