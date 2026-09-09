---
title: 'Research Topics'
date: 2026-09-08
type: landing

sections:
  - block: markdown
    content:
      title: ''
      text: |-
        # Research Topics

        Short introductions to our research directions, written for readers who
        want the main idea before going into the technical details. Each topic
        names the related publication or preprint.
    design:
      columns: '1'

  - block: features
    id: topics
    content:
      title: ''
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
        - name: Reach-and-hold posture stabilization
          icon: hero/hand-raised
          image_src: /jkoba-lab/media/selected-topics/myoArm.png
          image_fit: contain
          image_size: compact
          image_caption: 'myoArm image: MyoSuite, Apache License 2.0'
          description: |-
            Holding an arm still is not as simple as sending a fixed command. In a
            musculoskeletal arm with more muscles than the task needs, gravity,
            muscle geometry, and local dynamics can turn an apparently reasonable
            posture into an unstable equilibrium: like a pencil balanced on its tip,
            any small deviation grows unless something actively corrects it. This
            research uses the MyoSuite myoArm model, under an evaluation criterion
            fixed before the experiments, to test five standard controllers that do
            not learn: a reflex that pulls toward a set posture, the same reflex
            stiffened by co-contraction, endpoint impedance control, gravity-
            compensation feedforward, and exact gravity balancing that places the
            equilibrium at the goal itself. None produces a stable near-target hold
            — not even exact balancing. The problem is therefore not where the
            equilibrium is placed but whether the closed-loop body can stabilize it.
            Reach-and-hold is an unstable-dynamics stabilization problem, and that
            points toward controllers that learn selective impedance or use
            predictive internal models.<br><br>
            Related preprint:<br>
            <strong>Reach-and-hold at a musculoskeletal arm posture is an
            unstable-equilibrium stabilization problem: the limits of fixed
            equilibrium-point and impedance controllers</strong><br>
            DOI: <a href="https://doi.org/10.64898/2026.06.15.732510" target="_blank" rel="noopener">10.64898/2026.06.15.732510</a>
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
---
