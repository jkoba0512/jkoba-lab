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
        - name: Task-compatible active calibration and terminal feasibility
          icon: hero/viewfinder-circle
          image: selected-topics/terminal-controllability-active-calibration.svg
          description: |-
            ロボットが自分の身体を正確に学習できても、その学習が必要だったタスクに成功するとは限りません。この問題を、リンク長などの幾何パラメータと、質量・慣性などの動特性パラメータを対象とする 2 つの研究で調べています。共通する問いは、タスクを最後まで実行できる状態を保ちながら、自らの運動を通じて身体の情報をどう獲得するか、というものです。<br><br>
            1 つ目の研究は、リンク長が未知の冗長な平面アームを扱います。数ステップ先まで探索運動を計画することで、タスクからのずれを抑えながらリンク長を同定可能にし、50 試行で校正の失敗をなくしました。それでも、リーチングの失敗は残ります。パラメータが正確でも、校正後の姿勢から決められた時間内に目標へ到達できるとは限らないためです。校正後の状態から短時間の動きを予測すると、パラメータ誤差や静的な特異点指標よりもよく成功と失敗を見分けられました。検証した条件では、タスクの実行時間を延ばすことと、手先の運動に影響しない自由度を使って姿勢を整えることを組み合わせると、残っていた失敗もなくなりました。<br><br>
            2 つ目の研究は、この問いを慣性パラメータの自己校正へ広げ、平面アームと 7 自由度の KUKA LBR iiwa のシミュレーションで検証します。ここでは、どのパラメータの組合せが同定可能か、タスクと両立する励起運動でどれだけ情報を得られるか、最後の到達・保持動作を実行できるか、という 3 層に分けて考えます。冗長な平面アームでは、手先を動かさない零空間の運動で、自由な励起運動とほぼ同じ情報を得られました。一方、iiwa では加速度推定の偏りが情報獲得の効果を制限します。また、校正が正確でも、トルク・時間・速度の制約によって到達・保持に失敗します。速度も考慮して終端動作の実行可能性を評価するリスク指標は、校正誤差だけよりもよくこの失敗を予測しました。両研究が示すのは、自己校正では「身体をどれだけ正確に学んだか」とともに、「現在の状態と制約のもとでタスクを完了できるか」を評価する必要がある、ということです。<br><br>
            関連論文:<br>
            <strong>When Identifiability Is Not Enough: Terminal Controllability
            in Task-Compatible Active Calibration</strong><br>
            DOI: <a href="https://doi.org/10.1109/LRA.2026.3719194" target="_blank" rel="noopener">10.1109/LRA.2026.3719194</a><br><br>
            関連プレプリント:<br>
            <strong>Active Inertial Self-Calibration Beyond Identifiability:
            Task-Compatible Excitation and Terminal Feasibility</strong><br>
            DOI: <a href="https://doi.org/10.2139/ssrn.7507404" target="_blank" rel="noopener">10.2139/ssrn.7507404</a>
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
          image: selected-topics/reach-and-hold-posture-stabilization.svg
          description: |-
            腕をある姿勢で止めておくことは、固定された命令を出すだけでは実現できません。タスクに必要な数より多くの筋をもつ筋骨格アームでは、重力、筋の幾何、局所的な力学によって、一見もっともらしい姿勢が不安定な平衡点になることがあります。鉛筆を先端で立てるように、わずかなずれも、何かが積極的に修正しなければ拡大していきます。この研究では、MyoSuite の myoArm モデルを使い、評価基準を実験前に固定したうえで、学習しない標準的な制御器を 5 種類試しました。設定した姿勢へ引き戻す反射、それを共収縮で硬くしたもの、手先のインピーダンス制御、重力補償のフィードフォワード、そして目標姿勢そのものに平衡点を置く正確な重力の釣り合いです。いずれも目標近傍で安定な保持を実現できませんでした。正確な釣り合いでさえ、です。したがって問題は、平衡点をどこに置くかではなく、閉ループの身体がそれを安定化できるかどうかにあります。腕を伸ばして止める動作は不安定な力学を安定化する問題であり、この結果は、選択的なインピーダンスを学習する制御器や、予測的な内部モデルを使う制御器へと向かう根拠になります。<br><br>
            関連プレプリント:<br>
            <strong>Reach-and-hold at a musculoskeletal arm posture is an
            unstable-equilibrium stabilization problem: the limits of fixed
            equilibrium-point and impedance controllers</strong><br>
            DOI: <a href="https://doi.org/10.64898/2026.06.15.732510" target="_blank" rel="noopener">10.64898/2026.06.15.732510</a>
        - name: Climbing-fiber-like online readout adaptation
          icon: hero/bolt
          image: selected-topics/climbing-fiber-readout-adaptation.svg
          description: |-
            ロボットや人の身体は、同じ命令を出しても、荷物を持ったり外から力を受けたりすると、思った通りに動かなくなることがあります。Liquid Neural Network（CfC）などの連続時間モデルで作った制御器は、ふつうオフラインで学習され、身体や環境が変わったあとにオンラインで再校正する仕組みを持っていません。ネットワーク全体をオンラインで学習し直すのはコストが高すぎます。この研究は、もっと安い方法で足りるかを問います。学習済みのネットワークは凍結したまま、小脳の登上線維に着想を得た誤差信号で、小さな線形の読み出し層だけを適応させるのです。腕を横へ押す力場をかけた 2 リンクのリーチング課題のシミュレーションでは、この読み出しだけの適応で動きが再びまっすぐになります。力場を取り除くと、腕は逆方向へ行き過ぎます。この鏡像の「残効」は内部モデルを学習したことの行動上の特徴で、フィードバックだけの制御器では現れません。この結果は、ネットワークの内部状態を読み出しの基底に使えば、疎で神経回路に近い NCP 配線にもそのまま通用し、力場の強さや方向を変えても成り立ち、試した範囲では凍結したコアに手を入れる必要は一度もありませんでした。読み出しだけを適応させることは、オフラインで学習した連続時間制御器に対する、生物に着想を得た低コストの適応層になるのです。<br><br>
            関連プレプリント:<br>
            <strong>Climbing-fiber-like online readout adaptation in frozen
            continuous-time networks reproduces force-field adaptation and
            after-effects</strong><br>
            DOI: <a href="https://doi.org/10.64898/2026.06.11.731593" target="_blank" rel="noopener">10.64898/2026.06.11.731593</a>
        - name: Adaptive sensory weighting in musculoskeletal reaching
          icon: hero/adjustments-horizontal
          image: selected-topics/adaptive-sensory-weighting.svg
          description: |-
            目標に向かって手を伸ばすとき、私たちは目で見た位置、筋肉や関節から感じる腕の位置、これまでの経験、そして「こう動くはずだ」という予測を組み合わせています。これらの情報は同じように信頼できるわけではなく、信頼性は状況で変わります。視覚は遅れることがあり、ふだん役に立つ事前の思い込みが間違っていることもあれば、視覚の手がかりが偽物のこともあります。34 の筋をもつ MyoSuite のアームを使い、2 つの研究で、制御器が各情報源をどのくらい信頼すべきかを調べました。1 つ目は、予測型の状態観測器が自分の予測を感覚の誤差でどれだけ強く補正するかを変えた研究です。最適な設定は一つに決まりません。感覚に遅れがなければ中程度の補正が最も良く、感覚が遅れる条件では強い補正が勝ち、予測だけに頼ると精度が 2〜6 cm 落ちます。条件に応じて補正の強さを変える適応則はその損失の一部を取り戻しますが、遅れ条件では理想より 1〜2 cm 及びません。2 つ目は、視覚・固有感覚・予測・タスクの事前分布をそれぞれの precision で重み付けして目標位置を推定する研究です。固定した precision の重み付けは前提が合っているときには機能しますが、信頼しているのに間違った事前分布は視覚が悪くなるほど推定を偏らせ、偽の手がかりの影響はノイズの大きさで変わります。したがって重みそのものをデータから更新するか、学習する必要があります。両者に共通する教訓は、信頼性で重み付けする統合は必要だが、その重みを前もって固定することはできない、ということです。<br><br>
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
