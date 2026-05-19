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
      title: Research Themes
      subtitle: ''
      items:
        - name: Liquid Neural Networks
          description: |-
            CfC / LNN as policy and dynamics models for robust, adaptive robot control.
          image: research-themes/liquid-neural-networks.png
        - name: Active Inference
          description: |-
            Free energy principle as a framework for goal-directed control of robot arms.
          image: research-themes/active-inference.png
        - name: Computational Neuroscience
          description: |-
            Building control systems grounded in human and biological neuroscience, physiology, and anatomy — using models, simulations, and experiments to surface gaps in current biological understanding.
          image: research-themes/computational-neuroscience.png
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
