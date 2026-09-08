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
            By testing these theories on robots, we also reveal open questions
            in biological motor control.
          image: research-themes/computational-neuroscience.png
        - name: Active Inference
          description: |-
            **The principle for explaining movement.**

            Based on the free energy principle, active inference provides a
            unified framework for perception, prediction, and action. It offers
            principles for generating goal-directed behavior under uncertainty
            and serves as a theoretical foundation for adaptive robot control.
          image: research-themes/active-inference.png
        - name: "Dynamical Neural Networks"
          description: |-
            **The computational substrate.**

            In the brain, movement arises from the evolving states of neural
            populations. Following the same principle, we implement
            active-inference-based controllers with neural networks whose
            internal states evolve as dynamical systems — Liquid Neural
            Networks (CfC), LSTMs, and state-space models such as Mamba. By
            flexibly changing their internal states in response to changes in
            the environment and the body, they support adaptive robot control.
          image: research-themes/liquid-neural-networks.png
    design:
      layout: cards

  - block: features
    id: selected-topics
    content:
      title: Selected Research Topics
      text: |-
        Short introductions to some of our research directions, written for
        readers who want the main idea before going into the technical details.
      items:
        - name: Task-compatible active calibration and terminal controllability
          icon: hero/viewfinder-circle
          image: selected-topics/terminal-controllability-active-calibration.svg
          description: |-
            A robot whose link lengths, tool, or payload are uncertain can move
            in order to measure itself. But it cannot move freely: the same
            motion has to keep the ongoing task within reach. This research
            studies that trade-off in a redundant planar arm that must calibrate
            itself and then complete a reaching task. Exploratory motion that
            makes the unknown parameters identifiable turns out not to be
            enough. The arm can finish calibration with accurate parameters and
            still be left in a posture from which the task can no longer be
            completed within the time available, and the failures are predicted
            not by parameter error but by whether the goal is still reachable
            within a fixed number of steps from the state where calibration
            ends. Active calibration therefore separates into three layers:
            creating identifiability, exploring in a task-compatible way, and
            ending the exploration in a state from which the task is still
            executable within the available horizon.<br><br>
            Related publication:<br>
            <strong>When Identifiability Is Not Enough: Terminal Controllability
            in Task-Compatible Active Calibration</strong><br>
            DOI: <a href="https://doi.org/10.1109/LRA.2026.3719194" target="_blank" rel="noopener">10.1109/LRA.2026.3719194</a>
        - name: Reliability-dependent sensory reweighting in quiet standing
          icon: hero/scale
          image: selected-topics/quiet-standing-sensory-reweighting.svg
          description: |-
            Quiet standing depends on continuously deciding how much to trust
            vestibular, proprioceptive, and visual information. When one
            channel becomes unreliable, such as vision during a misleading
            visual perturbation, the nervous system should reduce that
            channel's influence without discarding the rest of the control
            loop. This research gives a compact mathematical account of that
            adjustment. A one-link inverted pendulum estimates posture and
            selects ankle torque through the same free-energy objective, and a
            change in sensory conditions enters the model only through the
            relative precision assigned to each channel's prediction error,
            with the body dynamics and the upright goal held fixed. A
            fixed-point analysis then yields closed-form predictions for the
            belief bias, each channel's contribution to the state update, and
            the resulting posture shift. Closed-loop simulations confirm them:
            lowering an unreliable channel's precision cuts perturbation-driven
            postural shifts by about 82%, and the reduction shows up in that
            channel's contribution to belief updating. Reducing every precision
            at once does not have the same effect, so reweighting is relative
            and channel-selective rather than an overall damping of the
            senses.<br><br>
            Related preprint:<br>
            <strong>A Mathematical Model of Reliability-Dependent Sensory
            Reweighting in Quiet Standing</strong><br>
            DOI: <a href="https://doi.org/10.64898/2026.06.23.733972" target="_blank" rel="noopener">10.64898/2026.06.23.733972</a>
        - name: Reach-and-hold posture stabilization
          icon: hero/hand-raised
          image_src: /jkoba-lab/media/selected-topics/myoArm.png
          image_fit: contain
          image_size: compact
          image_caption: 'myoArm image: MyoSuite, Apache License 2.0'
          description: |-
            Holding an arm still is not as simple as sending a fixed command.
            In a redundant musculoskeletal arm, gravity, muscle geometry, and
            local dynamics can turn an apparently reasonable posture into an
            unstable equilibrium. This research uses the MyoSuite myoArm model
            to test fixed equilibrium-point, co-contraction, impedance,
            gravity-compensation, and inverse-statics controllers. The result is
            that none of these fixed, non-learning controllers produces a stable
            near-target hold, even when the commanded equilibrium is close to
            the goal. The problem is therefore not just where the equilibrium is
            placed, but whether the closed-loop body can stabilize it.<br><br>
            Related preprint:<br>
            <strong>Reach-and-hold at a musculoskeletal arm posture is an
            unstable-equilibrium stabilization problem: the limits of fixed
            equilibrium-point and impedance controllers</strong><br>
            DOI: <a href="https://doi.org/10.64898/2026.06.15.732510" target="_blank" rel="noopener">10.64898/2026.06.15.732510</a>
        - name: Climbing-fiber-like online readout adaptation
          icon: hero/bolt
          image_src: /jkoba-lab/media/selected-topics/climbing-fiber-readout-adaptation.png
          description: |-
            Robots and human bodies can fail to move as expected when the same
            motor command is used under new conditions, such as carrying a load
            or being pushed by an external force. To keep moving well, the
            controller needs a way to detect the error and gradually adjust the
            movement. This research studies whether a continuous-time neural
            controller can adapt online by changing only a small readout layer,
            using an error signal inspired by cerebellar climbing fibers. In a
            reaching task where an external force pushes the arm sideways, this
            adaptation makes the movement straighter again. When the force is
            removed, the model also shows a residual error in the opposite
            direction, an after-effect that indicates the controller has learned
            an internal model of the body and environment.<br><br>
            Related preprint:<br>
            <strong>Climbing-fiber-like online readout adaptation in frozen
            continuous-time networks reproduces force-field adaptation and
            after-effects</strong><br>
            DOI: <a href="https://doi.org/10.64898/2026.06.11.731593" target="_blank" rel="noopener">10.64898/2026.06.11.731593</a>
        - name: Adaptive sensory weighting in musculoskeletal reaching
          icon: hero/adjustments-horizontal
          image: selected-topics/adaptive-sensory-weighting.svg
          image_caption: 'myoArm image: MyoSuite, Apache License 2.0'
          description: |-
            When we reach for a target, we combine several kinds of information:
            what we see, what our muscles and joints tell us about the arm,
            what we have learned from past experience, and what we predict will
            happen next. But these sources are not always equally reliable.
            Vision can be delayed, and a source that usually helps can sometimes
            become misleading. This research uses a musculoskeletal robot model
            to study how a controller should decide which information to trust,
            and by how much, when reaching under such uncertainty.<br><br>
            Related preprints:<br>
            <strong>How a Predictive State Observer Can Self-Adapt Its Sensory
            Prediction-Error Correction Gain: Closed-Loop Evidence from a
            Muscle-Driven Reaching Task</strong><br>
            DOI: <a href="https://doi.org/10.64898/2026.06.03.729790" target="_blank" rel="noopener">10.64898/2026.06.03.729790</a><br><br>
            <strong>Reliability-weighted target-position estimation in a
            musculoskeletal arm model: adaptive priors and learned source
            weighting under violations of fixed-precision assumptions</strong><br>
            DOI: <a href="https://doi.org/10.64898/2026.06.08.730995" target="_blank" rel="noopener">10.64898/2026.06.08.730995</a>
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
