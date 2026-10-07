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
        - name: Reach-and-hold posture stabilization
          icon: hero/hand-raised
          image: selected-topics/reach-and-hold-posture-stabilization.svg
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
        - name: Learning source weights for target-position estimation
          icon: hero/adjustments-horizontal
          image: selected-topics/adaptive-sensory-weighting.svg
          description: |-
            How should we combine uncertain measurements of an object's location
            when their reliability changes? This study compares a method that
            uses the same <strong>learned weights</strong> for all inputs during
            evaluation with a method that computes weights from the current inputs
            using a <strong>learned rule</strong>. In simulations, a target stays
            fixed within each trial, and the estimator combines the current
            measurement with the mean of three initial measurements using weighted
            integration. Learning uses noisy reference
            measurements; the estimator receives no true target positions.
            Calibration, training, validation, and independent evaluation are
            repeated 100 times in each of four error conditions. Recalibration and
            fixed-weight learning explain most of the improvement over earlier
            supplied weights under reduced measurement accuracy and temporal
            correlation. With occasional large measurement errors, input-dependent
            weighting reduces mean squared error by 4.05% relative to learned
            fixed weights and assigns less weight, on average, to measurements
            with added offsets. Its additional benefit is below 0.5% under
            independent errors and reduced current accuracy, while fixed weights
            have slightly lower mean error under temporal correlation. Longer
            observation histories perform better in several conditions. The study
            shows the benefits and limits of recalibration, input-dependent
            weighting, and observation history within these measurement models;
            shared coordinate bias and correlated reference errors limit
            conclusions about physical accuracy.<br><br>
            Related preprint:<br>
            <strong>Learning source weights for target-position estimation:
            comparing fixed weights and an input-dependent rule</strong><br>
            DOI: <a href="https://doi.org/10.64898/2026.06.08.730995" target="_blank" rel="noopener">10.64898/2026.06.08.730995</a>
    design:
      layout: grid
---
