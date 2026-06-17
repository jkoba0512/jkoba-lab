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
        We fuse these perspectives — a biological grounding, a guiding
        principle, and a computational substrate — into a single approach to
        adaptive, biologically-inspired motor control.
      items:
        - name: Computational Neuroscience
          description: |-
            **The biological grounding.** Models of human and biological motor control set the targets and constraints that *Active Inference* formalizes and *Liquid Neural Networks* implement — and the robot, in turn, surfaces gaps in our biological understanding.
          image: research-themes/computational-neuroscience.png
        - name: Active Inference
          description: |-
            **The guiding principle.** The free energy principle links the neuroscience grounding to the network substrate, turning prediction and uncertainty into goal-directed control of robot arms.
          image: research-themes/active-inference.png
        - name: Liquid Neural Networks
          description: |-
            **The computational substrate.** CfC / LNN realize the active-inference controller as continuous-time dynamics — the trainable body that the neuroscience grounds and the inference principle drives.
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
            Reaching requires a model to decide how much it should trust vision,
            body sense, prediction, and prior expectations. We study both how
            sensory-error correction gains can adapt under delay and how
            reliability-weighted target estimation changes when trusted sources
            become misleading.<br><br>
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
            Robots and biological bodies both need to keep moving well when the
            relationship between motor commands and movement suddenly changes.
            We study whether a continuous-time neural controller can stay
            mostly frozen, while a small readout layer adapts online from an
            error signal similar to cerebellar climbing-fiber feedback. In a
            force-field reaching task, this simple adaptation straightens
            perturbed movements and produces after-effects when the force field
            is removed, a hallmark of internal-model learning.<br><br>
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
