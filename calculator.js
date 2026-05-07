/**
 * Calculates compounding growth for MMF with monthly deposits
 * @param {number} p - Initial Principal
 * @param {number} d - Monthly Deposit
 * @param {number} r - Annual Interest Rate (e.g., 11 for 11%)
 * @param {number} t - Time in Years
 */
function projectMMF(p, d, r, t) {
    let total = p;
    let monthlyRate = (r / 100) / 12;
    let months = t * 12;

    for (let i = 0; i < months; i++) {
        total = (total + d) * (1 + monthlyRate);
    }

    return {
        finalBalance: total.toLocaleString('en-KE', { style: 'currency', currency: 'KES' }),
        totalInvested: (p + (d * months)).toLocaleString('en-KE', { style: 'currency', currency: 'KES' }),
        interestEarned: (total - (p + (d * months))).toLocaleString('en-KE', { style: 'currency', currency: 'KES' })
    };
}

// Example: Starting with 10k, adding 5k monthly at 11% for 5 years
console.table(projectMMF(10000, 5000, 11, 5));