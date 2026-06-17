---
title: ''
summary: ''
date: 2026-05-07
type: landing

sections:
  - block: hero
    content:
      eyebrow: 生物に着想を得たロボティクス
      title: 🤖 jkoba Lab
      text: |-
        小林順研究室では、生物のように柔軟かつ適応的に動くロボットの実現を目指しています。

        神経計算、自由エネルギー原理、人の運動制御に関する知見を活用し、生物の運動制御モデルをロボットアームやヒューマノイドなどのロボットシステムで動作する制御器として実装・検証しています。

        ロボットを研究の実験基盤として活用することで、工学的に有用な制御技術を開発するとともに、脳と身体がどのように協調して運動を実現しているのかという科学的理解の深化にも取り組んでいます。
      media:
        src: research-hero.png
        alt: 神経系が見えるヒューマノイドロボットと、神経科学研究室でそれを調べるロボットアームのイラスト。
    design:
      layout: split-left
      size: compact

  - block: markdown
    id: news
    content:
      title: 最近のニュース
      text: |-
        - **2026-06-15**: [Preprint posted: Climbing-fiber-like online readout adaptation](/jkoba-lab/blog/2026-06-15-climbing-fiber-preprint/)  
          DOI: [10.64898/2026.06.11.731593](https://doi.org/10.64898/2026.06.11.731593)
        - **2026-06-11**: [Preprint posted: Reliability-weighted target-position estimation](/jkoba-lab/blog/2026-06-11-reliability-weighted-preprint/)  
          DOI: [10.64898/2026.06.08.730995](https://doi.org/10.64898/2026.06.08.730995)
        - **2026-06-08**: [Preprint posted: Predictive state observer gain adaptation](/jkoba-lab/blog/2026-06-08-predictive-state-observer-preprint/)  
          DOI: [10.64898/2026.06.03.729790](https://doi.org/10.64898/2026.06.03.729790)
    design:
      columns: '1'

  - block: focus-areas
    content:
      title: 研究テーマ
      subtitle: |-
        生物の運動を支える仕組み、その原理を説明する理論、そしてそれを実装する計算モデルを統合し、環境や身体の変化に適応できる生物規範型ロボット制御の実現を目指しています。
      items:
        - name: 計算論的神経科学
          description: |-
            **生物学的な基盤。**

            人や動物の運動制御の仕組みを理論と計算モデルによって理解することを目指します。生体の知見は、ロボット制御が満たすべき目標や制約を与えます。また、ロボット上で理論を検証することで、生物の運動制御に関する未解明な課題を明らかにします。
          image: research-themes/computational-neuroscience.png
        - name: 能動的推論（Active Inference）
          description: |-
            **運動を説明する原理。**

            自由エネルギー原理に基づき、知覚・予測・行動を統一的に説明する枠組みです。不確かさの下で目標指向的な行動を生成するための原理を与え、適応的なロボット制御の理論的基盤となります。
          image: research-themes/active-inference.png
        - name: Liquid Neural Networks（LNN：液体ニューラルネットワーク）
          description: |-
            **実装のための計算基盤。**

            CfC（Closed-form Continuous-time Networks）をはじめとする Liquid Neural Networks は、能動的推論に基づく制御器を連続時間ダイナミクスとして実装するための神経ネットワークモデルです。環境や身体の変化に応じて状態を柔軟に変化させることで、適応的なロボット制御を実現します。
          image: research-themes/liquid-neural-networks.png
    design:
      layout: cards

  - block: features
    id: selected-topics
    content:
      title: Selected Research Topics
      text: |-
        研究の考え方を、技術的な詳細に入る前に把握できるように短く紹介します。論文タイトルと DOI は原文のまま掲載しています。
      items:
        - name: Adaptive sensory weighting in musculoskeletal reaching
          icon: hero/adjustments-horizontal
          image: selected-topics/adaptive-sensory-weighting.svg
          image_caption: 'myoArm image: MyoSuite, Apache License 2.0'
          description: |-
            目標に向かって手を伸ばすとき、私たちは目で見た位置、筋肉や関節から感じる腕の位置、これまでの経験、そして「こう動くはずだ」という予測を組み合わせています。ただし、いつもすべての情報が正しいとは限りません。視覚が遅れたり、あてにしていた情報が間違っていたりすることもあります。この研究では、そのような状況で、どの情報をどのくらい信頼すればよいかをロボットの筋骨格モデルを使って調べています。<br><br>
            関連プレプリント:<br>
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
            ロボットや人の身体は、同じ命令を出しても、荷物を持ったり外から力を受けたりすると、思った通りに動かなくなることがあります。それでもうまく動くためには、ずれを見つけて動かし方を少しずつ直す仕組みが必要です。この研究では、小脳の登上線維が運ぶ誤差信号のような情報を手がかりにして、連続時間ニューラルコントローラの一部だけをオンラインで調整する方法を調べています。腕の動きを横から押し曲げるような外力を加えた課題では、この調整によって動きが再びまっすぐに近づきます。また、その外力を取り除いた後に逆向きのずれが現れる「残効」も再現されます。これは、身体の動かし方を内部で学習したことを示す重要な特徴です。<br><br>
            関連プレプリント:<br>
            <strong>Climbing-fiber-like online readout adaptation in frozen
            continuous-time networks reproduces force-field adaptation and
            after-effects</strong><br>
            DOI: <a href="https://doi.org/10.64898/2026.06.11.731593" target="_blank" rel="noopener">10.64898/2026.06.11.731593</a>
    design:
      layout: grid

  - block: markdown
    id: papers
    content:
      title: 最近の論文
      text: |-
        Publications は英語版のページで管理しています。日本語版トップからも、現在の Publications 一覧をそのまま確認できます。

        [See all publications](/jkoba-lab/publications/)
    design:
      columns: '1'
---
