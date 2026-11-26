import assert from "node:assert/strict";
import { PublicKey } from "@solana/web3.js";

const WALLET = new PublicKey("B2M6bVA2Ak5XGuvhRsd1BR1FN8SZRcjfzECiFWxgVcMx");
const PROGRAM_ID = new PublicKey("11111111111111111111111111111111");

const [vaultPda, bump] = PublicKey.findProgramAddressSync(
  [Buffer.from("vault"), WALLET.toBuffer()],
  PROGRAM_ID
);

assert.ok(PublicKey.isOnCurve(vaultPda.toBuffer()) === false, "PDA must be off-curve");
assert.ok(bump >= 0 && bump <= 255, "Bump must be a valid u8");
assert.equal(WALLET.toBase58(), "B2M6bVA2Ak5XGuvhRsd1BR1FN8SZRcjfzECiFWxgVcMx");

console.log("All Week 14 assertions passed. Vault PDA:", vaultPda.toBase58());
