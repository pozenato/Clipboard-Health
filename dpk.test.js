const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe(`deterministicPartitionKey`, () => {
	test(`It should return the literal '0' when given no input`, () => {
		const expectedResult = "0";
		const result = deterministicPartitionKey();
		expect(result).toBe(expectedResult);
	});

	test(`It should return default partition key for null input`, () => {
		const arg = null;
		const expectedResult = "0";
		const result = deterministicPartitionKey(arg);
		expect(result).toBe(expectedResult);
	});

	test(`It should return default partition key for undefined input`, () => {
		const arg = undefined;
		const expectedResult = "0";
		const result = deterministicPartitionKey(arg);
		expect(result).toBe(expectedResult);
	});

	test(`It should return default partition key for empty object input`, () => {
		const arg = {};
		const expectedResult = "{}";
		const result = deterministicPartitionKey(arg);
		expect(result).toBe(expectedResult);
	});

	test(`It should generate partition key for non-string input`, () => {
		const arg = { key: 123 };
		const expectedResult = "{\"key\":123}";
		const result = deterministicPartitionKey(arg);
		expect(result).toBe(expectedResult);
	});

	test(`It should generate partition key for long input`, () => {
		const arg = { key: "a".repeat(300) };
		const expectedResult = crypto.createHash("sha3-512").update(JSON.stringify(arg)).digest("hex");
		const result = deterministicPartitionKey(arg);
		expect(result).toBe(expectedResult);
	});

	test(`It should generate partition key for string input`, () => {
		const arg = "test";
		const expectedResult = "test";
		const result = deterministicPartitionKey(arg);
		expect(result).toBe(expectedResult);
	});

	test(`It should generate hash for long string input`, () => {
		const arg = "a".repeat(300);
		const expectedResult = crypto.createHash("sha3-512").update(arg).digest("hex");
		const result = deterministicPartitionKey(arg);
		expect(result).toBe(expectedResult);
	});

	test(`It should generate partition key for valid input`, () => {
		const arg = { key: "value" };
		const expectedHash = crypto
			.createHash("sha3-512")
			.update(JSON.stringify(arg))
			.digest("hex");
		const expectedValue = expectedHash.length > 256 ? expectedHash : JSON.stringify(arg);
		const result = deterministicPartitionKey(arg);
		expect(result).toBe(expectedValue);
	});
});