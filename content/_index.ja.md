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
      count: 3

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

            脳の運動は、神経集団の状態が時間発展するダイナミクスから生まれます。同じ原理にならい、内部状態が力学系として時間発展するニューラルネットワーク — Liquid Neural Networks（CfC）、LSTM、Mamba などの状態空間モデル — の上に制御器を構築し、能動的推論を載せる基盤とします。その内部ダイナミクスが身体と環境の変化を追い、小脳に似た誤差信号で小さな読み出し層だけを適応させれば運動を修正できる場合があり、適応を速く安価に保てます。
          image: research-themes/liquid-neural-networks.png
    design:
      layout: cards

  - block: features
    id: selected-topics
    content:
      title: Selected Research Topics
      text: |-
        研究の考え方を、技術的な詳細に入る前に把握できるように短く紹介します。論文タイトルと DOI は原文のまま掲載しています。<a href="/jkoba-lab/ja/research-topics/" class="text-primary-600 dark:text-primary-400 font-medium hover:underline">すべての研究トピックを見る &rarr;</a>
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
        - name: 読み出し適応と学習後に残る補償
          icon: hero/bolt
          image: selected-topics/climbing-fiber-readout-adaptation.svg
          description: |-
            腕が動きをそらす力に適応したあとには、その力を取り除くと反対方向へずれる「残効」が現れることがあります。この研究では、残効だけでなく、学習された補償の内容や、学習を止めた後にも性能が保たれるかを調べます。速度に応じた横向きの力が加わる条件で、トルク駆動の 2 リンク腕が 8 方向へ到達運動を行うシミュレーションを使いました。適応するのは線形のトルク読み出しだけで、その特徴を生成するネットワークは固定します。疎な神経回路型配線を含む 3 種類の連続時間ネットワーク構成に加え、echo-state network と動径基底関数を特徴に使う構成を比較し、読み出しには LMS または RLS の更新則を用います。3 つのモデル初期値で学習率を選び、別の 10 初期値と 3 種類の力場で評価しました。6 方式すべてが固定読み出しの基準より追跡性能を改善し、全評価試行で設定した残効基準を満たしました。さらに、学習された出力変化が理想的な補償にどれだけ近いかを測り、更新を止めた最終読み出しでも制御性能を評価しました。更新停止後の追跡誤差は、適応前の制御器に比べて 40〜97%低下しました。ただし、準備条件やハイパーパラメータが方式間で異なるため、特徴の種類や更新則だけの効果を切り分けた比較ではありません。<br><br>
            関連プレプリント:<br>
            <strong>Readout adaptation in simulated arm reaching: learned
            compensation and performance after updates stop</strong><br>
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
