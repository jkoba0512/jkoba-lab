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
