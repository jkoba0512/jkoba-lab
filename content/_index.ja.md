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
        生物のように柔軟かつ適応的に動くロボットを実現する制御器を設計しています。研究は、生物からロボットへ、そしてロボットから生物へと往復します。

        能動的推論、小脳の誤差学習、平衡点仮説といった生物の運動制御の理論を、内部状態が力学系として時間発展するニューラルネットワークによる制御器として実装します。まず筋骨格モデルとロボットアームの上で閉ループで動かして検証し、そこで通用したものをヒューマノイドなどの身体をもつシステムへ広げていきます。

        そして、制御器がつまずくところ——姿勢を保てない、予期しない外力に適応できない、どの感覚を信頼すべきか決められない——は、脳と身体についての理解がまだ届いていない場所でもあります。
      media:
        src: research-hero.png
        alt: 神経系が見えるヒューマノイドロボットと、神経科学研究室でそれを調べるロボットアームのイラスト。
    design:
      layout: split-left
      size: compact

  - block: news-crosslang
    id: news
    content:
      title: 最近のニュース
      # 日本語版のブログ記事はないため、英語版の記事一覧をそのまま表示する。
      source_language: en
      page_type: blog
      count: 7

  - block: focus-areas
    content:
      title: 研究テーマ
      subtitle: |-
        生物の運動を支える仕組み、その原理を説明する理論、そしてそれを実装する計算モデルを統合し、環境や身体の変化に適応できる生物規範型ロボット制御の実現を目指しています。
      items:
        - name: 計算論的神経科学
          description: |-
            **生物学的な基盤。**

            人や動物の運動制御の仕組みを理論と計算モデルによって理解することを目指します。生体の知見は、ロボット制御が満たすべき目標や制約を与えます。また、筋骨格モデルやロボットの上でこれらの理論を閉ループで検証することで、生物の運動制御に残る未解明の問いを明らかにします。
          image: research-themes/computational-neuroscience.png
        - name: 能動的推論（Active Inference）
          description: |-
            **運動を説明する原理。**

            自由エネルギー原理に基づき、知覚・予測・行動と、不確かさの下で目標指向的な行動が生まれる仕組みを、一つの枠組みで説明する理論です。私たちはこれを適応的なロボット制御の理論的基盤として用います。同じ自由エネルギー目的関数が状態推定と行動生成の両方を駆動し、各感覚の信頼性は、その予測誤差にかける重み（precision）として表されます。
          image: research-themes/active-inference.png
        - name: ダイナミクスを持つニューラルネットワーク
          description: |-
            **実装のための計算基盤。**

            脳の運動は、神経集団の状態が時間発展するダイナミクスから生まれます。同じ原理にならい、内部状態が力学系として時間発展するニューラルネットワーク — Liquid Neural Networks（CfC）、LSTM、Mamba などの状態空間モデル — を、能動的推論に基づく制御器の実装基盤として用います。環境や身体の変化に応じて内部状態を柔軟に変化させることで、適応的なロボット制御を実現します。
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
        - name: Task-compatible active calibration and terminal controllability
          icon: hero/viewfinder-circle
          image: selected-topics/terminal-controllability-active-calibration.svg
          description: |-
            リンクの長さや手先の工具、運んでいる荷物が未知のロボットは、自ら動くことで自分の身体を測ることができます。ただし、その動きは自由ではありません。身体を測るための運動は、同時に、実行中のタスクを達成できる状態を保つものでなければならないからです。この研究では、冗長な平面アームが自己校正を行ってからリーチング課題に移るという二段階のプロトコルを用いて、このトレードオフを調べています。その結果、未知パラメータを同定可能にする探索運動だけでは十分ではないことが分かりました。校正自体は正確に終わっても、そこからでは決められた時間内にタスクを達成できない姿勢に、アームが取り残されることがあります。しかも、その失敗を予測したのはパラメータの推定誤差ではなく、校正を終えた時点の姿勢から動かしはじめて、決められたステップ数のうちに目標へ到達できるかどうか、という指標でした。つまり能動的キャリブレーションは、同定可能性をつくること、タスクと両立する形で探索すること、探索を終えた時点で、決められた時間内にタスクを達成できる状態を残しておくこと、という 3 つの層に分かれます。<br><br>
            関連論文:<br>
            <strong>When Identifiability Is Not Enough: Terminal Controllability
            in Task-Compatible Active Calibration</strong><br>
            DOI: <a href="https://doi.org/10.1109/LRA.2026.3719194" target="_blank" rel="noopener">10.1109/LRA.2026.3719194</a>
        - name: Reliability-dependent sensory reweighting in quiet standing
          icon: hero/scale
          image: selected-topics/quiet-standing-sensory-reweighting.svg
          description: |-
            静かに立っているとき、私たちは前庭感覚、固有感覚、視覚を組み合わせながら姿勢を保っています。ただし、それぞれの情報をいつも同じ強さで信頼すればよいわけではありません。たとえば視覚が揺らされて信頼しにくい状況では、視覚の影響を弱めつつ、他の感覚と制御ループは使い続ける必要があります。この研究は、その調整を簡潔な数理モデルとして定式化します。静止立位を 1 リンク倒立振子として表し、姿勢推定と足関節トルクの生成を同じ自由エネルギー目的関数で扱ったうえで、感覚条件の違いは各チャネルの予測誤差に与える precision の相対値だけを通じてモデルに入り、身体力学と直立の目標は固定します。さらに不動点解析から、信念のバイアス、各感覚の状態更新への寄与、そして生じる姿勢のずれについて閉じた形の予測が得られます。閉ループシミュレーションはこれを裏づけ、信頼できないチャネルの precision を下げると外乱による姿勢のずれは約 82% 減少し、その減少は当該チャネルの信念更新への寄与の低下として現れました。precision を一律に下げても同じ効果は生じないため、感覚再重み付けは全体的な感度低下ではなく、相対的でチャネル選択的な調整だといえます。<br><br>
            関連プレプリント:<br>
            <strong>A Mathematical Model of Reliability-Dependent Sensory
            Reweighting in Quiet Standing</strong><br>
            DOI: <a href="https://doi.org/10.64898/2026.06.23.733972" target="_blank" rel="noopener">10.64898/2026.06.23.733972</a>
        - name: Reach-and-hold posture stabilization
          icon: hero/hand-raised
          image_src: /jkoba-lab/media/selected-topics/myoArm.png
          image_fit: contain
          image_caption: 'myoArm image: MyoSuite, Apache License 2.0'
          description: |-
            腕をある姿勢で止めておくことは、固定された命令を出すだけでは実現できません。冗長な筋骨格アームでは、重力、筋の幾何、局所的な力学によって、一見もっともらしい姿勢が不安定な平衡点になることがあります。この研究では、MyoSuite の myoArm モデルを使い、固定された平衡点制御、共収縮、インピーダンス制御、重力補償、逆静力学コマンドを比較しています。その結果、これらの固定・非学習コントローラはいずれも目標近傍で安定な保持を実現できませんでした。したがって問題は、平衡点をどこに置くかだけでなく、閉ループの身体を安定化できるかどうかにあります。<br><br>
            関連プレプリント:<br>
            <strong>Reach-and-hold at a musculoskeletal arm posture is an
            unstable-equilibrium stabilization problem: the limits of fixed
            equilibrium-point and impedance controllers</strong><br>
            DOI: <a href="https://doi.org/10.64898/2026.06.15.732510" target="_blank" rel="noopener">10.64898/2026.06.15.732510</a>
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
