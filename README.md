# UNKNOWN MACHINE

4人ターン制の協力推理ゲームMVP。

## ルール

- 4人が同じ未知機械を操作する
- 毎ターン、各プレイヤーは8個の操作から1つだけ選ぶ
- 4人分の入力が揃うと同時解決する
- 操作の効果はゲーム開始時にランダムで割り当てられ、説明されない
- 観測ログと数値変化から内部法則を推理する
- 12ターン以内に以下を満たした状態で START を実行すれば勝利
  - POWER >= 90
  - TEMP 40〜60
  - PRESSURE 30〜60
  - STABILITY >= 50
- PRESSURE >= 100、TEMP <= 0 / >= 100、STABILITY <= 0 で即失敗

## オンライン

Supabase Realtime Broadcastを使用。ホスト端末がゲーム状態と秘密ルールを管理するMVP方式。

- 6桁ルームコード
- 最大4人
- 空席をBOTで埋めて1人でもテスト可能
- DB保存なし
- 認証なし
- 切断復帰なし
- 本番用の不正対策なし

## Deploy

GitHub Pages + GitHub Actions。

Repository Settings > Pages > Build and deployment > Source を `GitHub Actions` に設定してからworkflowを実行する。
