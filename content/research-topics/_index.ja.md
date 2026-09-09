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
            リンクの長さや手先の工具、運んでいる荷物が未知のロボットは、自ら動くことで自分の身体を測ることができます。ただし、その動きは自由ではありません。同じ運動が、実行中のタスクを達成できる状態を保つものでなければならないからです。この研究では、リンク長が未知の冗長な平面アームが、自己校正を行ってから決められた時間内にリーチング課題を完了するという設定で、このトレードオフを調べています。まず、探索運動を 1 ステップ先ではなく数ステップ先まで見て計画する探索則を開発し、タスクからのずれを抑えながら未知パラメータを同定可能にしました。50 試行で校正の失敗はゼロになります。それでも、タスクに失敗する試行が多く残ります。校正は正確に終わっているのに、残りのステップ数では目標に到達できない姿勢にアームが取り残されるのです。どの試行が失敗するかは、パラメータの推定誤差でも通常の特異点指標でも予測できませんでした。一方、校正を終えた状態から短時間だけ先読みするロールアウトを使うと、成功する試行と失敗する試行を完全に見分けることができました。この終端可制御性（terminal controllability）は独立した要件であり、探索中に姿勢を良条件に保ち、タスクの実行時間を延ばすことで、残っていた失敗もなくなります。したがって能動的キャリブレーションには、同定可能性をつくること、タスクと両立する形で探索すること、探索を終えた時点でタスクを実行できる状態にあること、という 3 つの独立した要件があり、前の 2 つを満たしても 3 つ目で失敗しうるのです。<br><br>
            関連論文:<br>
            <strong>When Identifiability Is Not Enough: Terminal Controllability
            in Task-Compatible Active Calibration</strong><br>
            DOI: <a href="https://doi.org/10.1109/LRA.2026.3719194" target="_blank" rel="noopener">10.1109/LRA.2026.3719194</a>
        - name: Reliability-dependent sensory reweighting in quiet standing
          icon: hero/scale
          image: selected-topics/quiet-standing-sensory-reweighting.svg
          description: |-
            静かに立っているとき、私たちは前庭感覚、固有感覚、視覚を組み合わせながら姿勢を保っています。ただし、それぞれの情報をいつも同じ強さで信頼すればよいわけではありません。たとえば視覚が揺らされて信頼しにくい状況では、視覚の影響を弱めつつ、他の感覚と制御ループは使い続ける必要があります。この再重み付け自体はポスチュログラフィの実験で古くから特徴づけられてきましたが、感覚の信頼性が状態推定から姿勢を保つ行動までどのように伝わるのかを説明する簡潔な数理モデルはありませんでした。この研究はそれを与えます。静止立位を 1 リンク倒立振子として表し、姿勢推定と足関節トルクの生成を一つの自由エネルギー目的関数で扱います。モデルの作り方は次のとおりです。脳は、「いま自分はどう傾いているか」を、各感覚から届く情報と自分の予測とを照らし合わせて推定します。このとき、各感覚の情報をどのくらい信頼するかを表す重み（precision）を感覚ごとに置きます。シミュレーションでは、たとえば視覚に誤った傾きの情報を与えるといった外乱を実際に加えます。一方、「いまは視覚が信頼できない」という状況の違いは、その感覚の重みの値を変えることだけで表し、身体の力学と「まっすぐ立つ」という目標は変えません。変わるのが重みだけなので、外乱を受けたときに姿勢の推定がどれだけずれるか、そのずれに各感覚がどれだけ関わっているか、そして結果として姿勢がどれだけ傾くかを、重みの値から数式で直接計算できます（不動点解析）。実際に閉ループでシミュレーションすると、この予測どおりの結果になりました。信頼できない感覚の重みを下げると、外乱による姿勢の傾きは約 82% 減り、その減り方は、その感覚が姿勢の推定に及ぼす寄与の減り方と一致していました。つまり再重み付けは、「どう動くか」を決める段階ではなく、「いま自分がどう傾いているか」を推定する段階で起きています。また、信頼性に応じて重みを段階的に変えれば感覚の寄与を滑らかに調節できる一方、すべての感覚の重みを一律に下げても同じ効果は得られません。感覚再重み付けとは、感覚全体の感度を落とすことではなく、信頼できる感覚とそうでない感覚の重みの比を変えることなのです。<br><br>
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
            腕をある姿勢で止めておくことは、固定された命令を出すだけでは実現できません。タスクに必要な数より多くの筋をもつ筋骨格アームでは、重力、筋の幾何、局所的な力学によって、一見もっともらしい姿勢が不安定な平衡点になることがあります。鉛筆を先端で立てるように、わずかなずれも、何かが積極的に修正しなければ拡大していきます。この研究では、MyoSuite の myoArm モデルを使い、評価基準を実験前に固定したうえで、学習しない標準的な制御器を 5 種類試しました。設定した姿勢へ引き戻す反射、それを共収縮で硬くしたもの、手先のインピーダンス制御、重力補償のフィードフォワード、そして目標姿勢そのものに平衡点を置く正確な重力の釣り合いです。いずれも目標近傍で安定な保持を実現できませんでした。正確な釣り合いでさえ、です。したがって問題は、平衡点をどこに置くかではなく、閉ループの身体がそれを安定化できるかどうかにあります。腕を伸ばして止める動作は不安定な力学を安定化する問題であり、この結果は、選択的なインピーダンスを学習する制御器や、予測的な内部モデルを使う制御器へと向かう根拠になります。<br><br>
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
