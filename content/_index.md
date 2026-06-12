---
title: ''
summary: ''
date: 2026-05-07
type: landing

sections:
  - block: markdown
    content:
      title: ''
      subtitle: ''
      text: |-
        # 🤖 jkoba Lab

        ## Biologically-Inspired Robotics

        We design controllers for robots by drawing on principles from neural
        computation and human movement, at the **Department of Intelligent
        and Control Systems**, Kyushu Institute of Technology.
    design:
      columns: '1'

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
      view: card

  - block: collection
    id: papers
    content:
      title: Recent Publications
      text: ''
      count: 5
      archive:
        enable: true
        text: See all publications
        link: /publications/
      filters:
        folders:
          - publications
        exclude_featured: false
    design:
      view: citation
---
