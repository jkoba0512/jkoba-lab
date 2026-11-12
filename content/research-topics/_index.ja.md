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
        - name: タスクと両立する能動的校正と終端実行可能性
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
        - name: 静止立位における信頼性依存の感覚再重み付け
          icon: hero/scale
          image: selected-topics/quiet-standing-sensory-reweighting.svg
          description: |-
            静かに立っているとき、私たちは前庭感覚、固有感覚、視覚を組み合わせながら姿勢を保っています。この研究では、感覚ごとの予測誤差の精度と、内在性の足関節剛性を含む 1 リンク倒立振子モデルを用い、状態推定と足関節トルクの生成を一つの自由エネルギー目的関数で扱います。固定点解析により、感覚精度、姿勢目標の力学、足関節剛性から、外乱による信念の偏り、各感覚の状態更新への寄与、定常姿勢、および線形安定性条件を導きます。閉ループの 115 試行では、安定した条件の平衡姿勢が予測と 0.001 度以内で一致し、不安定と予測された 2 条件では姿勢が発散またはドリフトしました。信頼できない感覚の精度を 8 分の 1 にすると、外乱による姿勢変化は 82% 減り、その感覚の状態更新への寄与も同じように減りました。足関節剛性は視覚・感覚のみの外乱ではこの低減をほぼ変えませんでしたが、支持面自体を傾けた場合には低減幅を制限しました。試行中に精度を切り替える実験は、別個の行動ゲインではなく信念更新が変化を足関節トルクへ伝えることを示しました。信頼性に応じた精度の調節で感覚の寄与は変えられますが、全感覚の精度を一律に下げても同じ効果は得られません。<br><br>
            関連プレプリント:<br>
            <strong>A Mathematical Model of Reliability-Dependent Sensory
            Reweighting in Quiet Standing</strong><br>
            DOI: <a href="https://doi.org/10.64898/2026.06.23.733972" target="_blank" rel="noopener">10.64898/2026.06.23.733972</a>
        - name: 腕の到達・姿勢保持の安定化
          icon: hero/hand-raised
          image: selected-topics/reach-and-hold-posture-stabilization.svg
          description: |-
            腕をある姿勢で止めておくことは、固定された命令を出すだけでは実現できません。タスクに必要な数より多くの筋をもつ筋骨格アームでは、重力、筋の幾何、局所的な力学によって、一見もっともらしい姿勢が不安定な平衡点になることがあります。鉛筆を先端で立てるように、わずかなずれも、何かが積極的に修正しなければ拡大していきます。この研究では、MyoSuite の myoArm モデルを使い、評価基準を実験前に固定したうえで、学習しない標準的な制御器を 5 種類試しました。設定した姿勢へ引き戻す反射、それを共収縮で硬くしたもの、手先のインピーダンス制御、重力補償のフィードフォワード、そして目標姿勢そのものに平衡点を置く正確な重力の釣り合いです。いずれも目標近傍で安定な保持を実現できませんでした。正確な釣り合いでさえ、です。したがって問題は、平衡点をどこに置くかではなく、閉ループの身体がそれを安定化できるかどうかにあります。腕を伸ばして止める動作は不安定な力学を安定化する問題であり、この結果は、選択的なインピーダンスを学習する制御器や、予測的な内部モデルを使う制御器へと向かう根拠になります。<br><br>
            関連プレプリント:<br>
            <strong>Reach-and-hold at a musculoskeletal arm posture is an
            unstable-equilibrium stabilization problem: the limits of fixed
            equilibrium-point and impedance controllers</strong><br>
            DOI: <a href="https://doi.org/10.64898/2026.06.15.732510" target="_blank" rel="noopener">10.64898/2026.06.15.732510</a>
        - name: 読み出し適応と学習後に残る補償
          icon: hero/bolt
          image: selected-topics/climbing-fiber-readout-adaptation.svg
          description: |-
            腕が動きをそらす力に適応したあとには、その力を取り除くと反対方向へずれる「残効」が現れることがあります。この研究では、残効だけでなく、学習された補償の内容や、学習を止めた後にも性能が保たれるかを調べます。速度に応じた横向きの力が加わる条件で、トルク駆動の 2 リンク腕が 8 方向へ到達運動を行うシミュレーションを使いました。適応するのは線形のトルク読み出しだけで、その特徴を生成するネットワークは固定します。疎な神経回路型配線を含む 3 種類の連続時間ネットワーク構成に加え、echo-state network と動径基底関数を特徴に使う構成を比較し、読み出しには LMS または RLS の更新則を用います。3 つのモデル初期値で学習率を選び、別の 10 初期値と 3 種類の力場で評価しました。6 方式すべてが固定読み出しの基準より追跡性能を改善し、全評価試行で設定した残効基準を満たしました。さらに、学習された出力変化が理想的な補償にどれだけ近いかを測り、更新を止めた最終読み出しでも制御性能を評価しました。更新停止後の追跡誤差は、適応前の制御器に比べて 40〜97%低下しました。ただし、準備条件やハイパーパラメータが方式間で異なるため、特徴の種類や更新則だけの効果を切り分けた比較ではありません。<br><br>
            関連プレプリント:<br>
            <strong>Readout adaptation in simulated arm reaching: learned
            compensation and performance after updates stop</strong><br>
            DOI: <a href="https://doi.org/10.64898/2026.06.11.731593" target="_blank" rel="noopener">10.64898/2026.06.11.731593</a>
        - name: 目標位置推定における情報源の重み学習
          icon: hero/adjustments-horizontal
          image: selected-topics/adaptive-sensory-weighting.svg
          description: |-
            物体の位置を示す複数の測定値に誤差があり、その信頼性も変わるとき、どのような重みで組み合わせればよいのでしょうか。この研究では、<strong>学習した重み</strong>を評価中のすべての入力に共通して使う方法と、<strong>学習した規則</strong>によって現在の入力から重みを計算する方法を比較します。シミュレーションでは、各試行内で目標位置を一定に保ち、推定器は現在の測定値と最初の 3 回の測定値の平均を、重みを付けて組み合わせます。学習にはノイズを含む参照測定値を使い、真の目標位置は推定器に与えません。座標の校正、学習、検証、独立評価を、4 種類の誤差条件それぞれで 100 回繰り返しました。測定精度の低下や時間相関のある条件では、以前に設定された重みからの改善の大部分を、再校正と固定重みの学習が説明しました。ときどき大きな測定誤差が生じる条件では、入力依存の重み付けが、学習した固定重みに比べて平均二乗誤差を 4.05% 減らし、オフセットが加わった測定値への重みを平均的に小さくしました。一方、独立誤差や現在の測定精度が低下した条件での追加の改善は 0.5% 未満で、時間相関のある条件では固定重みの誤差がわずかに小さくなりました。より長い観測履歴を使う方法は、複数の条件で良い結果を示しました。この研究は、これらの測定モデルの範囲で、再校正、入力依存の重み付け、観測履歴の利点と限界を示します。共通の座標バイアスや参照誤差の相関は、物理的な正確さについての結論を制約します。<br><br>
            関連プレプリント:<br>
            <strong>Learning source weights for target-position estimation:
            comparing fixed weights and an input-dependent rule</strong><br>
            DOI: <a href="https://doi.org/10.64898/2026.06.08.730995" target="_blank" rel="noopener">10.64898/2026.06.08.730995</a>
    design:
      layout: grid
---
