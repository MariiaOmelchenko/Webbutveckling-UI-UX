// Bas-URL för Exchange Rates API (se till att använda rätt API-nyckel om det behövs)
const apiKey = 'DIN_API_NYCKEL';
const apiUrl = `https://open.er-api.com/v6/latest/`;  // eller valfritt API

// Funktion för att konvertera valuta
async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('currency').value;
    const toCurrency = document.getElementById('convertTo').value;

    if (!amount || amount <= 0) {
        alert("Ange ett giltigt belopp.");
        return;
    }

    try {
        // Hämta växelkursen från API:t
        const response = await fetch(`${apiUrl}${fromCurrency}`);
        if (!response.ok) throw new Error('Kunde inte hämta data från API:t');
        
        const data = await response.json();

        // Hämta växelkursen och beräkna konverterat belopp
        const rate = data.rates[toCurrency];
        if (!rate) throw new Error(`Valutan ${toCurrency} är inte tillgänglig.`);

        const convertedAmount = (amount * rate).toFixed(2);

        // Visa resultatet
        document.getElementById('result').textContent = 
            `${amount} ${fromCurrency} är lika med ${convertedAmount} ${toCurrency}`;
    } catch (error) {
        console.error("Fel vid valutakonvertering:", error);
        document.getElementById('result').textContent = "Ett fel inträffade vid hämtning av data.";
    }
}
