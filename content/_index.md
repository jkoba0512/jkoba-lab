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
        At the **Department of Intelligent and Control Systems**, Kyushu
        Institute of Technology, we design controllers that let robots move
        with the adaptivity of living things. By drawing on principles from
        neural computation, the free energy principle, and human movement, we
        turn models of biological motor control into continuous-time
        controllers for robotic systems, from robot arms to humanoids and other
        embodied platforms, and let the robots, in turn, reveal where
        our understanding of the brain and body still falls short.
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
        - name: "Liquid Neural Networks (LNN)"
          description: |-
            **The computational substrate.**

            Liquid Neural Networks, including CfC (Closed-form Continuous-time
            Networks), are neural network models for implementing
            active-inference-based controllers as continuous-time dynamics. By
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
        - name: Precision-controlled sensory reweighting in quiet standing
          icon: hero/scale
          image: selected-topics/quiet-standing-sensory-reweighting.svg
          description: |-
            Quiet standing depends on continuously deciding how much to trust
            vestibular, proprioceptive, and visual information. When one
            channel becomes unreliable, such as vision during a misleading
            visual perturbation, the nervous system should reduce that
            channel's influence without discarding the rest of the control
            loop. This research studies sensory reweighting with a minimal
            continuous-time active inference model of quiet standing. A
            one-link inverted pendulum estimates posture and selects ankle
            torque through the same free-energy objective, while context
            changes selectively adjust the precision of each sensory prediction
            error. The result is a compact account of how reliability changes
            can propagate from perception to postural action.<br><br>
            Related preprint:<br>
            <strong>Precision-Controlled Active Inference Accounts for Sensory
            Reweighting in Quiet Standing</strong><br>
            DOI: <a href="https://doi.org/10.64898/2026.06.23.733972" target="_blank" rel="noopener">10.64898/2026.06.23.733972</a>
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
