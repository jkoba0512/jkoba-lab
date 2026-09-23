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
        - name: Task-compatible active calibration and terminal feasibility
          icon: hero/viewfinder-circle
          image: selected-topics/terminal-controllability-active-calibration.svg
          description: |-
            A robot can learn its own body accurately and still fail the task it
            was learning for. Two studies examine this gap, from unknown link
            lengths to uncertain masses and inertias. Both ask how a robot can
            gather information through movement while preserving its ability to
            finish the task.<br><br>
            The first study considers geometric calibration in a redundant planar
            arm. Planning exploratory motion several steps ahead makes unknown
            link lengths identifiable while limiting task drift. Across 50 seeds,
            calibration failures disappear, but reaching failures remain: accurate
            parameters do not guarantee that the arm can reach the goal within
            the available time. A short rollout from the post-calibration state
            separates successes from failures better than parameter error or
            static singularity measures. Longer execution and null-space posture
            regularization together remove the remaining failures in the tested
            conditions.<br><br>
            The second study extends the question to inertial self-calibration
            in simulations of planar arms and a seven-degree-of-freedom KUKA LBR
            iiwa. It separates the parameter combinations that can be identified,
            the information obtainable through task-compatible excitation, and
            the feasibility of the final reach-and-hold maneuver. Null-space
            motion preserves essentially all free-excitation information in the
            redundant planar arm, while acceleration-estimation bias limits gains
            in the iiwa. Even a well-calibrated model can fail under torque, time,
            and velocity limits. A terminal-feasibility risk that accounts for
            velocity predicts these failures better than calibration error alone.
            Together, the studies show why self-calibration must assess both what
            the robot has learned and whether its current state and constraints
            still allow it to finish the task.<br><br>
            Related publication:<br>
            <strong>When Identifiability Is Not Enough: Terminal Controllability
            in Task-Compatible Active Calibration</strong><br>
            DOI: <a href="https://doi.org/10.1109/LRA.2026.3719194" target="_blank" rel="noopener">10.1109/LRA.2026.3719194</a><br><br>
            Related preprint:<br>
            <strong>Active Inertial Self-Calibration Beyond Identifiability:
            Task-Compatible Excitation and Terminal Feasibility</strong><br>
            DOI: <a href="https://doi.org/10.2139/ssrn.7507404" target="_blank" rel="noopener">10.2139/ssrn.7507404</a>
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
