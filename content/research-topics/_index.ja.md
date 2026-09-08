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

        研究の考え方を、技術的な詳細に入る前に把握できるように短く紹介します。論文タイトルと DOI は原文のまま掲載しています。
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
            リンクの長さや手先の工具、運んでいる荷物が未知のロボットは、自ら動くことで自分の身体を測ることができます。ただし、その動きは自由ではありません。同じ運動が、実行中のタスクを達成できる状態を保つものでなければならないからです。この研究では、リンク長が未知の冗長な平面アームが、自己校正を行ってから決められた時間内にリーチング課題を完了するという設定で、このトレードオフを調べています。まず、探索運動を 1 ステップ先ではなく数ステップ先まで見て計画する探索則を開発し、タスクからのずれを抑えながら未知パラメータを同定可能にしました。50 試行で校正の失敗はゼロになります。それでも、タスクに失敗する試行が多く残ります。校正は正確に終わっているのに、残りのステップ数では目標に到達できない姿勢にアームが取り残されるのです。どの試行が失敗するかは、パラメータの推定誤差でも通常の特異点指標でも予測できず、校正を終えた状態から短時間だけ先読みするロールアウトが完全に分離しました。この終端可制御性（terminal controllability）は独立した要件であり、探索中に姿勢を良条件に保ち、タスクの実行時間を延ばすことで、残っていた失敗もなくなります。したがって能動的キャリブレーションには、同定可能性をつくること、タスクと両立する形で探索すること、探索を終えた時点でタスクを実行できる状態にあること、という 3 つの独立した要件があり、前の 2 つを満たしても 3 つ目で失敗しうるのです。<br><br>
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
---
