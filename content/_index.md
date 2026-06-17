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
        - name: Continuous-time neural controllers
          icon: hero/cpu-chip
          description: |-
            Robots move in continuous time, but many neural controllers are
            trained as if time advances in fixed steps. We study liquid neural
            networks and related models that naturally describe ongoing motion.
        - name: Active inference for embodied robots
          icon: hero/adjustments-horizontal
          description: |-
            Active inference treats action as a way to reduce the gap between
            what a robot predicts and what it senses. This gives us a principled
            way to connect perception, uncertainty, and movement.
        - name: Learning from the body
          icon: hero/user
          description: |-
            Bodies are not just machines to be controlled; their muscles,
            sensors, and dynamics shape the computation itself. Musculoskeletal
            simulations help us test ideas about biological motor control.
        - name: Self-tuning sensory correction
          icon: hero/arrow-path
          description: |-
            When a robot predicts its own movement, it also has to decide how
            strongly to trust incoming sensory errors. We study how that
            correction gain can adapt during muscle-driven reaching, especially
            when sensory feedback is delayed.
        - name: Estimating goals under uncertain senses
          icon: hero/eye
          description: |-
            Reaching depends on combining vision, body sense, prediction, and
            prior expectations. We study how a musculoskeletal model can weight
            these information sources by reliability, and what must change when
            a normally trusted source becomes misleading.
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
