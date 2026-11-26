# Test Plan — Week 14

- **Account:** `aliz43`
- **Wallet:** `B2M6bVA2Ak5XGuvhRsd1BR1FN8SZRcjfzECiFWxgVcMx`
- **Cluster:** Devnet

## Scenarios
1. Derive Vault PDA with seeds `["vault", authority]` and verify off-curve address.
2. Validate `deposit(amount)` rejects zero amount and updates `total_deposited`.
3. Validate `withdraw(amount)` checks sufficient vault balance and signs with PDA seeds.
4. Validate `set_paused(true)` blocks `deposit` and `withdraw`.
