const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {

	if (!event || event === null) {
		return '0';
	}

	let candidate = typeof event === "object" ? JSON.stringify(event) : String(event);

	if (typeof candidate !== "string") {
		candidate = JSON.stringify(candidate);
	}

	if (candidate.length > 256) {
		candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
	}

	return candidate;
};