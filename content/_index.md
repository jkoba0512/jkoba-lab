---
title: ''
summary: ''
date: 2026-05-07
type: landing

sections:
  - block: hero
    content:
      eyebrow: Biologically-Inspired Robotics
      title: 🤖 jkoba Lab
      text: |-
        We design controllers that let robots move with the adaptivity of
        living things. The work runs both ways, from biology to robots and
        back. Theories of biological motor control — active inference,
        cerebellar learning, the equilibrium-point hypothesis — become
        working controllers built on neural networks whose internal states
        evolve as dynamical systems. We test them in closed loop, on
        musculoskeletal models and robot arms first, and take what works to
        humanoids and other embodied platforms. And when a controller
        cannot hold a posture, adapt to an unexpected force, or decide which
        sense to trust, that failure marks where what is understood about
        the brain and body still falls short.
      media:
        src: research-hero.png
        alt: Anime-style illustration of a humanoid robot with a visible brain and nervous system, studied by robotic arms in a neuroscience laboratory.
    design:
      layout: split-left
      size: compact

  - block: collection
    id: news
    content:
      title: Recent News
      subtitle: ''
      page_type: blog
      count: 3
      filters:
        author: ''
        category: ''
        tag: ''
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ''
      offset: 0
      order: desc
    design:
      view: news

  - block: focus-areas
    content:
      title: Research Theme
      subtitle: |-
        We integrate the mechanisms that support biological movement, the
        theories that explain their underlying principles, and the computational
        models that implement them to realize biologically-inspired robot
        control that can adapt to changes in the environment and the body.
      items:
        - name: Computational Neuroscience
          description: |-
            **The biological grounding.**

            We aim to understand the mechanisms of human and animal motor
            control through theory and computational models. Biological insight
            defines the goals and constraints that robot control should satisfy.
            By testing these theories in closed loop, on musculoskeletal models
            and robots, we also reveal open questions in biological motor
            control.
          image: research-themes/computational-neuroscience.png
        - name: Active Inference
          description: |-
            **The principle for explaining movement.**

            Based on the free energy principle, active inference gives a single
            account of perception, prediction, and action, and of how
            goal-directed behavior arises under uncertainty. We use it as the
            theoretical foundation of adaptive robot control: the same
            free-energy objective drives both state estimation and action, and
            the reliability of each sense is encoded as precision, the weight
            given to its prediction errors.
          image: research-themes/active-inference.png
        - name: "Dynamical Neural Networks"
          description: |-
            **The computational substrate.**

            In the brain, movement arises from the evolving states of neural
            populations. Following the same principle, we build controllers on
            neural networks whose internal states evolve as dynamical systems —
            Liquid Neural Networks (CfC), LSTMs, and state-space models such as
            Mamba — as the substrate on which active inference is to run. Their
            internal dynamics track the body and the environment as they
            change, and adapting only a small readout with a cerebellum-like
            error signal can be enough to correct the movement, which keeps
            adaptation fast and cheap.
          image: research-themes/liquid-neural-networks.png
    design:
      layout: cards

  - block: features
    id: selected-topics
    content:
      title: Selected Research Topics
      text: |-
        Short introductions to some of our research directions, written for
        readers who want the main idea before going into the technical
        details. <a href="/jkoba-lab/research-topics/" class="text-primary-600 dark:text-primary-400 font-medium hover:underline">See all research topics &rarr;</a>
      items:
        - name: Task-compatible active calibration and terminal controllability
          icon: hero/viewfinder-circle
          image: selected-topics/terminal-controllability-active-calibration.svg
          description: |-
            A robot whose link lengths, tool, or payload are uncertain can move in
            order to measure itself. But it cannot move freely: the same motion has
            to keep the ongoing task feasible. This research studies that trade-off
            in a redundant planar arm with unknown link lengths that must calibrate
            itself and then complete a reaching task within a fixed time horizon. It
            first develops a probing scheme that plans the exploratory motion
            several steps ahead rather than one, so the arm can make its unknown
            parameters identifiable while drifting little from the task; across 50
            trials this eliminates every calibration failure. Yet many of those
            trials still fail the task: the arm finishes calibration with accurate
            parameters but in a posture from which the goal can no longer be reached
            within the steps that remain. Neither parameter error nor standard
            singularity measures predict which trials fail, whereas a short rollout
            from the state where calibration ends separates them perfectly. This
            terminal controllability is therefore a requirement of its own, and
            managing it — keeping the posture well-conditioned during exploration
            and allowing more time for the task — removes the remaining failures.
            Active calibration thus has three distinct requirements: creating
            identifiability, exploring in a task-compatible way, and ending the
            exploration in a state from which the task is still executable. The
            third can fail even when the first two are met.<br><br>
            Related publication:<br>
            <strong>When Identifiability Is Not Enough: Terminal Controllability
            in Task-Compatible Active Calibration</strong><br>
            DOI: <a href="https://doi.org/10.1109/LRA.2026.3719194" target="_blank" rel="noopener">10.1109/LRA.2026.3719194</a>
        - name: Reliability-dependent sensory reweighting in quiet standing
          icon: hero/scale
          image: selected-topics/quiet-standing-sensory-reweighting.svg
          description: |-
            Quiet standing depends on continuously deciding how much to trust
            vestibular, proprioceptive, and visual information. When one channel
            becomes unreliable, such as vision during a misleading visual
            perturbation, the nervous system should reduce that channel's influence
            without discarding the rest of the control loop. Posturography
            experiments have long characterized this reweighting, but a compact
            mathematical account of how sensory reliability travels from state
            estimation to postural action has been missing. This research provides
            one. A one-link inverted pendulum estimates its posture and selects
            ankle torque through a single free-energy objective, weighting each
            channel's prediction error by a precision that expresses how far that
            channel is trusted. The perturbation itself is applied as a misleading
            signal in one channel; the sensory context — that this channel is now
            unreliable — enters the model only through that channel's precision,
            while the body dynamics and the upright goal are held fixed. A fixed-
            point analysis then yields closed-form predictions for the belief bias a
            perturbation induces, each channel's contribution to the state update,
            and the resulting posture shift. Closed-loop simulations confirm them:
            lowering an unreliable channel's precision cuts perturbation-driven
            postural shifts by about 82%, as the analysis predicts, and the
            reduction appears in that channel's contribution to belief updating, so
            the reweighting happens in belief updating rather than in the choice of
            action. A graded mapping from reliability to precision controls a
            channel's influence smoothly, whereas reducing every precision at once
            does not have the same effect: reweighting is relative and channel-
            selective rather than an overall damping of the senses.<br><br>
            Related preprint:<br>
            <strong>A Mathematical Model of Reliability-Dependent Sensory
            Reweighting in Quiet Standing</strong><br>
            DOI: <a href="https://doi.org/10.64898/2026.06.23.733972" target="_blank" rel="noopener">10.64898/2026.06.23.733972</a>
        - name: Climbing-fiber-like online readout adaptation
          icon: hero/bolt
          image: selected-topics/climbing-fiber-readout-adaptation.svg
          description: |-
            Robots and human bodies can fail to move as expected when the same motor
            command is used under new conditions, such as carrying a load or being
            pushed by an external force. Controllers built on liquid neural networks
            and related continuous-time models (CfC) are usually trained offline and
            have no built-in way to recalibrate once the body or the environment
            changes, and retraining the whole network online is costly. This
            research asks whether a much cheaper route works: freeze the trained
            network and adapt only a small linear readout, driven by an error signal
            inspired by the cerebellum's climbing fibers. In a simulated two-link
            reaching task where a force field pushes the arm sideways, this readout-
            only adaptation re-straightens the reach. When the field is removed, the
            arm overshoots in the opposite direction — a mirror-image after-effect
            that is the behavioral signature of internal-model learning — which a
            feedback-only controller does not produce. The result carries over to a
            sparse, neuron-like NCP wiring when the network's internal state is used
            as the readout basis, holds across force-field strengths and directions,
            and, within the range tested, never required touching the frozen core.
            Adapting only the readout thus offers a biologically inspired, low-cost
            adaptation layer for offline-trained continuous-time controllers.<br><br>
            Related preprint:<br>
            <strong>Climbing-fiber-like online readout adaptation in frozen
            continuous-time networks reproduces force-field adaptation and
            after-effects</strong><br>
            DOI: <a href="https://doi.org/10.64898/2026.06.11.731593" target="_blank" rel="noopener">10.64898/2026.06.11.731593</a>
    design:
      layout: grid

  - block: collection
    id: papers
    content:
      title: Recent Publications
      text: ''
      count: 5
      archive:
        enable: true
        text: See all publications
        link: publications/
      filters:
        folders:
          - publications
        exclude_featured: false
    design:
      view: citation
---
